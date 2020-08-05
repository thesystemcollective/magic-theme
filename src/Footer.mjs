export const View = (_, children) =>
  footer({ class: 'Footer' }, [
    h3('Commissioned by:'),

    Link({ title: 'commissioned by kör', to: 'https://koer.or.at' }, [
      Img({
        class: 'koer',
        alt: 'kör',
        src: 'https://thesystem.at/social/koer.jpg',
        width: '255',
        height: '100',
      }),
      Img({
        class: 'koer',
        alt: 'wien kultur',
        src: 'https://thesystem.at/social/wien-kultur.jpg',
        width: '349',
        height: '100',
      }),
    ]),

    h3('Support:'),

    Link(
      { to: 'https://usus.wien' },
      Img({
        title: 'yppshop provided by usus.wien',
        src: 'https://thesystem.at/social/usus.png',
        width: '80',
        height: '35',
      }),
    ),

    Link(
      { to: 'https://magic.github.io' },
      Img({
        title: 'made with a few bits of magic',
        src: 'https://thesystem.at/social/magic.png',
        width: '40',
        height: '35',
      }),
    ),

    children,
  ])

export const style = vars => ({
  padding: 0,
  position: 'relative',
  margin: '4em 0 0 2vw',
  width: 'auto',

  a: {
    display: 'inline-block',
  },

  img: {
    margin: '0 2em 0 0',
  },

  '.koer': {
    display: 'block',
    margin: '0 0 1em',
  },

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {
    '.koer': {
      display: 'inherit',
    },
  },
})
