const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
let result = 0;

//const incomingData = require('./public/client.js');
let previousCalculation = require('./modules/calcHistory');

app.use(bodyParser.urlencoded({ extended: true }));

//will look in the 'public' folder for the files needed to display in the client side (DOM).
app.use(express.static('server/public'));

app.listen(PORT, () => {
	console.log('Listening on PORT: ', PORT);
});

app.post('/calculate', (req, res) => {
	let incomingData = req.body;

	if (incomingData.operator === '+') {
		result = (Number(incomingData.firstValue) + Number(incomingData.secondValue));
		incomingData.result = result;
	}
	else if (incomingData.operator === '-') {
		result = (Number(incomingData.firstValue) - Number(incomingData.secondValue));
		incomingData.result = result;
	}
	else if (incomingData.operator === '*') {
		result = (Number(incomingData.firstValue) * Number(incomingData.secondValue));
		incomingData.result = result;
	}
	else if (incomingData.operator === '/') {
		result = (Number(incomingData.firstValue) / Number(incomingData.secondValue));
		incomingData.result = result;
	}
	else {
		console.log('There is an ERROR with the operator that was used for this calculation.')
	}

	previousCalculation.push(incomingData);
	res.sendStatus(200);
});

app.get('/calculate', (req, res) => {
	console.log('Receiving Data from /calHistory')
	res.send(previousCalculation);
});


