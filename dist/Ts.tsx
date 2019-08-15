import * as React from 'react'

export type SrOnly = boolean
export type NotSrOnly = boolean
export type Content = 'center' | 'start' | 'end' | 'between' | 'around'
export type Items = 'start' | 'end' | 'center' | 'baseline' | 'stretch'
export type Self = 'auto' | 'start' | 'end' | 'center' | 'stretch'
export type AppearanceNone = boolean
export type Bg =
  | 'fixed'
  | 'local'
  | 'scroll'
  | 'transparent'
  | 'black'
  | 'white'
  | 'gray-100'
  | 'gray-200'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-800'
  | 'gray-900'
  | 'red-100'
  | 'red-200'
  | 'red-300'
  | 'red-400'
  | 'red-500'
  | 'red-600'
  | 'red-700'
  | 'red-800'
  | 'red-900'
  | 'orange-100'
  | 'orange-200'
  | 'orange-300'
  | 'orange-400'
  | 'orange-500'
  | 'orange-600'
  | 'orange-700'
  | 'orange-800'
  | 'orange-900'
  | 'yellow-100'
  | 'yellow-200'
  | 'yellow-300'
  | 'yellow-400'
  | 'yellow-500'
  | 'yellow-600'
  | 'yellow-700'
  | 'yellow-800'
  | 'yellow-900'
  | 'green-100'
  | 'green-200'
  | 'green-300'
  | 'green-400'
  | 'green-500'
  | 'green-600'
  | 'green-700'
  | 'green-800'
  | 'green-900'
  | 'teal-100'
  | 'teal-200'
  | 'teal-300'
  | 'teal-400'
  | 'teal-500'
  | 'teal-600'
  | 'teal-700'
  | 'teal-800'
  | 'teal-900'
  | 'blue-100'
  | 'blue-200'
  | 'blue-300'
  | 'blue-400'
  | 'blue-500'
  | 'blue-600'
  | 'blue-700'
  | 'blue-800'
  | 'blue-900'
  | 'indigo-100'
  | 'indigo-200'
  | 'indigo-300'
  | 'indigo-400'
  | 'indigo-500'
  | 'indigo-600'
  | 'indigo-700'
  | 'indigo-800'
  | 'indigo-900'
  | 'purple-100'
  | 'purple-200'
  | 'purple-300'
  | 'purple-400'
  | 'purple-500'
  | 'purple-600'
  | 'purple-700'
  | 'purple-800'
  | 'purple-900'
  | 'pink-100'
  | 'pink-200'
  | 'pink-300'
  | 'pink-400'
  | 'pink-500'
  | 'pink-600'
  | 'pink-700'
  | 'pink-800'
  | 'pink-900'
  | 'bottom'
  | 'center'
  | 'left'
  | 'left-bottom'
  | 'left-top'
  | 'right'
  | 'right-bottom'
  | 'right-top'
  | 'top'
  | 'repeat'
  | 'no-repeat'
  | 'repeat-x'
  | 'repeat-y'
  | 'repeat-round'
  | 'repeat-space'
  | 'auto'
  | 'cover'
  | 'contain'
