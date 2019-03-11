module.exports = {
    // configureWebpack: {
    // //   plugins: [
    // //     new MyAwesomeWebpackPlugin()
    // //   ]
    // },
    publicPath:"./",
    css: {
      loaderOptions: {
        less: {
          modifyVars: {
            'primary-color': '#bb942e', 
            'link-color': '#bb942e',
            'border-radius-base': '30px',
          },
          javascriptEnabled: true
        }
      }
    }
  }