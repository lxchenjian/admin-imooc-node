const express = require('express')

// 创建 express 应用
const app = express()

//中间件必须在请求发起前响应
// function myLogger(req,res,next){
//     console.log('myLogger')
//     // next()  // 必须添加，否则不执行后面的
// }
//
// app.use(myLogger)

// 监听 / 路径的 get 请求


// 使 express 监听 5000 端口号发起的 http 请求
const server = app.listen(5000, function() {
    const { address, port } = server.address()
    console.log('Http Server is running on http://%s:%s', address, port)
})