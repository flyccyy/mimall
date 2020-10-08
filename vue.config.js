module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      //请求的地址统一加上/api，这样可以统一
      '/api':{
        target:'http://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
      // '/activity':{
      //   target:'https://www.imooc.com',
      //   changeOrigin:true,
      //   pathRewrite:{
      //     '/activity':'/activity'
      //   }
      // }
    }
  }
}