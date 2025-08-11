export default {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
      selectorBlackList: ['.ignore-rem'],
      exclude: /node_modules/i,
    },
  },
}