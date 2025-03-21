function calculate(operator) {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    var answer;

    if (operator == "+") {
        answer = number1 + number2;
    }
    else if (operator == "-") {
        answer = number1 - number2;
    }
    else if (operator == "*") {
        answer = number1 * number2;
    }
    else if (operator == "/") {
        answer = number1 / number2;
    }
    else {
        alert("Invalid operator");
        return;
    }
    document.getElementById("answer").value = answer;
}
