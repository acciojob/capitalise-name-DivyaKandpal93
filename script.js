//your JS code here. If required.
function resultedData(s){
	const inputField = document.getElementById('fname');
inputField.addEventListner(blur,function() {
	let inputValue = inputField.value();
	let result = inputValue.toUpperCase();
	inputField.value() = result;
})
}

const s= prompt("Enter your name:");
alert(resultedData(s));

})