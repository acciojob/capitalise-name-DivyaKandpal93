//your JS code here. If required.
window.onload = function (){
	const inputField = document.getElementById('fname');
inputField.addEventListner('blur', (e) {
	let inputValue = inputField.value();
	let result = inputValue.toUpperCase();
	inputField.value() = result;
})