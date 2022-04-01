const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const jsonQuery = require('json-query')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const persons = require('./Persons.json')

app.get('/gen-web2/persons', (req, res) =>{
    return res.json(persons)
})

app.get('/gen-web2/person/:personId', (req, res) =>{
    const returnVal = jsonQuery('rows[personId=' + req.params.personId + ']',{data: persons})
    return res.json(returnVal.value)
})

const itemtypes = require('./ItemTypes.json')
app.get('/gen-web2/itemtypes', (req, res) =>{
    return res.json(itemtypes)
})
app.get('/gen-web2/itemtype/:itemTypeId', (req, res) =>{
    const returnVal = jsonQuery('rows[itemTypeId=' + req.params.itemTypeId + ']',{data: itemtypes})
    return res.json(returnVal.value)
})
app.listen(8000)
console.log('Listening on port 8000')