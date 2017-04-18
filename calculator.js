"use strict";
(function () {

    // Variables to target HTML elements
    var leftOperand = document.getElementById('leftOp');
    var rightOperand = document.getElementById('rightOp');

    var operator = document.getElementById('operator');

    var one = document.getElementById('btnOne');
    var two = document.getElementById('btnTwo');
    var three = document.getElementById('btnThree');
    var four = document.getElementById('btnFour');
    var five = document.getElementById('btnFive');
    var six = document.getElementById('btnSix');
    var seven = document.getElementById('btnSeven');
    var eight = document.getElementById('btnEight');
    var nine = document.getElementById('btnNine');
    var zero = document.getElementById('btnZero');

    var mult = document.getElementById('btnMult');
    var clear = document.getElementById('btnClear');
    var equal = document.getElementById('btnEqual');
    var divide = document.getElementById('btnDivide');
    var plus = document.getElementById('btnPlus');
    var minus = document.getElementById('btnMinus');

    // Initialize variables later to be used during calculation
    var placeholder = "";
    var calcMemory = "";
    var calcDone = null;
    var currentOperator = "";

    // Handler functions to be called for event listeners
    function pressOne() {
        placeholder = placeholder + "1";
        displayOperand();
    }

    function pressTwo() {
        placeholder = placeholder + "2";
        displayOperand();
    }

    function pressThree() {
        placeholder = placeholder + "3";
        displayOperand();
    }

    function pressFour() {
        placeholder = placeholder + "4";
        displayOperand();
    }

    function pressFive() {
        placeholder = placeholder + "5";
        displayOperand();
    }

    function pressSix() {
        placeholder = placeholder + "6";
        displayOperand();
    }

    function pressSeven() {
        placeholder = placeholder + "7";
        displayOperand();
    }

    function pressEight() {
        placeholder = placeholder + "8";
        displayOperand();
    }

    function pressNine() {
        placeholder = placeholder + "9";
        displayOperand();
    }

    function pressZero() {
        placeholder = placeholder + "0";
        displayOperand();
    }

    function pressPlus() {
        currentOperator = "+";
        isOperatorReady = true;
        displayOperator();
    }

    function pressMinus() {
        currentOperator = "-";
        isOperatorReady = true;
        displayOperator();
    }

    function pressMult() {
        currentOperator = "*";
        isOperatorReady = true;
        displayOperator();
    }

    function pressDivide() {
        currentOperator = "/";
        isOperatorReady = true;
        displayOperator();
    }

    function pressClear() {
        placeholder = "";
        displayOperand();
    }

    function doubleClear() {
        placeholder = "";
        currentOperator = "";
        displayOperator();
        displayOperand();
    }

    function pressEqual() {
        switch (operator.value) {
            case "+":
                calcMemory = parseFloat(rightOperand.value) + parseFloat(leftOperand.value);
                leftOperand.value = calcMemory;
                rightOperand.value = "";
                break;
            case "-":
                calcMemory = parseFloat(rightOperand.value) - parseFloat(leftOperand.value);
                leftOperand.value = calcMemory;
                rightOperand.value = "";
                break;
            case "*":
                calcMemory = parseFloat(rightOperand.value) * parseFloat(leftOperand.value);
                leftOperand.value = calcMemory;
                rightOperand.value = "";
                break;
            case "/":
                if (rightOperand.value === "0") {
                    alert("Can you divide by zero?");
                    placeholder = "";
                    displayOperand();
                }
                else {
                    calcMemory = parseFloat(rightOperand.value) * parseFloat(leftOperand.value);
                    leftOperand.value = calcMemory;
                    rightOperand.value = "";
                }
        }
    }


    // Handles the display of proper text into correct text field for operands only
    function displayOperand() {
        // Applies to right operand, checking if there is an operator first
        if (operator.value !== "") {
            rightOperand.value = placeholder;
        }
        // Places text in left operand by default, until operator fufills above IF condition
        else {
            leftOperand.value = placeholder;
        }
    }

    // Displays operator and provides sets placeholder blank for displayOperand
    function displayOperator() {
        if (isOperatorReady) {
            operator.value = currentOperator;
            isOperatorReady = false;
            placeholder = "";
        }
        displayOperand();
    }


    // Event listeners that call desired handler function
    one.addEventListener('click', pressOne);
    two.addEventListener('click', pressTwo);
    three.addEventListener('click', pressThree);
    four.addEventListener('click', pressFour);
    five.addEventListener('click', pressFive);
    six.addEventListener('click', pressSix);
    seven.addEventListener('click', pressSeven);
    eight.addEventListener('click', pressEight);
    nine.addEventListener('click', pressNine);
    zero.addEventListener('click', pressZero);

    plus.addEventListener('click', pressPlus);
    minus.addEventListener('click', pressMinus);
    mult.addEventListener('click', pressMult);
    divide.addEventListener('click', pressDivide);

    clear.addEventListener('click', pressClear);
    clear.addEventListener('dblclick', doubleClear);
    equal.addEventListener('click', pressEqual);

    // Boolean operators that assist in selecting which operand button pressses are inputted to
    var isLeftDone = false;
    var isOperatorReady = false;
    var isRightReady = false;

})();
