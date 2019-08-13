interface ElProps {
  m?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 'auto' | 'px' | -1 | -2 | -3 | -4 | -5 | -6 | -8 | -10 | -12 | -16 | -20 | -24 | -32 | -40 | -48 | -56 | -64 | '-px'
  my?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 'auto' | 'px' | -1 | -2 | -3 | -4 | -5 | -6 | -8 | -10 | -12 | -16 | -20 | -24 | -32 | -40 | -48 | -56 | -64 | '-px'
  mx?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 'auto' | 'px' | -1 | -2 | -3 | -4 | -5 | -6 | -8 | -10 | -12 | -16 | -20 | -24 | -32 | -40 | -48 | -56 | -64 | '-px'
  mt?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 'auto' | 'px' | -1 | -2 | -3 | -4 | -5 | -6 | -8 | -10 | -12 | -16 | -20 | -24 | -32 | -40 | -48 | -56 | -64 | '-px'
  mr?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 'auto' | 'px' | -1 | -2 | -3 | -4 | -5 | -6 | -8 | -10 | -12 | -16 | -20 | -24 | -32 | -40 | -48 | -56 | -64 | '-px'
  mb?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 'auto' | 'px' | -1 | -2 | -3 | -4 | -5 | -6 | -8 | -10 | -12 | -16 | -20 | -24 | -32 | -40 | -48 | -56 | -64 | '-px'
  ml?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 'auto' | 'px' | -1 | -2 | -3 | -4 | -5 | -6 | -8 | -10 | -12 | -16 | -20 | -24 | -32 | -40 | -48 | -56 | -64 | '-px'
  p?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 'px'
  py?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 'px'
  px?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 'px'
  pt?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 'px'
  pr?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 'px'
  pb?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 'px'
  pl?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 'px'
  block?: boolean
  inlineBlock?: boolean
  inline?: boolean
  flex?: boolean
  inlineFlex?: boolean
  table?: boolean
  tableRow?: boolean
  tableCell?: boolean
  hidden?: boolean
}


const resolvers: { [key: string]: (props: { [key: string]: any; }) => string[]; } = {
  margin(props: { [key: string]: any; }): string[] {
  const keysArray = ["m","my","mx","mt","mr","mb","ml"]
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
      return `${negativeStr}${keyStr}-${valueStr}`
    })
  return filtered
},
  padding(props: { [key: string]: any; }): string[] {
          const keysArray = ["p","py","px","pt","pr","pb","pl"]
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
              return `${negativeStr}${keyStr}-${valueStr}`
            })
          return filtered
        },
  display(props: { [key: string]: any; }): string[] {
          const keysArray = ["block","inline-block","inline","flex","inline-flex","table","table-row","table-cell","hidden"]
          const filtered = Object.keys(props)
            .filter(prop => keysArray.some(k => k === prop))
            .map(propKey => [propKey, props[propKey]])
            .filter(([key, value]) => Boolean(value))
            .map(([key, value]) => key)
          return filtered
        }
}


const El = (props: ElProps) => {
  const classes = Object.keys(resolvers).map(resolverKey => resolvers[resolverKey](props).join(' ')).join(' ')
  console.log(classes)
}