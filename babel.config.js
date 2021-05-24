module.exports = {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-typescript'
    ],
    plugins: [
      ['module-resolver', {
        alias: {
          "@entities": "./src/app/entities",
          "@repositories": "./src/app/repositories",
          "@useCases": "./src/app/useCases",
          "@shared": "./src/shared",
          "@helpers": "./src/shared/helpers"
        }
      }],
      "babel-plugin-transform-typescript-metadata",
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties", { "loose": true }],
    ],
  }