export type Border =
  | 'collapse'
  | 'separate'
  | 'transparent'
  | 'black'
  | 'white'
  | 'gray-100'
  | 'gray-200'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-800'
  | 'gray-900'
  | 'red-100'
  | 'red-200'
  | 'red-300'
  | 'red-400'
  | 'red-500'
  | 'red-600'
  | 'red-700'
  | 'red-800'
  | 'red-900'
  | 'orange-100'
  | 'orange-200'
  | 'orange-300'
  | 'orange-400'
  | 'orange-500'
  | 'orange-600'
  | 'orange-700'
  | 'orange-800'
  | 'orange-900'
  | 'yellow-100'
  | 'yellow-200'
  | 'yellow-300'
  | 'yellow-400'
  | 'yellow-500'
  | 'yellow-600'
  | 'yellow-700'
  | 'yellow-800'
  | 'yellow-900'
  | 'green-100'
  | 'green-200'
  | 'green-300'
  | 'green-400'
  | 'green-500'
  | 'green-600'
  | 'green-700'
  | 'green-800'
  | 'green-900'
  | 'teal-100'
  | 'teal-200'
  | 'teal-300'
  | 'teal-400'
  | 'teal-500'
  | 'teal-600'
  | 'teal-700'
  | 'teal-800'
  | 'teal-900'
  | 'blue-100'
  | 'blue-200'
  | 'blue-300'
  | 'blue-400'
  | 'blue-500'
  | 'blue-600'
  | 'blue-700'
  | 'blue-800'
  | 'blue-900'
  | 'indigo-100'
  | 'indigo-200'
  | 'indigo-300'
  | 'indigo-400'
  | 'indigo-500'
  | 'indigo-600'
  | 'indigo-700'
  | 'indigo-800'
  | 'indigo-900'
  | 'purple-100'
  | 'purple-200'
  | 'purple-300'
  | 'purple-400'
  | 'purple-500'
  | 'purple-600'
  | 'purple-700'
  | 'purple-800'
  | 'purple-900'
  | 'pink-100'
  | 'pink-200'
  | 'pink-300'
  | 'pink-400'
  | 'pink-500'
  | 'pink-600'
  | 'pink-700'
  | 'pink-800'
  | 'pink-900'
  | 'solid'
  | 'dashed'
  | 'dotted'
  | 'double'
  | 'none'
  | '0'
  | 2
  | 4
  | 8
  | 't-0'
  | 'r-0'
  | 'b-0'
  | 'l-0'
  | 't-2'
  | 'r-2'
  | 'b-2'
  | 'l-2'
  | 't-4'
  | 'r-4'
  | 'b-4'
  | 'l-4'
  | 't-8'
  | 'r-8'
  | 'b-8'
  | 'l-8'
  | 't'
  | 'r'
  | 'b'
  | 'l'
  | boolean
export type Rounded =
  | boolean
  | 'none'
  | 'sm'
  | 'lg'
  | 'full'
  | 't-none'
  | 'r-none'
  | 'b-none'
  | 'l-none'
  | 't-sm'
  | 'r-sm'
  | 'b-sm'
  | 'l-sm'
  | 't'
  | 'r'
  | 'b'
  | 'l'
  | 't-lg'
  | 'r-lg'
  | 'b-lg'
  | 'l-lg'
  | 't-full'
  | 'r-full'
  | 'b-full'
  | 'l-full'
  | 'tl-none'
  | 'tr-none'
  | 'br-none'
  | 'bl-none'
  | 'tl-sm'
  | 'tr-sm'
  | 'br-sm'
  | 'bl-sm'
  | 'tl'
  | 'tr'
  | 'br'
  | 'bl'
  | 'tl-lg'
  | 'tr-lg'
  | 'br-lg'
  | 'bl-lg'
  | 'tl-full'
  | 'tr-full'
  | 'br-full'
  | 'bl-full'
export type RoundedT = 'none' | 'sm' | 'lg' | 'full'
export type RoundedR = 'none' | 'sm' | 'lg' | 'full'
export type RoundedB = 'none' | 'sm' | 'lg' | 'full'
export type RoundedL = 'none' | 'sm' | 'lg' | 'full'
export type RoundedTl = 'none' | 'sm' | 'lg' | 'full'
export type RoundedTr = 'none' | 'sm' | 'lg' | 'full'
export type RoundedBr = 'none' | 'sm' | 'lg' | 'full'
export type RoundedBl = 'none' | 'sm' | 'lg' | 'full'
export type Shadow =
  | boolean
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | 'inner'
  | 'outline'
  | 'none'
export type Cursor =
  | 'auto'
  | 'default'
  | 'pointer'
  | 'wait'
  | 'text'
  | 'move'
  | 'not-allowed'
