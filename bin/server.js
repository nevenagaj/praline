const path = require('path')
const static = require('node-static')

const fileServer = new static.Server(path.join(process.cwd(), 'dist'))

require('http').createServer((request, response) => {
  request.addListener('end', function () {
    fileServer.serve(request, response)
  }).resume()
}).listen(process.env.PORT)
