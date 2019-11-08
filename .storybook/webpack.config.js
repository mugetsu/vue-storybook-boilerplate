const path = require('path')

const resolve = dir => {
  return path.join(__dirname, '..', dir)
}

module.exports = async ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]'
      }
    }
  )
  return {
    ...config,
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        components: resolve('src/components')
      }
    },
    devServer: {
      historyApiFallback: true,
      noInfo: true
    },
    performance: {
      hints: false
    },
    devtool: '#eval-source-map'
  }
}
