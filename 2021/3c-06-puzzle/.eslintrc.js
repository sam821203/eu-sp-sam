module.exports = {
  parser: '@babel/eslint-parser',
  plugins: [
  ],
  extends: "airbnb-base",
  rules: {
    semi: ["error", "never"]
  },
  // ecmaFeatures: {
  //   jsx: true,
  //   experimentalObjectRestSpread: true
  // },
  env: {
    browser: true,
    node: true
  },
  plugins: [
    '@babel',
    'import',
  ],
};