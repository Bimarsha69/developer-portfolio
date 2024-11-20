
const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3001' });
});

server.listen(8080, () => {
  console.log('Proxy server running on http://localhost:8080');
});
