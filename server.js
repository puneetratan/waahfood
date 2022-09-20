"use strict";
const express 		= require("express");
const bodyParser 	= require('body-parser');
const path			= require('path');
// const sendMail 		= require('./sendMail');

const _port = process.env.PORT || 8080;
const _app_folder = 'dist/waahfood';


const app = express();
// parse application/json
app.use(bodyParser.json())

// create application/json parser
var jsonParser = bodyParser.json()
 
app.use(express.static(path.join(__dirname, "/dist/waahfood")));

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// ---- SERVE STATIC FILES ---- //
// app.get('*.*', express.static(_app_folder, {maxAge: '1y'}));
// app.get('*.', express.static(_app_folder, {maxAge: '1y'}));

// app.post('/api/contactus',(req,res)=>{
// 	sendMail(req.body);
// 	res.send({success:true});
// })

// ---- SERVE APLICATION PATHS ---- //
app.get('*', function (req, res) {
    res.status(200).sendFile(`/`, {root: _app_folder});
});

// ---- START UP THE NODE SERVER  ----
app.listen(_port, function () {
    console.log("Node Express server for " + app.name + " listening on http://localhost:" + _port);
});