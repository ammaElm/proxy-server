// const http = require('http');
const express = require('express');
const server = express();
// const timeout = require('connect-timeout');
const { createProxyMiddleware } = require('http-proxy-middleware');

// HOST 指目标地址
// PORT 服务端口
const { HOST = 'http://10.151.3.176:9200', PORT = '3300' } = process.env;

// // 超时时间
// const TIME_OUT = 30 * 1e3;

// server.use(timeout(TIME_OUT));
// server.use((req, res, next) => {
//   if (!req.timedout) next();
// });

// 静态页面,设置你的静态资源路径
server.use('',express.static('../../sensetime/project2.0/MedViewer/dist'));

// 反向代理（这里把需要进行反代的路径配置到这里即可）
// eg:将/api/test 代理到 ${HOST}/api/test
// server.use('/ws/api', createProxyMiddleware({ target: HOST, changeOrigin: true }));


// 监听端口
server.listen(PORT, () => {
  console.log(`server running ......`);
});
