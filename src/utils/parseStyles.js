const _ = require('lodash')
const postcss = require('postcss')
const Node = require('postcss/lib/node')
const parseObjectStyles = require('tailwindcss/lib/util/parseObjectStyles')
  .default

const resolveStyles = styles => {
  if (!Array.isArray(styles)) {
    return resolveStyles([styles])
  }

  return _.flatMap(styles, style =>
    style instanceof Node ? style : parseObjectStyles(style)
  )
}

const parseStyles = (obj, options) => {
  const defaultOptions = {
    variants: [],
    respectPrefix: true,
    respectImportant: true,
  }

  options = Array.isArray(options)
    ? Object.assign({}, defaultOptions, { variants: options })
    : _.defaults(options, defaultOptions)

  return postcss.root({ nodes: resolveStyles(obj) })
}

module.exports = parseStyles
