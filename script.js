//your JS code here. If required.
window.onload = function (){
	const inputField = document.getElementById('fname');
inputField.addEventListner('blur',(e) => () {
	let inputValue = e.target.value();
	let result = inputValue.toUpperCase();
	inputValue = result;
})