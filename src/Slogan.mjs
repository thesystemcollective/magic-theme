export const View = ({ subTitle }) =>
  h1({ class: 'Slogan' }, [p(['THE', br(), 'SYSTEM']), p(subTitle)])

export const style = vars => ({
  fontWeight: 'bold',
  position: 'relative',
  width: '100%',
  margin: '0 0 2em',

  p: {
    fontSize: '2em',
    lineHeight: 1,

    '&:last-child': {
      fontSize: '1.2em',
    },
  },

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {
    width: 'auto',
    margin: 0,

    p: {
      fontSize: '5vw',

      '&:last-child': {
        fontSize: '2.7vw',
      },
    },
  },
})
