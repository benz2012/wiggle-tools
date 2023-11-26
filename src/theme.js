export default {
  spacing: {
    mainWidth: 1000,
    section: 96,
  },

  palette: {
    background: 'rgba(32, 33, 36, 1)',
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
