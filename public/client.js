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


function render() {
	//will hold code that will keep the DOM up to date with the lastest input values (history results)


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
	console.log('Inside calculate()');
	let newobject = {
		firstValue: $('#firstNumber').val(),
		secondValue: $('#secondNumber').val(),
		operator: operatorToDO,
		result: 0
	}
	compile.push(newobject);
	console.log('Current object ready to compile: ', compile);

	$.ajax({
		method: 'POST',
		url: '/result'
	}).then(function (response) {
		$('#firstNumber').val('');
		$('#secondNumber').val('');
		getCalculation();
	}).catch(function (error) {
		alert('sendCalculation has failed', error);
	});
}

function getCalculation() {

	$.ajax({
		method: 'GET',
		url: '/result'
	}).then(function (response) {
		result.push(response)
	})


}

