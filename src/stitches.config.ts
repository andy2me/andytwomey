import { createCss } from '@stitches/react'

export const { css, styled, getCssString, theme } = createCss({
  theme: {
    colors: {
      background: 'hsl(0,0%,100%)',
      foreground: 'hsl(0,0%,0%)',
      bgGridFg: 'hsl(215,14%,83%)',
      pink400: 'hsl(280,100%,87%)',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '30px',
      7: '45px',
      8: '60px',
      9: '70px',
      10: '110px',
      11: '160px',
    },
    fontSizes: {
      base: '20px',
      1: '0.8rem',
      2: '1rem',
      3: '2.05rem',
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    lineHeights: {
      1: '0.9rem',
      2: '1.5rem',
      3: '2.35rem',
    },
    fonts: {
      inter: 'Inter, sans-serif',
    },
    radii: {
      round: '100px',
      1: '12px'
    }
  },
  utils: {
    marginX: (config) => (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (config) => (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (config) => (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    bp1: '(min-width: 820px)',
    torchTabletDesktop: '(min-width: 1121px)',
  },
})
