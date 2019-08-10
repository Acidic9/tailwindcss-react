const getPlugin = require('./getPlugin')

const _ = require('lodash')

const escapeClassName = require('tailwindcss/lib/util/escapeClassName').default
const prefixSelector = require('tailwindcss/lib/util/prefixSelector').default

const processPlugin = (config, pluginName, overrides) => {
  const pluginFn = getPlugin(pluginName)

  const applyConfiguredPrefix = selector => {
    return prefixSelector(config.prefix, selector)
  }

  const getConfigValue = (path, defaultValue) =>
    _.get(config, path, defaultValue)

  pluginFn({
    // postcss,
    config: getConfigValue,
    theme: (path, defaultValue) =>
      getConfigValue(`theme.${path}`, defaultValue),
    variants: (path, defaultValue) => {
      if (Array.isArray(config.variants)) {
        return config.variants
      }

      return getConfigValue(`variants.${path}`, defaultValue)
    },
    e: escapeClassName,
    prefix: applyConfiguredPrefix,
    addUtilities: (utilities, options) => {},
    addComponents: (components, options) => {},
    addBase: baseStyles => {},
    addVariant: (name, generator) => {},
    ...overrides,
  })
}

module.exports = processPlugin
