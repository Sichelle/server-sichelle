const express = require('express')

const app = express()

app.get('/', (request,response) => {
	response.send('ok')
})

app.listen(3247, () => console.log("j'écoute"))