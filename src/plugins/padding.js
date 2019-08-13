const processPlugin = require('../utils/processPlugin')
const parseStyles = require('../utils/parseStyles')

const display = config => {
  return new Promise((resolve, _reject) => {
    processPlugin(config, 'padding', {
      addUtilities: (utilities, options) => {
        const styles = parseStyles(utilities, options)

        const keys = new Map()

        styles.walkRules(rule => {
          const exp = /\.(\-)?(\w+)\-([a-z0-9]+)/g
          const result = exp.exec(rule.selector)
          const negative = result[1] !== undefined
          const key = result[2]
          const value = result[3]

          if (!keys.has(key)) {
            keys.set(key, new Set())
          }

          keys.get(key).add(`${negative ? '-' : ''}${value}`)
        })

        keys.forEach((types, key) => {
          keys.set(
            key,
            Array.from(types).map(type => {
              const numVal = Number(type)
              return isNaN(numVal) ? type : numVal
            })
          )
        })

        const paddingResolverStr = `
        padding(props: { [key: string]: any; }): string[] {
          const keysArray = ${`${JSON.stringify(Array.from(keys.keys()))}`}
          const filtered = Object.keys(props)
            .filter(prop => keysArray.some(k => k === prop))
            .map(propKey => [propKey, props[propKey]])
            .map(([key, value]) => {
              const negativeStr =
                typeof value === 'number' && value < 0 ? '-' : ''
              const keyStr = key
              const valueStr = String(
                typeof value === 'number' ? Math.abs(value) : value
              )
              return \`\${negativeStr}\${keyStr}-\${valueStr}\`
            })
          return filtered
        }
        `

        resolve({
          keys,
          resolver: paddingResolverStr,
        })
      },
    })
  })
}

module.exports = display
