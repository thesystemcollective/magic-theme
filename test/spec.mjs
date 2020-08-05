import { is } from '@magic/test'
import theme from '../src/index.mjs'

import css from '@magic/css'

const colors = {
  blue: [],
  green: [],
}
colors.blue[900] = 'blue900'
;(colors.blue[500] = 'blue500'), (colors.green[500] = 'green500')

colors.black = 'black'
colors.white = 'white'

export default [
  { fn: () => theme, expect: is.function, info: 'theme is a function' },
  { fn: () => css(theme, { colors }), expect: is.object, info: 'theme can be parsed by css lib' },
  {
    fn: () => css.stringify(theme, { colors }),
    expect: is.string,
    info: 'theme can be stringified by css lib',
  },
]
