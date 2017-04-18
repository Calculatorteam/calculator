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

    var multiply = document.getElementById('btnMultiply');
    var clear = document.getElementById('btnClear');
    var equal = document.getElementById('btnEqual');
    var divide = document.getElementById('btnDivide');
    var plus = document.getElementById('btnPlus');
    var minus = document.getElementById('btnMinus');

    // Initialize variables later to be used during calculation
    var placeholder = "";
    var calcMemory = "";
    var calcDone = "";
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

    function pressMultiply() {
        currentOperator = "*";
        isOperatorReady = true;
        displayOperator();
    }

    function pressDivide() {
        currentOperator = "/";
        isOperatorReady = true;
        displayOperator();
    }

    // Clears all data
    function pressClear() {
        placeholder = "";
        currentOperator = "";
        operator.value = "";
        leftOperand.value = "";
        rightOperand.value = "";
        clear.innerText = "C";
        displayOperator();
        displayOperand();
    }

    //  The IF will check for a value in the right operand, and then execute code using a stored value, to allow for recursively operating
    //  Otherwise, we assume it is the the first time the program is being run
    function pressEqual() {
        switch (operator.value) {
            case "+":
                if (!rightOperand.value) {
                    calcDone = parseFloat(leftOperand.value) + parseFloat(calcMemory);
                    leftOperand.value = calcDone;
                    rightOperand.value = "";
                }
                else {
                    calcDone = parseFloat(leftOperand.value) + parseFloat(rightOperand.value);
                    calcMemory = rightOperand.value;
                    leftOperand.value = calcDone;
                    rightOperand.value = "";
                }
                break;
            case "-":
                if (!rightOperand.value) {
                    calcDone = parseFloat(leftOperand.value) - parseFloat(calcMemory);
                    leftOperand.value = calcDone;
                    rightOperand.value = "";
                }
                else {
                    calcDone = parseFloat(leftOperand.value) - parseFloat(rightOperand.value);
                    leftOperand.value = calcDone;
                    rightOperand.value = "";
                }
                break;
            case "*":
                if (!rightOperand.value) {
                    calcDone = parseFloat(leftOperand.value) * parseFloat(calcMemory);
                    calcMemory = rightOperand.value;
                    leftOperand.value = calcDone;
                    rightOperand.value = "";
                }
                else {
                    calcDone = parseFloat(leftOperand.value) * parseFloat(rightOperand.value);
                    calcMemory = rightOperand.value;
                    leftOperand.value = calcDone;
                    rightOperand.value = "";
                }
                break;
            case "/":
                if (rightOperand.value === "0") {
                    alert("Hey Dummy you can't do that!");
                    placeholder = "";
                    displayOperand();
                }
                else if (!rightOperand.value) {
                    calcDone = parseFloat(leftOperand.value) / parseFloat(calcMemory);
                    leftOperand.value = calcDone;
                    rightOperand.value = "";
                }
                else {
                    calcDone = parseFloat(leftOperand.value) / parseFloat(rightOperand.value);
                    calcMemory = rightOperand.value;
                    placeholder = "";
                    displayOperand();
                }
        }
    }


    // Handles the display of proper text into correct text field for operands only
    function displayOperand() {
        // Applies to right operand, checking if there is an operator first
        if (operator.value !== "") {
            rightOperand.value = placeholder;
        }
        // Places text in left operand by default, until operator fulfills above IF condition
        else {
            leftOperand.value = placeholder;
        }
    }

    // Displays operator and provides sets placeholder blank for displayOperand
    function displayOperator() {
        if (currentOperator) {
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
    multiply.addEventListener('click', pressMultiply);
    divide.addEventListener('click', pressDivide);

    clear.addEventListener('click', pressClear);
    equal.addEventListener('click', pressEqual);

    // Boolean operators that assist in selecting which operand button pressses are inputted to
    var isLeftDone = false;
    var isOperatorReady = false;
    var isRightReady = false;

})();

var c = document.getElementById("c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var chinese = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcedefghijklmnopqrstuvxyz";
//converting the string into an array of single characters
chinese = chinese.split("");

var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
    drops[x] = 1;

//drawing the characters
function draw()
{
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#0F0"; //green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for(var i = 0; i < drops.length; i++)
    {
        //a random chinese character to print
        var text = chinese[Math.floor(Math.random()*chinese.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 33);