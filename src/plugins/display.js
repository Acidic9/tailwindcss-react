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

        resolve(keys)
      },
    })
  })
}

module.exports = display
