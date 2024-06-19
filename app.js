function calc(event) {
    event.preventDefault();

    // Get the values of the input fields
    const num1 = parseFloat(document.getElementById('num1').value);
    const operator = document.getElementById('operator').value;
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    // Perform the calculation based on the operator selected
    if (!isNaN(num1) && !isNaN(num2)) {
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
                break;
            default:
                result = 'Error: Invalid operator';
        }
    } else {
        result = 'Error: Please enter valid numbers';
    }

    // Display the result in the output textarea
    document.getElementById('output').value = result;
}
