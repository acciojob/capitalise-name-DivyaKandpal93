window.onload = function() {
    
    const inputField = document.getElementById('fname');
    inputField.addEventListener('blur', function() {
        let inputValue = inputField.value;
        let uppercaseValue = inputValue.toUpperCase();
        inputField.value = uppercaseValue;
    });
};
