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

const twTypes = []
for (const propName in tsTypesObject) {
  const types = tsTypesObject[propName]
  twTypes.push(`export type ${capitalize(propName)} = ${types.join(' | ')}`)
}

const propInterface = []
for (const propName in tsTypesObject) {
  propInterface.push(`${propName}?: ${capitalize(propName)}`)
}

console.log(`import * as React from 'react'`)
console.log('')
console.log(twTypes.join('\n'))
console.log('')
console.log('interface ElProps {')
console.log('  children?: React.ReactNode')
console.log('  is?: string')
console.log('  [x: string]: any')
console.log('')
console.log(
  '  // Below was generated using https://github.com/Acidic9/tailwindcss-react (WIP)'
)
console.log(propInterface.map(ln => `  ${ln}`).join('\n'))
console.log('}')
console.log('')
console.log('const convertToKebabCase = (str: string) => {')
console.log('  return str')
console.log(`    .replace(/([a-z])([A-Z])/g, '$1-$2')`)
console.log(`    .replace(/\s+/g, '-')`)
console.log(`    .toLowerCase()`)
console.log('}')
console.log('')
console.log('const resolveTwClasses = (props: { [key: string]: any }) => {')
console.log('  const twProps = {}')
console.log('  Object.keys(props)')
console.log('    .filter(prop =>')
console.log(
  `      ${JSON.stringify(Object.keys(tsTypesObject))}.includes(prop))`
)
console.log('    .forEach(propName => {')
console.log('      twProps[propName] = props[propName]')
console.log('    })')
console.log('')
console.log('  const classes: string[] = []')
console.log('  for (const propName in twProps) {')
console.log('    const kebabPropname = convertToKebabCase(propName)')
console.log('    let value = String(twProps[propName])')
console.log('')
console.log(`    if (typeof value === 'boolean') {`)
console.log('      classes.push(kebabPropname)')
console.log('      continue')
console.log('    }')
console.log('')
console.log("    const isNegative = value.startsWith(' - ')")
console.log('    if (isNegative) {')
console.log('      value = value.substr(1)')
console.log('    }')
console.log('')
console.log(`    const valueStr = value === 'true' ? '' : \`-\${value}\``)
console.log('')
console.log(
  `    classes.push(\`\${isNegative ? '-' : ''}\${kebabPropname}\${valueStr}\`)`
)
console.log('  }')
console.log('')
console.log(`  return classes.join(' ')`)
console.log('}')
console.log('')
console.log('const El: React.FC<ElProps> = (props: ElProps) => {')
console.log('  const classes = resolveTwClasses(props)')
console.log(`  const tag = props.is || 'div'`)
console.log('  return React.createElement(')
console.log('    tag,')
console.log('    {')
console.log('      ...props,')
console.log('      children: undefined,')
console.log('      class: classes,')
console.log('    },')
console.log('    props.children')
console.log('  )')
console.log('}')
console.log('')
console.log('export default El')
