module.exports = {
    // configureWebpack: {
    // //   plugins: [
    // //     new MyAwesomeWebpackPlugin()
    // //   ]
    // },
    publicPath:"./",
    outputDir:"resume",
    css: {
        loaderOptions: {
            less: {
            modifyVars: {
                'primary-color': '#1f81f5',
                'link-color': '#ff3a3a',
                'border-radius-base': '30px',
            },
            javascriptEnabled: true
            }
        }
    }
}
