$(document).ready(onReady);

let compile = [];
let operatorToDO = "";
let result = [];


function onReady() {
	console.log("Jquery is loaded!!");

	$('#add-btn').on('click', addition);
	$('#subtract-btn').on('click', subtraction);
	$('#multiply-btn').on('click', multiply);
	$('#divide-btn').on('click', divide);

	$('#equal-btn').on('click', calculate);


}


function render(result) {
	//will hold code that will keep the DOM up to date with the lastest input values (history results)
	$('#math-problems').empty();
	for (let calculation of result) {
		$('#math-problems').append(`
			<ul> answer is: ${calculation.result} 	</ul>
		`);
	}

}


function addition() {
	operatorToDO = '+';
	sendCalculation()
	//code to add
}
function subtraction() {
	operatorToDO = '-';
	sendCalculation()
	//code to subtract
}
function multiply() {
	operatorToDO = '*';
	sendCalculation()
	//code to multiply
}
function divide() {
	operatorToDO = '/';
	sendCalculation()
	//code to divide
}

function sendCalculation() {
	console.log('Inside calculate()');
	// let newObject = {
	// 	firstValue: $('#firstNumber').val(),
	// 	secondValue: $('#secondNumber').val(),
	// 	operator: operatorToDO,
	// 	result: 0
	// }
	// compile.push(newObject);
	//console.log('Current object ready to compile: ', compile);

	$.ajax({
		method: 'POST',
		url: '/result',
		data: {
			firstValue: $('#firstNumber').val(),
			secondValue: $('#secondNumber').val(),
			operator: operatorToDO,
			result: 0
		}
	}).then(function (response) {
		console.log('sending data to server...');
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
		url: '/result'
	}).then(function (response) {
		//result.push(response)
		render(response);
	}).catch(function (error) {
		alert('getCalculation has encountered an ERROR, ', error);
	});


}

