// Utils
const processPlugin = require('./utils/processPlugin')
const parseStyles = require('./utils/parseStyles')
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
    // bg* or block ...
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
          // content-center
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

const tsLines = []
for (const propName in tsTypesObject) {
  const types = tsTypesObject[propName]
  tsLines.push(`${propName}?: ${types.join(' | ')}`)
}

console.log(tsLines.join('\n'))

console.log(JSON.stringify(Object.keys(tsTypesObject)))
