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


}


function render(result) {
	//will hold code that will keep the DOM up to date with the lastest input values (history results)
	$('#math-problems').empty();
	getCalculation();
	for (let calculation of result) {
		$('#math-problems').append(`
			<ul> answer is: ${calculation.result} 	</ul>
		`);
	}

}


function addition() {
	operatorToDO = '+';
	//code to add
}
function subtraction() {
	operatorToDO = '-';
	//code to subtract
}
function multiply() {
	operatorToDO = '*';
	//code to multiply
}
function divide() {
	operatorToDO = '/';
	//code to divide
}

function sendCalculation() {
	console.log('Inside sendCalculate()');

	$.ajax({
		method: 'POST',
		url: '/calcHistory',
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
		url: '/calcHistory'
	}).then(function (response) {
		//result.push(response)
		render(response);
	}).catch(function (error) {
		alert('getCalculation has encountered an ERROR, ', error);
	});


}