export type Block = boolean
export type InlineBlock = boolean
export type Inline = boolean
export type Flex =
  | boolean
  | 1
  | 'auto'
  | 'initial'
  | 'none'
  | 'row'
  | 'row-reverse'
  | 'col'
  | 'col-reverse'
  | 'grow-0'
  | 'grow'
  | 'shrink-0'
  | 'shrink'
  | 'wrap'
  | 'wrap-reverse'
  | 'no-wrap'
export type InlineFlex = boolean
export type Table = boolean | 'row' | 'cell' | 'auto' | 'fixed'
export type TableRow = boolean
export type TableCell = boolean
export type Hidden = boolean
export type Fill = 'current'
export type FlexGrow = boolean | '0'
export type FlexShrink = boolean | '0'
export type Float = 'right' | 'left' | 'none'
export type Clearfix = boolean
export type Font =
  | 'sans'
  | 'serif'
  | 'mono'
  | 'hairline'
  | 'thin'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black'
export type Text =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | 'left'
  | 'center'
  | 'right'
  | 'justify'
  | 'transparent'
  | 'black'
  | 'white'
  | 'gray-100'
  | 'gray-200'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-800'
  | 'gray-900'
  | 'red-100'
  | 'red-200'
  | 'red-300'
  | 'red-400'
  | 'red-500'
  | 'red-600'
  | 'red-700'
  | 'red-800'
  | 'red-900'
  | 'orange-100'
  | 'orange-200'
  | 'orange-300'
  | 'orange-400'
  | 'orange-500'
  | 'orange-600'
  | 'orange-700'
  | 'orange-800'
  | 'orange-900'
  | 'yellow-100'
  | 'yellow-200'
  | 'yellow-300'
  | 'yellow-400'
  | 'yellow-500'
  | 'yellow-600'
  | 'yellow-700'
  | 'yellow-800'
  | 'yellow-900'
  | 'green-100'
  | 'green-200'
  | 'green-300'
  | 'green-400'
  | 'green-500'
  | 'green-600'
  | 'green-700'
  | 'green-800'
  | 'green-900'
  | 'teal-100'
  | 'teal-200'
  | 'teal-300'
  | 'teal-400'
  | 'teal-500'
  | 'teal-600'
  | 'teal-700'
  | 'teal-800'
  | 'teal-900'
  | 'blue-100'
  | 'blue-200'
  | 'blue-300'
  | 'blue-400'
  | 'blue-500'
  | 'blue-600'
  | 'blue-700'
  | 'blue-800'
  | 'blue-900'
  | 'indigo-100'
  | 'indigo-200'
  | 'indigo-300'
  | 'indigo-400'
  | 'indigo-500'
  | 'indigo-600'
  | 'indigo-700'
  | 'indigo-800'
  | 'indigo-900'
  | 'purple-100'
  | 'purple-200'
  | 'purple-300'
  | 'purple-400'
  | 'purple-500'
  | 'purple-600'
  | 'purple-700'
  | 'purple-800'
  | 'purple-900'
  | 'pink-100'
  | 'pink-200'
  | 'pink-300'
  | 'pink-400'
  | 'pink-500'
  | 'pink-600'
  | 'pink-700'
  | 'pink-800'
  | 'pink-900'
export type Antialiased = boolean
export type SubpixelAntialiased = boolean
export type Italic = boolean
export type NotItalic = boolean
export type H =
  | '0'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 'auto'
  | 'px'
  | 'full'
  | 'screen'
export type Inset = '0' | 'auto' | 'y-0' | 'x-0' | 'y-auto' | 'x-auto'
export type InsetY = '0' | 'auto'
export type InsetX = '0' | 'auto'
export type Top = '0' | 'auto'
export type Right = '0' | 'auto'
export type Bottom = '0' | 'auto'
export type Left = '0' | 'auto'
export type Justify = 'start' | 'end' | 'center' | 'between' | 'around'
export type Tracking =
  | 'tighter'
  | 'tight'
  | 'normal'
  | 'wide'
  | 'wider'
  | 'widest'
