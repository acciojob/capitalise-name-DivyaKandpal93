//your JS code here. If required.
const inputField = document.getElementById('fname');
inputField.addEventListener(blur, function () {
	inputField.value = inputField.value.toUpperCase();
})