const theme = {
  spacing: {
    mainWidth: 1000,
    rhythm: 12,
    navbar: 72,
    section: 72,
    balls: 192,
    card: 208,
  },

  palette: {
    background: {
      dark: opacity => `rgba(15, 15, 17, ${opacity ?? 1})`,
      main: opacity => `rgba(32, 33, 36, ${opacity ?? 1})`,
    },
    primary: {
      main: opacity => `rgba(33, 150, 243, ${opacity ?? 1})`,
    },
    secondary: {
      main: opacity => `rgba(8, 207, 101, ${opacity ?? 1})`,
    },
    tertiary: {
      main: opacity => `rgba(255, 208, 66, ${opacity ?? 1})`,
    },
    disabled: {
      main: opacity => `rgba(135, 140, 145, ${opacity ?? 1})`,
      text: opacity => `rgba(255, 255, 255, ${opacity ?? 0.5})`,
    },
    grey: {
      main: _ => 'grey',
      dark: _ => 'darkgrey',
    },
  },
}

export default theme
