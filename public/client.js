$(document).ready(onReady);

let compile = [];
let operatorToDO = "";


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
	//code to subtract
}
function multiply() {
	//code to multiply
}
function divide() {
	//code to divide
}

function calculate() {
	console.log('Inside calculate()');
	let newobject = {
		firstValue: $('#firstNumber').val(),
		secondValue: $('#secondNumber').val(),
		operator: operatorToDO
	}
	compile.push(newobject);
	console.log('Current object ready to compile: ', compile);

}

function getCalculation() {




}

