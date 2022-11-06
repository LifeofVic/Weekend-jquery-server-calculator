$(document).ready(onReady);

let compile = [];
let operatorToDO = "";


function onReady() {
	console.log("Jquery is loaded!!");

	$('#add-btn').on('click', addition);
	$('#subtract-btn').on('click', subtraction);
	$('#multiply-btn').on('click', multiply);
	$('#divide-btn').on('click', divide);

	$('#equal-btn').on('click', sendCalculation);

	//getCalculation();
}


function render(result) {
	//will hold code that will keep the DOM up to date with the lastest input values (history results)
	$('#math-problems').empty();
	//getCalculation();
	for (let object of result) {
		$('#math-problems').append(`
			<ul> ${object.firstValue} ${object.operator} ${object.secondValue} = ${object.result} 	</ul>
		`);
	}

}


function addition() {
	console.log('In addition function()...');
	operatorToDO = '+';
	//code to add
}
function subtraction() {
	console.log('In subtraction function()...');
	operatorToDO = '-';
	//code to subtract
}
function multiply() {
	console.log('In multiply function()...');
	operatorToDO = '*';
	//code to multiply
}
function divide() {
	console.log('In divide function()...');
	operatorToDO = '/';
	//code to divide
}

function sendCalculation() {
	console.log('Inside sendCalculate()');

	$.ajax({
		method: 'POST',
		url: '/calculate',
		data: {
			firstValue: Number($('#firstNumber').val()),
			secondValue: Number($('#secondNumber').val()),
			operator: operatorToDO,
			result: 0
		}
	}).then(function (response) {
		console.log(' bacl from sending data to server...');
		getCalculation();
		$('#firstNumber').val('');
		$('#secondNumber').val('');

	}).catch(function (error) {
		alert('sendCalculation has failed', error);
	});
}

function getCalculation() {
	console.log('We are in the receving the data from Server...');
	$.ajax({
		method: 'GET',
		url: '/calculate'
	}).then(function (response) {
		//result.push(response)
		render(response);
	}).catch(function (error) {
		alert('getCalculation has encountered an ERROR, ', error);
	});


}

