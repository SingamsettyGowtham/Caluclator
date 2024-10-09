const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function removeFromDisplay(){
    display.value = display.value.substring(0, display.value.length -1);
}
function caluclate(){
    display.value = eval(display.value);
}