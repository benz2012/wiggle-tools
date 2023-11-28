export default {
  spacing: {
    mainWidth: 1000,
    navbar: 72,
    section: 48,
    balls: 192,
    rhythm: 12,
  },

  palette: {
    background: {
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
  },
}
