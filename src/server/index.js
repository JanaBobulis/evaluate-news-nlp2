const dotenv = require('dotenv');
dotenv.config();


const fetch = require("node-fetch");
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { read } = require('fs');
const { response } = require('express');
const { ValidationError } = require('webpack');

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

console.log(__dirname)

//display of UI
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

//app.get('/test', function (req, res) {
//    res.send(mockAPIResponse)
//})

// designates what port the app will listen to for incoming requests
app.listen(8083, function () {
    console.log('Example app listening on port 8083!')
})

    
let baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?key=';
let API_KEY = process.env.API_KEY;
console.log(`API key: ${API_KEY}`)

//POST request
app.post('/test', async (req, res) => {
    //if (Validation.isURL(req.body.input)) {
    //    reqType = 'url';
    //} 
    urlEntry = req.body.url;
    const response = await fetch (`${baseUrl}${API_KEY}&of=json&txt&model=general&lang=en&url=${req.body.url}`);
    console.log('server response: ', response)
    const data = await response.json();
    console.log('server side: ', data)
    const projectData = {
        score_tag: data.score_tag,
        confidence: data.confidence,
        irony: data.irony,
        subjectivity: data.subjectivity,
    }
    res.send(projectData);
    console.log(projectData);
})

module.exports = {app};

///const { PORT=3000, LOCAL_ADDRESS='0.0.0.0' } = process.env
//server.listen(PORT, LOCAL_ADDRESS, () => {
//  const address = server.address();
//  console.log('server listening at', address);
//});

const PORT = process.env.PORT || '8080'
app = express();

app.set("port", PORT);
