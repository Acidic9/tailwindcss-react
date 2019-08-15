const babel = require('@babel/core')

const fs = require('fs')
const path = require('path')
const prettier = require('prettier')

const result = babel.transformFileSync(
  path.join(__dirname, '..', 'dist', 'Ts.tsx')
)

const formattedCode = prettier.format(result.code, {
  parser: 'babel',

  arrowParens: 'avoid',
  bracketSpacing: true,
  insertPragma: false,
  jsxBracketSameLine: false,
  printWidth: 80,
  proseWrap: 'preserve',
  requirePragma: false,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
})

fs.writeFileSync(path.join(__dirname, '..', 'dist', 'Ts.js'), formattedCode)
