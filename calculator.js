//Declare and initialize my button operations
var add = document.getElementById("add"), subtract = document.getElementById("subtract"), multiply = document.getElementById("multiply"), divide = document.getElementById("divide"), clearbutton = document.getElementById("clear"), equals = document.getElementById("equals");

//Math.abs(x)
//= document.getElementById("")

//array to push operations into
var allnumbers = [];

//Declare numbers variable for 'for' loop
var numbers = document.querySelectorAll(".number");

//For Loop is to power what happens when the user clicks on any of the buttons
//.... which all have the .number class
for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function(event){
        var valueAsInteger = parseInt(event.target.value);
        allnumbers.push(valueAsInteger);
        document.getElementById("results").value += event.target.value;
    })
};
add.addEventListener("click", function(event){
    document.getElementById("results").value += "+";
    allnumbers.push("+");
});
subtract.addEventListener("click", function(event){
    document.getElementById("results").value += "-";
    allnumbers.push("-");
});
divide.addEventListener("click", function(event){
    document.getElementById("results").value += "/";
    allnumbers.push("/");
});
multiply.addEventListener("click", function(event){
    document.getElementById("results").value += "*";
    allnumbers.push("*");
});
equals.addEventListener("click", function(event){
    var a = allnumbers[0];
    var b = allnumbers[2];
    if (allnumbers[1] === "+") {
        var result = a + b;
    } else if (allnumbers[1] === "-") {
        var result = a - b;
    } else if (allnumbers[1] === "/") {
        var result = a / b;
    } else if (allnumbers[1] === "*") {
        var result = a * b;
    }
    console.log(allnumbers);
    document.getElementById("results").value = result;
});
clear.addEventListener("click", function(event){
    document.getElementById("results").value = "";
    allnumbers = [];
});
