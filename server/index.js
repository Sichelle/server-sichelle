const express = require('express')

const alumni1 = require ('../mocks/alumnis/alumni1.json')
const alumni2 = require ('../mocks/alumnis/alumni2.json')
const alumni3 = require ('../mocks/alumnis/alumni3.json')
const alumni4 = require ('../mocks/alumnis/alumni4.json')
const alumni5 = require ('../mocks/alumnis/alumni5.json')

const alumnis = [ alumni1 , alumni2 , alumni3, alumni4, alumni5 ]

console.log(alumnis)

const app = express()

app.get('/', (request,response) => {
	response.send('ok')
})

app.listen(3247, () => console.log("j'écoute"))