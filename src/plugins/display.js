const processPlugin = require('../utils/processPlugin')
const parseStyles = require('../utils/parseStyles')

const display = config => {
  return new Promise((resolve, _reject) => {
    processPlugin(config, 'display', {
      addUtilities: (utilities, options) => {
        const styles = parseStyles(utilities, options)

        const keys = new Map()

        styles.walkRules(rule => {
          const key = rule.selector.substr(1)

          if (!keys.has(key)) {
            keys.set(key, Boolean)
          }
        })

        keys.forEach((types, key) => {
          keys.set(key, [types])
        })

        const marginResolverStr = `
        display(props: { [key: string]: any; }): string[] {
          const keysArray = ${`${JSON.stringify(Array.from(keys.keys()))}`}
          const filtered = Object.keys(props)
            .filter(prop => keysArray.some(k => k === prop))
            .map(propKey => [propKey, props[propKey]])
            .filter(([key, value]) => Boolean(value))
            .map(([key, value]) => key)
          return filtered
        }
        `

        resolve({
          keys,
          resolver: marginResolverStr,
        })
      },
    })
  })
}

module.exports = display
