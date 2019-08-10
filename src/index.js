const resolveConfig = require('tailwindcss/lib/util/resolveConfig').default
const defaultConfig = require('tailwindcss/stubs/defaultConfig.stub')

const _ = require('lodash')

const margin = require('./plugins/margin')
const padding = require('./plugins/padding')
const display = require('./plugins/display')

const main = () => {
  const config = resolveConfig([defaultConfig])

  Promise.all([margin(config), padding(config), display(config)]).then(
    allkeys => {
      // allkeys: Map[]
      const prefix = `interface ElProps {`
      const suffix = `}`

      const bodyLines = []

      const body = allkeys.forEach(pluginKeys => {
        Array.from(pluginKeys).forEach(([key, types]) => {
          console.log(types)
          const typesStr = types.map(type => {
            if (type === Boolean) {
              return 'boolean'
            }

            if (typeof type === 'number') return type

            return `'${type}'`
          })
          bodyLines.push(`  ${_.camelCase(key)}?: ${typesStr.join(' | ')}`)
        })
      })

      console.log(`
${prefix}
${bodyLines.join('\n')}
${suffix}
`)

      // console.log(allkeys[0] instanceof Map)
    }
  )
}

main()
