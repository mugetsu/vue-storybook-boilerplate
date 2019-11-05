const path = require('path')

const resolve = dir => {
  return path.join(__dirname, '..', dir)
}

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../')
  })
  return {
    ...config,
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        components: resolve('src/components')
      },
      modules: [resolve('node_modules'), resolve('src/components')]
    }
  }
}
