//your JS code here. If required.
window.onload = function (){
	const inputField = document.getElementById('fname');
inputField.addEventListner('blur', => () {
	let inputValue = inputField.value();
	let result = inputValue.toUpperCase();
	inputValue = result;
})