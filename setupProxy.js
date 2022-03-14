const { createProxyMiddleware } = require('http-proxy-middleware');
const serverApiPort = process.env.PORT || 3001;
const serverApiProxyUrl = `http://localhost:${serverApiPort}`;
console.log(`Server API proxy URL ${serverApiProxyUrl}`);

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: serverApiProxyUrl,
      changeOrigin: true,
    })
  );
};