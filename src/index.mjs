export * as Slogan from './Slogan.mjs'

export const vars = {
  text: {
    dark: '#f0f0f0',
    light: '#0f0f0f',
  },

  background: {
    dark: '#0f0f0f',
    light: '#f0f0f0',
  },

  neutral: '#0f0f0f',

  link: {
    dark: '#f0f0f0',
    light: '#0f0f0f',

    hover: {
      dark: '#f0f0f0',
      light: '#0f0f0f',
    },
  },

  widths: {
    tablet: '500px',
    laptop: '730px',
    desktop: '940px',
    agency: '1200px',
  },
}

export default (v = {}) => {
  v = { ...vars, ...v }

  return {
    '@font-face': {
      family: 'notosans',
      url: 'https://static.thesystem.at/font/',
      weights: [400, 600],
      styles: ['normal', 'italic'],
      types: ['woff', 'woff2'],
      unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    },

    body: {
      fontSize: '18px',
      fontFamily: 'notosans, sans-serif',
      overflowX: 'initial',
      lineHeight: 1.4,
    },

    a: {
      color: v.link.dark,

      '.light &&': {
        color: v.link.light,

        '&:hover': {
          color: v.link.hover.light,
        },
      },

      '&:hover': {
        color: v.link.hover.dark,
      },
    },

    '#Magic': {
      '.icon': {
        width: '1em',
      },

      backgroundColor: v.background.dark,
      color: v.text.dark,

      '&.light': {
        backgroundColor: v.background.light,
        color: v.text.light,
      },
    },

    '.Wrapper': {
      width: '100%',
      maxWidth: 'inherit',
    },

    '.PageHeader': {
      display: 'inline-block',
      width: '100%',
    },

    '.month-title': {
      margin: '2em 5vw',
      fontWeight: '700',
    },

    '.sections': {
      display: 'inline-block',
      margin: '0 0 0 1em',

      h2: {
        padding: 0,
      },

      section: {
        clear: 'both',
        margin: '0 3vw 1em 0',
      },

      '.description, .location': {
        fontSize: '0.9em',
      },
    },

    '.subcredits': {
      width: '80%',
      maxWidth: '500px',

      img: {
        height: '100px',
        '&:first-child': {
          maxWidth: '66%',
        },
        '&:last-child': {
          maxWidth: '33%',
        },
      },
    },

    '.NoSpy': {
      left: 'auto',
      right: '0.5em',

      '.icon': {
        left: 'auto',
        right: 0,
        width: '1em',
      },

      '.ShowHide': {
        left: 'auto',
        right: 0,
        bottom: '0.5em',
        height: '0.8em',
      },

      '.Container': {
        right: 0,
        left: 'auto',
        fontSize: '0.7em',
      },
    },

    '.manifest': {
      margin: '0 1em 3em',

      p: {
        lineHeight: 1.4,
        margin: '0.5em 0',
      },
    },

    [`@media screen and (min-width: ${v.widths.tablet})`]: {
      body: {
        fontSize: '25px',
      },

      '.sections': {
        section: {
          margin: '0 4vw 0 0',
        },
        '.presents, .location': {
          marginBottom: '2em',
        },
        '.description': {
          marginTop: 0,
        },
      },
    },

    [`@media screen and (min-width: ${v.widths.laptop})`]: {
      '.sections': {
        float: 'right',
        width: '47vw',

        section: {
          clear: 'none',
        },
      },

      '.manifest': {
        width: '70vw',
        margin: '0 auto 6em',
      },
    },

    [`@media screen and (min-width: ${v.widths.desktop})`]: {
      '.sections': {
        section: {
          margin: '0 2em 0 0',
          width: 'auto',
        },
      },
    },
  }
}
