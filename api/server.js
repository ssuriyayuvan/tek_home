const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const csv = require("csvtojson");
var multer = require('multer');
var csvParse = require("csv-parse");
var upload = multer();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())
app.use(fileUpload());

app.get('/', (req, res) => {
    res.send({ a: 'hello' })
})

app.post('/upload', (req, res) => {
    csvData = req.files.data.data.toString('utf8');
    return csv().fromString(csvData).then(json => 
      {return res.status(201).json({csv:csvData, json:json})})
    // var csva = req.files.data.data.toString('utf8')
    // res.send({a:csva})
})

app.listen('3005', () => { console.log('server running on 3005 port') })