export type Leading = 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'
export type List = 'inside' | 'outside' | 'none' | 'disc' | 'decimal'
export type M =
  | '0'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 'auto'
  | 'px'
  | -1
  | -2
  | -3
  | -4
  | -5
  | -6
  | -8
  | -10
  | -12
  | -16
  | -20
  | -24
  | -32
  | -40
  | -48
  | -56
  | -64
  | '-px'
export type My =
  | '0'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 'auto'
  | 'px'
  | -1
  | -2
  | -3
  | -4
  | -5
  | -6
  | -8
  | -10
  | -12
  | -16
  | -20
  | -24
  | -32
  | -40
  | -48
  | -56
  | -64
  | '-px'
export type Mx =
  | '0'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 'auto'
  | 'px'
  | -1
  | -2
  | -3
  | -4
  | -5
  | -6
  | -8
  | -10
  | -12
  | -16
  | -20
  | -24
  | -32
  | -40
  | -48
  | -56
  | -64
  | '-px'
export type Mt =
  | '0'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 'auto'
  | 'px'
  | -1
  | -2
  | -3
  | -4
  | -5
  | -6
  | -8
  | -10
  | -12
  | -16
  | -20
  | -24
  | -32
  | -40
  | -48
  | -56
  | -64
  | '-px'
export type Mr =
  | '0'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 'auto'
  | 'px'
  | -1
  | -2
  | -3
  | -4
  | -5
  | -6
  | -8
  | -10
  | -12
  | -16
  | -20
  | -24
  | -32
  | -40
  | -48
  | -56
  | -64
  | '-px'
export type Mb =
  | '0'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 'auto'
  | 'px'
  | -1
  | -2
  | -3
  | -4
  | -5
  | -6
  | -8
  | -10
  | -12
  | -16
  | -20
  | -24
  | -32
  | -40
  | -48
  | -56
  | -64
  | '-px'
export type Ml =
  | '0'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 'auto'
  | 'px'
  | -1
  | -2
  | -3
  | -4
  | -5
  | -6
  | -8
  | -10
  | -12
  | -16
  | -20
  | -24
  | -32
  | -40
  | -48
  | -56
  | -64
  | '-px'
export type MaxH = 'full' | 'screen'
export type MaxW =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | 'full'
export type MinH = '0' | 'full' | 'screen'
export type MinW = '0' | 'full'
export type Object =
  | 'contain'
  | 'cover'
  | 'fill'
  | 'none'
  | 'scale-down'
  | 'bottom'
  | 'center'
  | 'left'
  | 'left-bottom'
  | 'left-top'
  | 'right'
  | 'right-bottom'
  | 'right-top'
  | 'top'
export type Opacity = '0' | 25 | 50 | 75 | 100
export type Order =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 'first'
  | 'last'
  | 'none'
export type OutlineNone = boolean
export type Overflow =
  | 'auto'
  | 'hidden'
  | 'visible'
  | 'scroll'
  | 'x-auto'
  | 'y-auto'
  | 'x-hidden'
  | 'y-hidden'
  | 'x-visible'
  | 'y-visible'
  | 'x-scroll'
  | 'y-scroll'
export type OverflowX = 'auto' | 'hidden' | 'visible' | 'scroll'
export type OverflowY = 'auto' | 'hidden' | 'visible' | 'scroll'
export type Scrolling = 'touch' | 'auto'
export type P =
  | '0'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 'px'
export type Py =
  | '0'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 'px'
export type Px =
  | '0'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 'px'
export type Pt =
  | '0'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 'px'
export type Pr =
  | '0'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 'px'
export type Pb =
  | '0'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 'px'
export type Pl =
  | '0'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 'px'
