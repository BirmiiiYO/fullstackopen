const http = require('http')

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end("Hello World dshsdhhs")
})

const PORT = 3000
app.listen(PORT)
console.log(`Server running on port ${PORT}`)