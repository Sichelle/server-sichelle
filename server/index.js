const http = require('http')

const server = http.createServer((request,response) => {
	response.end('ok')
})

server.listen(3247, () => console.log("j'écoute"))