export type Placeholder =
  | 'transparent'
  | 'black'
  | 'white'
  | 'gray-100'
  | 'gray-200'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-800'
  | 'gray-900'
  | 'red-100'
  | 'red-200'
  | 'red-300'
  | 'red-400'
  | 'red-500'
  | 'red-600'
  | 'red-700'
  | 'red-800'
  | 'red-900'
  | 'orange-100'
  | 'orange-200'
  | 'orange-300'
  | 'orange-400'
  | 'orange-500'
  | 'orange-600'
  | 'orange-700'
  | 'orange-800'
  | 'orange-900'
  | 'yellow-100'
  | 'yellow-200'
  | 'yellow-300'
  | 'yellow-400'
  | 'yellow-500'
  | 'yellow-600'
  | 'yellow-700'
  | 'yellow-800'
  | 'yellow-900'
  | 'green-100'
  | 'green-200'
  | 'green-300'
  | 'green-400'
  | 'green-500'
  | 'green-600'
  | 'green-700'
  | 'green-800'
  | 'green-900'
  | 'teal-100'
  | 'teal-200'
  | 'teal-300'
  | 'teal-400'
  | 'teal-500'
  | 'teal-600'
  | 'teal-700'
  | 'teal-800'
  | 'teal-900'
  | 'blue-100'
  | 'blue-200'
  | 'blue-300'
  | 'blue-400'
  | 'blue-500'
  | 'blue-600'
  | 'blue-700'
  | 'blue-800'
  | 'blue-900'
  | 'indigo-100'
  | 'indigo-200'
  | 'indigo-300'
  | 'indigo-400'
  | 'indigo-500'
  | 'indigo-600'
  | 'indigo-700'
  | 'indigo-800'
  | 'indigo-900'
  | 'purple-100'
  | 'purple-200'
  | 'purple-300'
  | 'purple-400'
  | 'purple-500'
  | 'purple-600'
  | 'purple-700'
  | 'purple-800'
  | 'purple-900'
  | 'pink-100'
  | 'pink-200'
  | 'pink-300'
  | 'pink-400'
  | 'pink-500'
  | 'pink-600'
  | 'pink-700'
  | 'pink-800'
  | 'pink-900'
export type PointerEvents = 'none' | 'auto'
export type Static = boolean
export type Fixed = boolean
export type Absolute = boolean
export type Relative = boolean
export type Sticky = boolean
export type Resize = boolean | 'none' | 'y' | 'x'
export type Stroke = 'current'
export type Underline = boolean
export type LineThrough = boolean
export type NoUnderline = boolean
export type Uppercase = boolean
export type Lowercase = boolean
export type Capitalize = boolean
export type NormalCase = boolean
export type Select = 'none' | 'text' | 'all' | 'auto'
export type Align =
  | 'baseline'
  | 'top'
  | 'middle'
  | 'bottom'
  | 'text-top'
  | 'text-bottom'
export type Visible = boolean
export type Invisible = boolean
export type Whitespace = 'normal' | 'no-wrap' | 'pre' | 'pre-line' | 'pre-wrap'
export type W =
  | '0'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 'auto'
  | 'px'
  | '1/2'
  | '1/3'
  | '2/3'
  | '1/4'
  | '2/4'
  | '3/4'
  | '1/5'
  | '2/5'
  | '3/5'
  | '4/5'
  | '1/6'
  | '2/6'
  | '3/6'
  | '4/6'
  | '5/6'
  | '1/12'
  | '2/12'
  | '3/12'
  | '4/12'
  | '5/12'
  | '6/12'
  | '7/12'
  | '8/12'
  | '9/12'
  | '10/12'
  | '11/12'
  | 'full'
  | 'screen'
export type Break = 'normal' | 'words' | 'all'
export type Truncate = boolean
export type Z = '0' | 10 | 20 | 30 | 40 | 50 | 'auto'

export interface TwProps {
  children?: React.ReactNode
  is?: string
  [x: string]: any

