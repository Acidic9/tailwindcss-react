// Templating
const Mustache = require('mustache')
const fs = require('fs')
const path = require('path')
const TwTsx = fs.readFileSync(path.join(__dirname, 'Tw.tsx.dot')).toString()
const prettier = require('prettier')

// Utils
const processPlugin = require('./utils/processPlugin')
const parseStyles = require('./utils/parseStyles')
const capitalize = require('./utils/capitalize')
const resolveConfig = require('tailwindcss/lib/util/resolveConfig').default
const flat = require('flat')
const _ = require('lodash')

// Configs and Schemas
const schema = require('./schema.json')
const tailwindConfig = resolveConfig([
  require('tailwindcss/stubs/defaultConfig.stub'),
])

// Get plugins
const pluginNames = Object.keys(schema)

// Get plugin results
let pluginClasses = pluginNames.map(pluginName => {
  let classes = null

  try {
    processPlugin(tailwindConfig, pluginName, {
      addUtilities: utilities => (classes = utilities),
    })
  } catch (err) {
    console.error(`failed to parse plugin '${pluginName}'`)
    console.error(err)
    process.exit(1)
  }

  return classes
})

// Clean plugin classes (remove ::placeholder)
const cleanClasses = classes => {
  for (const selector in classes) {
    if (!isNaN(parseInt(selector)) || classes[selector] instanceof Array) {
      classes[selector] = cleanClasses(classes[selector])

      continue
    }

    if (typeof classes[selector] !== 'object') return classes

    let cleanedSelector = selector
    cleanedSelector = cleanedSelector.substr(1) // Remove '.'
    if (cleanedSelector.indexOf(':') !== -1)
      // Remove :after or ::placeholder, etc.
      cleanedSelector = cleanedSelector.split(':')[0]

    classes[cleanedSelector] = classes[selector]
    delete classes[selector]
  }

  return classes
}

pluginClasses = pluginClasses.map(cleanClasses)

// Flatten classes
pluginClasses = flat(pluginClasses)
for (const selector in pluginClasses) {
  const selectorParts = selector.split('.')
  const newSelector = selectorParts[selectorParts.length - 2]
  if (newSelector == null) {
    delete pluginClasses[selector]
    continue
  }
  pluginClasses[newSelector] = {
    [selectorParts[selectorParts.length - 1]]: pluginClasses[selector],
  }
  delete pluginClasses[selector]
}

// Sync with schema
const schemaClasses = Object.values(flat(schema))
const tsTypes = schemaClasses
  .map(schemaClass => {
    const pluginSelectors = Object.keys(pluginClasses)
    if (schemaClass.endsWith('*')) {
      const matchingClasses = pluginSelectors.filter(pluginSelector => {
        if (pluginSelector.startsWith('-'))
          pluginSelector = pluginSelector.substr(1)
        return pluginSelector.startsWith(
          `${schemaClass.substr(0, schemaClass.length - 1)}-`
        )
      })

      const values = matchingClasses
        .map(matchingClass => {
          const isNegative = matchingClass.startsWith('-')
          if (isNegative) {
            matchingClass = matchingClass.substr(1)
          }

          return `${isNegative ? '-' : ''}${matchingClass.substr(
            schemaClass.length
          )}`
        })
        .map(value => Number(value) || value)
        .map(value => (typeof value === 'number' ? value : `'${value}'`))

      return {
        propName: _.camelCase(schemaClass.substr(0, schemaClass.length - 1)),
        types: values,
      }
    }

    const pluginSelector = pluginSelectors.find(
      pluginSelector => pluginSelector === schemaClass
    )
    if (pluginSelector) {
      return {
        propName: _.camelCase(schemaClass),
        types: ['boolean'],
      }
    }

    return null
  })
  .filter(tsType => tsType != null)

const tsTypesObject = {}
tsTypes.forEach(({ propName, types }) => {
  if (tsTypesObject.hasOwnProperty(propName)) {
    // Merge types
    tsTypesObject[propName] = _.uniq([
      ...tsTypesObject[propName],
      ..._.uniq(types),
    ])
    return
  }

  tsTypesObject[propName] = [..._.uniq(types)]
})

const twTypes = []
for (const propName in tsTypesObject) {
  const types = tsTypesObject[propName]
  twTypes.push(`export type ${capitalize(propName)} = ${types.join(' | ')}`)
}

const propInterface = []
for (const propName in tsTypesObject) {
  propInterface.push(
    `${propName}?: ${capitalize(propName)} | ${capitalize(propName)}[]`
  )
}

Mustache.escape = function(text) {
  return text
}
let result = Mustache.render(TwTsx, {
  propTypes: twTypes.join('\n'),
  twProps: propInterface.map(ln => `  ${ln}`).join('\n'),
  twPropKeys: JSON.stringify(Object.keys(tsTypesObject)),
})

result = prettier.format(result, {
  parser: 'typescript',

  arrowParens: 'avoid',
  bracketSpacing: true,
  insertPragma: false,
  jsxBracketSameLine: false,
  printWidth: 80,
  proseWrap: 'preserve',
  requirePragma: false,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
})

fs.writeFileSync(path.join(__dirname, '..', 'dist', 'Ts.tsx'), result)
