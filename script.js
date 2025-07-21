function calculate(operator) {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const answerField = document.getElementById("answer");
    let answer;

    if (isNaN(number1) || isNaN(number2)) {
        alert("Please enter both numbers.");
        return;
    }

    if (operator === "/" && number2 === 0) {
        alert("Cannot divide by zero.");
        return;
    }

    if (operator === "+") {
        answer = number1 + number2;
    } else if (operator === "-") {
        answer = number1 - number2;
    } else if (operator === "*") {
        answer = number1 * number2;
    } else if (operator === "/") {
        answer = number1 / number2;
    } else {
        alert("Invalid operator");
        return;
    }

    answerField.value = answer;

    // flash effect
    answerField.classList.add("flash");
    setTimeout(() => answerField.classList.remove("flash"), 300);

    // update history
    const historyList = document.getElementById("historyList");
    const li = document.createElement("li");
    li.textContent = `${number1} ${operator} ${number2} = ${answer}`;
    historyList.appendChild(li);
}

// clear answer & history on reset
document.getElementById("reset").addEventListener("click", () => {
    document.getElementById("answer").value = "";
    document.getElementById("historyList").innerHTML = "";
});

// theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

// keyboard support
document.addEventListener("keydown", (e) => {
    if (["+", "-", "*", "/"].includes(e.key)) {
        calculate(e.key);
    }
});
