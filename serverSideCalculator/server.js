const express = require('express');
const bodyParser = require('body-parser');
app = express();

const port = 5000;
//const incomingData = require('./public/client.js');
let previousCalculation = require('calcHistory');

//let resultCompiler = [{ data: 'is it working?' }];
let result = 0;

app.use(bodyParser.urlencoded({ extended: true }));

//will look in the 'public' folder for the files needed to display in the client side (DOM).
app.use(express.static('public'));

app.post('/result', (req, res) => {
	let incomingData = req.body;

	if (incomingData.operator === '+') {
		result = Number(incomingData.firstValue + incomingData.secondValue);
		incomingData.result = result;
	}
	else if (incomingData.operator === '-') {
		result = Number(incomingData.firstValue - incomingData.secondValue);
		incomingData.result = result;
	}
	else if (incomingData.operator === '*') {
		result = Number(incomingData.firstValue * incomingData.secondValue);
		incomingData.result = result;
	}
	else if (incomingData.operator === '/') {
		result = Number(incomingData.firstValue / incomingData.secondValue);
		incomingData.result = result;
	}
	else {
		console.log('There is an ERROR with the operator that was useed for this calculation.')
	}

	previousCalculation.push(incomingData);
	res.statusStatus(200);
});

app.get('/result', (req, res) => {
	console.log('Receiving Data from /calHistory')
	res.send(previousCalculation);
});


app.listen(port, () => {
	console.log('Listening on port: ', port);
});