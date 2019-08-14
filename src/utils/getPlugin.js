const getPlugin = pluginName => {
  const result = require(`tailwindcss/lib/plugins/${pluginName}`)
  if (result.hasOwnProperty('default')) {
    return result.default()
  }

  return result()
}

module.exports = getPlugin
