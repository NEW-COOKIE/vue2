module.exports = {
  lintOnSave: false, // 关闭语法检查

  /* devServer: { // 开启代理服务器(方式一)
     proxy: "https://api.muxiaoguo.cn/api"
   }, */

  devServer: {
    proxy: {
      '/api': { // 前缀是否走代理
        target: 'https://api.muxiaoguo.cn/api',
        pathRewrite: {
          '^/api': ''
        },
        // ws: true, // websockted
        // changeOrigin: true // 用于控制请求头中的host值
      },

      '/demo': { // 前缀是否走代理
        target: 'https://api.muxiaoguo.cn/api',
        pathRewrite: { '^/demo': '' },
        // ws: true, // websockted
        // changeOrigin: true // 用于控制请求头中的host值
      }
    }
  }
}