  // Below was generated using https://github.com/Acidic9/tailwindcss-react (WIP)
  srOnly?: SrOnly | SrOnly[]
  notSrOnly?: NotSrOnly | NotSrOnly[]
  content?: Content | Content[]
  items?: Items | Items[]
  self?: Self | Self[]
  appearanceNone?: AppearanceNone | AppearanceNone[]
  bg?: Bg | Bg[]
  border?: Border | Border[]
  rounded?: Rounded | Rounded[]
  roundedT?: RoundedT | RoundedT[]
  roundedR?: RoundedR | RoundedR[]
  roundedB?: RoundedB | RoundedB[]
  roundedL?: RoundedL | RoundedL[]
  roundedTl?: RoundedTl | RoundedTl[]
  roundedTr?: RoundedTr | RoundedTr[]
  roundedBr?: RoundedBr | RoundedBr[]
  roundedBl?: RoundedBl | RoundedBl[]
  shadow?: Shadow | Shadow[]
  cursor?: Cursor | Cursor[]
  block?: Block | Block[]
  inlineBlock?: InlineBlock | InlineBlock[]
  inline?: Inline | Inline[]
  flex?: Flex | Flex[]
  inlineFlex?: InlineFlex | InlineFlex[]
  table?: Table | Table[]
  tableRow?: TableRow | TableRow[]
  tableCell?: TableCell | TableCell[]
  hidden?: Hidden | Hidden[]
  fill?: Fill | Fill[]
  flexGrow?: FlexGrow | FlexGrow[]
  flexShrink?: FlexShrink | FlexShrink[]
  float?: Float | Float[]
  clearfix?: Clearfix | Clearfix[]
  font?: Font | Font[]
  text?: Text | Text[]
  antialiased?: Antialiased | Antialiased[]
  subpixelAntialiased?: SubpixelAntialiased | SubpixelAntialiased[]
  italic?: Italic | Italic[]
  notItalic?: NotItalic | NotItalic[]
  h?: H | H[]
  inset?: Inset | Inset[]
  insetY?: InsetY | InsetY[]
  insetX?: InsetX | InsetX[]
  top?: Top | Top[]
  right?: Right | Right[]
  bottom?: Bottom | Bottom[]
  left?: Left | Left[]
  justify?: Justify | Justify[]
  tracking?: Tracking | Tracking[]
  leading?: Leading | Leading[]
  list?: List | List[]
  m?: M | M[]
  my?: My | My[]
  mx?: Mx | Mx[]
  mt?: Mt | Mt[]
  mr?: Mr | Mr[]
  mb?: Mb | Mb[]
  ml?: Ml | Ml[]
  maxH?: MaxH | MaxH[]
  maxW?: MaxW | MaxW[]
  minH?: MinH | MinH[]
  minW?: MinW | MinW[]
  object?: Object | Object[]
  opacity?: Opacity | Opacity[]
  order?: Order | Order[]
  outlineNone?: OutlineNone | OutlineNone[]
  overflow?: Overflow | Overflow[]
  overflowX?: OverflowX | OverflowX[]
  overflowY?: OverflowY | OverflowY[]
  scrolling?: Scrolling | Scrolling[]
  p?: P | P[]
  py?: Py | Py[]
  px?: Px | Px[]
  pt?: Pt | Pt[]
  pr?: Pr | Pr[]
  pb?: Pb | Pb[]
  pl?: Pl | Pl[]
  placeholder?: Placeholder | Placeholder[]
  pointerEvents?: PointerEvents | PointerEvents[]
  static?: Static | Static[]
  fixed?: Fixed | Fixed[]
  absolute?: Absolute | Absolute[]
  relative?: Relative | Relative[]
  sticky?: Sticky | Sticky[]
  resize?: Resize | Resize[]
  stroke?: Stroke | Stroke[]
  underline?: Underline | Underline[]
  lineThrough?: LineThrough | LineThrough[]
  noUnderline?: NoUnderline | NoUnderline[]
  uppercase?: Uppercase | Uppercase[]
  lowercase?: Lowercase | Lowercase[]
  capitalize?: Capitalize | Capitalize[]
  normalCase?: NormalCase | NormalCase[]
  select?: Select | Select[]
  align?: Align | Align[]
  visible?: Visible | Visible[]
  invisible?: Invisible | Invisible[]
  whitespace?: Whitespace | Whitespace[]
  w?: W | W[]
  break?: Break | Break[]
  truncate?: Truncate | Truncate[]
  z?: Z | Z[]
}

