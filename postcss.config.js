module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      MediaQuery: true,
      minPixelValue: 0,
    },
  },
};
