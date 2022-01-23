const path = require('path')
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  webpackFinal: async (baseConfig) => {
    baseConfig.resolve.modules = [
      path.resolve(__dirname, '..', 'src'),
      'node_modules',
    ]

    const cssRule = baseConfig.module.rules.find(
      (rule) => String(rule.test).indexOf('css') !== -1
    )
    if (!cssRule) return { ...baseConfig }

    cssRule.test = /^.*(?<!\.module)\.css$/
    const cssLoader = cssRule.use.find(
      (u) => String(u.loader).indexOf('css-loader') !== -1
    )
    if (cssLoader) {
      cssLoader.options = {
        importLoaders: 1,
      }
    }

    const postcssLoader = cssRule.use.find(
      (u) => String(u.loader).indexOf('postcss-loader') !== -1
    )

    if (postcssLoader) {
      baseConfig.module.rules.push({
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          postcssLoader,
        ],
      })
    }

    return { ...baseConfig }
  },
}
