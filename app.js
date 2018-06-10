const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Password =require('./models/password');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/manager');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/password');
});


app.get('/api/getAllData', (req, res) => {
	Password.getObjects((err, pass) => {
		if(err){
			throw err;
		}
		res.json(pass);
	});
});

app.get('/api/getObject/:_id', (req, res) => {
	Password.getObjectById(req.params._id, (err, pass) => {
		if(err){
			throw err;
		}
		res.json(pass);
	});
});

app.post('/api/saveObject', (req, res) => {
	var pass = req.body;
	Password.addObject(pass, (err, pass) => {
		if(err){
			throw err;
		}
		res.json(pass);
	});
});

app.put('/api/updateObject/:_id', (req, res) => {
	var id = req.params._id;
	var pass = req.body;
	Password.updateObject(id, pass, {}, (err, pass) => {
		if(err){
			throw err;
		}
		res.json(pass);
	});
});

app.delete('/api/deleteObject/:_id', (req, res) => {
	var id = req.params._id;
	Password.removeObject(id, (err, pass) => {
		if(err){
			throw err;
		}
		res.json(pass);
	});
});

app.get('/galaxyService/getMenuMetaData', (req, res) => {
	var data = [
      {
          appName:"Users",
          icon:"fa fa-user text-success",
          url:"/users"
      },
      {
          appName:"Payments",
          icon:"fa fa-credit-card text-info",
          url:"/payments"
      }
  ];
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.json(data);
});


app.listen(5000);
console.log('Running on port 5000...');
