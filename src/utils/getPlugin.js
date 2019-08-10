const getPlugin = pluginName => {
  return require(`tailwindcss/lib/plugins/${pluginName}`).default()
}

module.exports = getPlugin
