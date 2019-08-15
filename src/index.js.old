const resolveConfig = require('tailwindcss/lib/util/resolveConfig').default
const defaultConfig = require('tailwindcss/stubs/defaultConfig.stub')

const _ = require('lodash')

const margin = require('./plugins/margin')
const padding = require('./plugins/padding')
const display = require('./plugins/display')

const main = () => {
  const config = resolveConfig([defaultConfig])

  Promise.all([margin(config), padding(config), display(config)]).then(
    allKeys => {
      // allKeys: { keys: Map[], resolver: string }
      const prefix = `interface ElProps {`
      const suffix = `}`

      const bodyLines = []

      const body = allKeys.forEach(({ keys: pluginKeys }) => {
        Array.from(pluginKeys).forEach(([key, types]) => {
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

      // Resolvers
      const resolversInner = allKeys
        .map(({ resolver }) => resolver.trim())
        .join(',\n  ')
      console.log(`
const resolvers: { [key: string]: (props: { [key: string]: any; }) => string[]; } = {
  ${resolversInner}
}
`)

      // Render function
      console.log(`
const El = (props: ElProps) => {
  const classes = Object.keys(resolvers).map(resolverKey => resolvers[resolverKey](props).join(' ')).join(' ')
  console.log(classes)
}
`)
    }
  )
}

main()
