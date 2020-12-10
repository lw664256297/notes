const webpack = require("webpack");
const path = require("path");
// 代码压缩
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin')

// 是否为生产环境
const isProduction = process.env.NODE_ENV !== 'development'

// 本地环境是否需要使用cdn
const devNeedCdn = false

// cdn链接
const cdn = {
  // cdn：模块名称和模块作用域命名（对应window里面挂载的变量名称）
  externals: {
    vue: 'Vue',
    vuex: 'Vuex',
    'vue-router': 'VueRouter',
  },
  // cdn的css链接
  css: [],
  // cdn的js链接
  js: [
    'https://cdn.staticfile.org/vue/2.6.10/vue.min.js',
    'https://cdn.staticfile.org/vue-router/3.0.3/vue-router.min.js',
    'https://cdn.staticfile.org/vuex/3.0.1/vuex.min.js',
    'https://cdn.staticfile.org/axios/0.1.0/axios.min.js',
    'https://cdn.staticfile.org/bootstrap-vue/2.10.0/bootstrap-vue.min.js',
  ]
}

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  // 基本路径
  publicPath: "./",
  // 去除map文件
  productionSourceMap: false,
  lintOnSave:false,
  configureWebpack: config => {
    // 用cdn方式引入，则构建时要忽略相关资源
    if (isProduction || devNeedCdn) config.externals = cdn.externals
    if (isProduction) {
      console.log('----------------------------------------生产环境-进行代码优化')
      // 代码压缩
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            cacheDir: '.cache/',   // 设置缓存路径，不改动的调用缓存，第二次及后面build时提速
            //生产环境自动删除console
            warnings: false, // 若打包错误，则注释这行
            compress: {
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ['console.log']
            }
          },
          sourceMap: false,
          parallel: true
        })
      )
      // gzip压缩
      const productionGzipExtensions = ['html', 'js', 'css']
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[name].gz[query]',
          algorithm: 'gzip',
          test: new RegExp(
            '\\.(' + productionGzipExtensions.join('|') + ')$'
          ),
          threshold: 10240, // 只有大小大于该值的资源会被处理 10240
          minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
          deleteOriginalAssets: false // 删除原文件
        })
      )

      // 公共代码抽离
      config.optimization = {
        splitChunks: {
          cacheGroups: {
            vendor: {
              chunks: 'all',
              test: /node_modules/,
              name: 'vendor',
              minChunks: 1,
              maxInitialRequests: 5,
              minSize: 0,
              priority: 100
            },
            common: {
              chunks: 'all',
              test: /[\\/]src[\\/]js[\\/]/,
              name: 'common',
              minChunks: 2,
              maxInitialRequests: 5,
              minSize: 0,
              priority: 60
            },
            styles: {
              name: 'styles',
              test: /\.(sa|sc|c)ss$/,
              chunks: 'all',
              enforce: true
            },
            runtimeChunk: {
              name: 'manifest'
            }
          }
        }
      }
    }

  },
  chainWebpack: (config) => {
    config.plugin('html').tap(args => {
      // 生产环境或本地需要cdn时，才注入cdn
      if (isProduction || devNeedCdn) args[0].cdn = cdn
      return args
    })
    config.resolve.alias
      .set("@public", resolve("public"))
      .set("@", resolve("src"))
      .set("@components", resolve("src/components"))
      .set("@mixins", resolve("src/mixins"))
      .set("@views", resolve("src/views"))
      .set("@images", resolve("src/assets/images"))
      .set("@css", resolve("src/assets/css"))
      .set("@excel", resolve("src/Excel"));

    // svg rule loader
    const svgRule = config.module.rule("svg"); // 找到svg-loader
    svgRule.uses.clear(); // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule.exclude.add(/node_modules/); // 正则匹配排除node_modules目录
    svgRule // 添加svg新的loader处理
      .test(/\.svg$/)
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      });

    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule("images");
    imagesRule.exclude.add(resolve("src/assets/icons"));
    config.module.rule("images")
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true
      })
      .end();
  },
  devServer: {
    proxy: { // 请求代理服务器
      '/api': { //前缀
        target: 'http://47.95.233.91:7773', // 代理目标地址
        // target: 'https://www-uat.ergo-life.cn', // 代理目标地址
        changeOrigin: true,
        pathRewrite: {
          // 在发出请求后将/api替换为''空值，这样不影响接口请求
          "^/api": " ",
        },
      },
    },
    host: "localhost", //指定使用一个 host。默认是 localhost，这里默认值即可
    port: 8080, //指定端口
    hot: true, // 开启热更新
    https: false, // 是否开启https模式
  },
};
