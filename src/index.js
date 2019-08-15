const path = require('path')
const fs = require('fs')
const rimraf = require('rimraf')

const distPath = path.join(__dirname, '..', 'dist')

rimraf.sync(distPath)
fs.mkdirSync(distPath)

require('./plugins-to-props')
require('./transpile')

fs.writeFileSync(
  path.join(distPath, 'index.js'),
  `import El from './El'\nexport default El`
)
