const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(router)

mongoose.connect("mongodb://127.0.0.1:27017/amenity",{useUnifiedTopology: true,useNewUrlParser: true})
.then(()=>{console.log('connected to DB')});

app.listen(port,callBack);
function callBack(){
    console.log('connected to the server through the port : '+ port)
}
