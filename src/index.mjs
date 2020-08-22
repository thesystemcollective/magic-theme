export * as Footer from './Footer.mjs'
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
    body: {
      fontSize: '18px',
      fontFamily: 'sans-serif',
      overflowX: 'initial',
      lineHeight: 1.2,
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

    '.month-title': {
      margin: '2em 1em 1em',
    },

    '.sections': {
      display: 'inline-block',
      margin: '0 0 0 1em',

      h2: {
        padding: 0,
      },

      section: {
        clear: 'both',
        margin: '0 3vw 3em 0',
      },

      '.description, .location': {
        fontSize: '0.8em',
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
      margin: '5em 1em 0',
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

    [`@media screen and (min-width: ${vars.widths.laptop})`]: {
      '.sections': {
        float: 'right',
        width: '40vw',

        section: {
          width: '23vw',
          clear: 'none',
        },
      },
    },

    [`@media screen and (min-width: ${vars.widths.desktop})`]: {
      '.sections': {
        width: '40vw',

        section: {
          margin: '0 2em 0 0',
          width: 'auto',
        },
      },
    },
  }
}
