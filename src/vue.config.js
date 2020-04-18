// vue.config.js
module.exports = {
    devServer: {
        port: 端口号,
        proxy: {
            '/apis': {
                target: 'https://localhost:5001/swagger/index.html',  // target host
                ws: true,  // proxy websockets 
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/apis': ''  // rewrite path
                }
            },
        }
    }
};
