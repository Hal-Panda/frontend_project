const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports={
  devServer:{
    port:9090,
    open: true,
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        'D:\\webstorm\\Project\\fir_project\\src\\assets\\css\\main.less'
      ]
    }
  },
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  }
}
