module.exports = {
    publicPath:'',//config root path, e.g publicPath:'/api', ->localhost:8080/api/<all_other_paths>
    devServer:{
        host: 'localhost',
        port:8080,
        proxy:{
            '/mock':{
                target:'http://localhost:8080',
                ws:false, //websocket
                changeOrigin:false //if true, the final target url of '/mock/some_resource.json' would be 'localhost:9090/some_resource.json'
            }
        }
    }
}