// node modules
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const rootPaths = {
  entry: path.resolve(__dirname, 'src/origin'),
  output: path.resolve(__dirname, 'docs')
};
// entry paths
const entryPaths = {
  index: path.resolve(rootPaths.entry, `index.js`),
  modules: path.resolve(rootPaths.entry, `assets/js`)
};
// output paths
const outputPaths = {
  modules: `assets/js`,
  style: 'assets/styles/style.css',
  images: path.resolve(rootPaths.output, 'assets/images')
};
// cdn paths
const cdnPath = 'https://kimhyunwoooo.github.io/guide/docs/';

// entry htmlList(htmlWebpackPlugin) - 루트 폴더 내 모든 *.html을 가져오도록 설정
let entryHtmlFiles = (() => {
  let fileList = [...fs.readdirSync(rootPaths.entry)].filter(file => file.includes('.html'));
  let resultList = fileList;

  resultList.forEach( (file, index, fileList) => {
    fileList[index] = (new HtmlWebpackPlugin({
      filename: file,
      template: `${rootPaths.entry}/${file}`
    }));
  });

  return resultList;
})();


module.exports = (env = {}) => {
  const isProd = (env.NODE_ENV == 'prod');

  return {
    entry: {
      index: path.resolve(entryPaths.index)
    },
    devtool: isProd ? false : 'inline-source-map',
    output: {
      path: rootPaths.output,
      publicPath: (isProd) ? cdnPath : '/',
      filename: outputPaths.modules + `/[name].js`,
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js?$/,
          loader: 'babel-loader',
          include: [ rootPaths.entry ],
          exclude: /node_modules/,
          options: {
            presets: [
              [
                '@babel/preset-env', {
                modules: false
              }
              ]
            ],
          },
        },
        {
          test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          type: 'asset/resource',
          generator: {
            filename: 'assets/images/[name][ext]'
          }
        },
        {
          test: /\.scss$/,
          use: [
              isProd ? MiniCssExtractPlugin.loader : 'style-loader',
              {
                loader: 'css-loader',
                options: {
                  sourceMap: (!isProd),
                },
              },
              {
                loader: "postcss-loader",
                options: {
                  sourceMap: !isProd,
                  postcssOptions: {
                    plugins: [ require('autoprefixer') ]
                  }
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: (isProd) ? false : true,
                  sassOptions: {
                    outputStyle: (isProd) ? 'compressed' : 'expanded',
                    loadPaths: ['./node_modules']
                  }
                },
              }
            ]
        },
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader'
          }
        },
      ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm-bundler.js'
      },
      extensions: ['*', '.js', '.vue', '.json']
    },
    plugins: [
      new VueLoaderPlugin(),
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: JSON.stringify(true),
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false)
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      }),
      new MiniCssExtractPlugin({
        filename: outputPaths.style
      })
    ].concat(entryHtmlFiles),
    optimization: {
      minimizer: ['...', new CssMinimizerPlugin()]
    }
  }
};
