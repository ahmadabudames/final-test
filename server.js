"use strict";


const express = require('express') // require the express package
const app = express() // initialize your express app instance

const cors = require('cors');
require('dotenv').config();



app.use(cors()) // after you initialize your express app instance
app.use(express.json());
const digimon = require('./controllers/digimonController');
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const crud=require('./controllers/crudController')
const PORT = process.env.PORT;

app.get('/ahmad', digimon.getDataDigimon)


app.post('/ahmad/digimon',crud.createNewItem);
app.get('/ahmad/digimon',crud.getNewItem);
app.delete('/ahmad/digimon/:name',crud.deleteNewItem);
app.put('/ahmad/digimon/:name',crud.updateNewItem);
// a server endpoint 
app.get('/', // our endpoint name
    function (req, res) { // callback function of what we should do with our request
        res.send('AHMAD') // our endpoint function response
    })

app.listen(PORT) // kick start the express server to work

