document.addEventListener("DOMContentLoaded", function () {
    let output = document.getElementById("output-value");
    let history = document.getElementById("history-value");

    function updateOutput(value) {
        if (value === "") {
            output.innerText = "0";
        } else {
            output.innerText = value;
        }
    }

    function getHistory() {
        return history.innerText;
    }

    function setHistory(num) {
        history.innerText = num;
    }

    function getOutput() {
        return output.innerText;
    }

    function clearAll() {
        setHistory("");
        updateOutput("0");
    }

    function deleteLast() {
        let current = getOutput();
        if (current.length > 1) {
            updateOutput(current.slice(0, -1));
        } else {
            updateOutput("0");
        }
    }

    function calculate() {
        try {
            let expression = getHistory() + getOutput();
            
            // Replace symbols with JavaScript-compatible operators
            expression = expression
                .replace(/×/g, "*")
                .replace(/÷/g, "/")
                .replace(/%/g, "/100"); // Convert percentage

            let result = Function(`"use strict"; return (${expression})`)(); // Secure eval alternative

            setHistory("");
            updateOutput(result);
        } catch (error) {
            updateOutput("Error");
        }
    }

    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let buttonValue = this.innerText;

            if (buttonValue === "C") {
                clearAll();
            } else if (buttonValue === "←") {
                deleteLast();
            } else if (buttonValue === "=") {
                calculate();
            } else if (["+", "-", "×", "÷", "%"].includes(buttonValue)) {
                let outputValue = getOutput();
                if (outputValue !== "Error") {
                    setHistory(outputValue + " " + buttonValue + " ");
                    updateOutput("0");
                }
            } else {
                let outputValue = getOutput();
                if (outputValue === "0" || outputValue === "Error") {
                    updateOutput(buttonValue);
                } else {
                    updateOutput(outputValue + buttonValue);
                }
            }
        });
    });
});
