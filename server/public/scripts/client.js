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
	$('#clear-btn').on('click', clearInput);

	//getCalculation();
}


function render(result) {
	console.log('...inside render()...');
	//will hold code that will keep the DOM up to date with the lastest input values (history results)
	$('#math-problems').empty();
	//getCalculation();
	$('result-view').text("Answer is", result[0].result);
	for (let object of result) { // change to the newest calculation will appear on top of the list instead of the bottom of list when appended to html. 
		$('#math-problems').append(`
			<li> ${object.firstValue} ${object.operator} ${object.secondValue} = ${object.result} 	</li>
		`);
	}

}

function clearInput() {
	console.log('We have cleared the input field!!');
	$('#firstNumber').val('');
	$('#secondNumber').val('');

}

function addition() {
	console.log('...in addition function()...');
	operatorToDO = '+';
	//code to add
}
function subtraction() {
	console.log('...in subtraction function()...');
	operatorToDO = '-';
	//code to subtract
}
function multiply() {
	console.log('...in multiply function()...');
	operatorToDO = '*';
	//code to multiply
}
function divide() {
	console.log('...in divide function()...');
	operatorToDO = '/';
	//code to divide
}

function sendCalculation() {
	console.log('...inside sendCalculate()');

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
		console.log('..back from sending data to server...');
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