const convertToKebabCase = (str: string) => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()
}

const twPropKeys = [
  'srOnly',
  'notSrOnly',
  'content',
  'items',
  'self',
  'appearanceNone',
  'bg',
  'border',
  'rounded',
  'roundedT',
  'roundedR',
  'roundedB',
  'roundedL',
  'roundedTl',
  'roundedTr',
  'roundedBr',
  'roundedBl',
  'shadow',
  'cursor',
  'block',
  'inlineBlock',
  'inline',
  'flex',
  'inlineFlex',
  'table',
  'tableRow',
  'tableCell',
  'hidden',
  'fill',
  'flexGrow',
  'flexShrink',
  'float',
  'clearfix',
  'font',
  'text',
  'antialiased',
  'subpixelAntialiased',
  'italic',
  'notItalic',
  'h',
  'inset',
  'insetY',
  'insetX',
  'top',
  'right',
  'bottom',
  'left',
  'justify',
  'tracking',
  'leading',
  'list',
  'm',
  'my',
  'mx',
  'mt',
  'mr',
  'mb',
  'ml',
  'maxH',
  'maxW',
  'minH',
  'minW',
  'object',
  'opacity',
  'order',
  'outlineNone',
  'overflow',
  'overflowX',
  'overflowY',
  'scrolling',
  'p',
  'py',
  'px',
  'pt',
  'pr',
  'pb',
  'pl',
  'placeholder',
  'pointerEvents',
  'static',
  'fixed',
  'absolute',
  'relative',
  'sticky',
  'resize',
  'stroke',
  'underline',
  'lineThrough',
  'noUnderline',
  'uppercase',
  'lowercase',
  'capitalize',
  'normalCase',
  'select',
  'align',
  'visible',
  'invisible',
  'whitespace',
  'w',
  'break',
  'truncate',
  'z',
]

const resolveTwClasses = (props: { [key: string]: any }) => {
  const twProps = Object.keys(props)
    .filter(prop => twPropKeys.includes(prop))
    .reduce((acc, propName) => {
      acc[propName] = props[propName]
      return acc
    }, {})

  const remainingProps = Object.keys(props)
    .filter(prop => !twPropKeys.includes(prop))
    .reduce((acc, propName) => {
      acc[propName] = props[propName]
      return acc
    }, {})

  const resolveValue = (ps: { [key: string]: any }) => {
    const classes: string[] = []

    for (const propName in ps) {
      const kebabPropname = convertToKebabCase(propName)
      const value = ps[propName]

      if (value instanceof Array) {
        value.forEach(val => classes.push(...resolveValue({ [propName]: val })))
        continue
      }

      if (typeof value === 'boolean' && value) {
        classes.push(kebabPropname)
        continue
      }

      // typeof value === string | number
      const strValue = String(value)
      const isNegative = strValue.startsWith('-')
      const prefix = isNegative ? '-' : ''
      classes.push(`${prefix}${kebabPropname}-${strValue}`)
    }

    return classes
  }

  const classes = resolveValue(twProps)

  return { classes: classes.join(' '), remainingProps }
}

const Tw: React.FC<TwProps> = (props: TwProps) => {
  const { classes, remainingProps } = resolveTwClasses(props)
  const tag = props.is || 'div'
  return React.createElement(
    tag,
    {
      ...remainingProps,
      children: undefined,
      class: classes,
    },
    props.children
  )
}

export default Tw
