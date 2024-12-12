const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");
const zeroButton = document.getElementById("zero");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const clearButton = document.getElementById("clear");
const displayNum = document.getElementById("displayNum");
const equalButton = document.getElementById("equal");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const pointButton = document.getElementById("point");



let num1 = "";
let num2 = "";
let display = "";
let firstNum = true;
let plus = false;
let minus = false;
let multiply = false;
let divide = false;

oneButton.onclick = function One()
{
    if ( firstNum === true )
    {
        num1 = num1.concat("1")
    }

    else
    {
        num2 = num2.concat("1")
    }

    display = display.concat("1")
    displayNum.textContent = display; 
}

twoButton.onclick = function Two()
{
    if ( firstNum === true )
    {
        num1 = num1.concat("2")
    }
    
    else
    {
        num2 = num2.concat("2")
    }
    
    display = display.concat("2")
    displayNum.textContent = display; 
}

threeButton.onclick = function Three()
{
    if ( firstNum === true )
    {
        num1 = num1.concat("3")
    }
    
    else
    {
        num2 = num2.concat("3")
    }
    
    display = display.concat("3")
    displayNum.textContent = display; 
}

fourButton.onclick = function Four()
{
    if ( firstNum === true )
    {
        num1 = num1.concat("4")
    }
    
    else
    {
        num2 = num2.concat("4")
    }
    
    display = display.concat("4")
    displayNum.textContent = display; 
}

fiveButton.onclick = function Five()
{
    if ( firstNum === true )
    {
        num1 = num1.concat("5")
    }
    
    else
    {
        num2 = num2.concat("5")
    }
    
    display = display.concat("5")
    displayNum.textContent = display; 
}

sixButton.onclick = function Six()
{
    if ( firstNum === true )
    {
        num1 = num1.concat("6")
    }
    
    else
    {
        num2 = num2.concat("6")
    }
    
    display = display.concat("6")
    displayNum.textContent = display; 
}

sevenButton.onclick = function Seven()
{
    if ( firstNum === true )
    {
        num1 = num1.concat("7")
    }
    
    else
    {
        num2 = num2.concat("7")
    }
    
    display = display.concat("7")
    displayNum.textContent = display; 
}

eightButton.onclick = function Eight()
{
    if ( firstNum === true )
    {
        num1 = num1.concat("8")
    }
    
    else
    {
        num2 = num2.concat("8")
    }
    
    display = display.concat("8")
    displayNum.textContent = display; 
}

nineButton.onclick = function Nine()
{
    if ( firstNum === true )
    {
        num1 = num1.concat("9")
    }
    
    else
    {
        num2 = num2.concat("9")
    }
    
    display = display.concat("9")
    displayNum.textContent = display; 
}

zeroButton.onclick = function Zero()
{
    if ( firstNum === true )
    {
        num1 = num1.concat("0")
    }
    
    else
    {
        num2 = num2.concat("0")
    }
    
    display = display.concat("0")
    displayNum.textContent = display; 
}

pointButton.onclick = function Point()
{
    if ( display.charAt(0) == '' )
    {
        
    }
        
    else if ( firstNum === true )
    {
        num1 = num1.concat(".");
        display = display.concat(".");
        displayNum.textContent = display;
    }
    
    else
    {
        num2 = num2.concat(".");
        display = display.concat(".");
        displayNum.textContent = display;
    }
    
}

plusButton.onclick = function plusButton()
{
    if ( display.endsWith('+') == true || display.endsWith('-') == true 
    || display.endsWith("×") == true || display.endsWith("÷") == true 
    || display.endsWith(".") )
    {

    }

    else if ( display.charAt(0) == '' )
    {

    }

    else if ( display.includes('+') === true )
    {


        let calculation;

        let intNum1 = Number(num1);
        let intNum2 = Number(num2);

        calculation = intNum1 + intNum2;

        num1 = calculation;

        num1 = String(num1);

        num2 = "";

        display = "";

        display = display.concat(`${num1}+`)

        displayNum.textContent = display;

        plus = true;
        minus = false;
        multiply = false;
        divide = false;


    }

    else if ( display.includes('-') === true )
    {


        let calculation;

        let intNum1 = Number(num1);
        let intNum2 = Number(num2);

        calculation = intNum1 - intNum2;

        num1 = calculation;

        num1 = String(num1);

        num2 = "";

        display = "";

        display = display.concat(`${num1}+`)

        displayNum.textContent = display;

        plus = true;
        minus = false;
        multiply = false;
        divide = false;
    }

    else if ( display.includes('×') === true )
    {


        let calculation;

        let intNum1 = Number(num1);
        let intNum2 = Number(num2);

        calculation = intNum1 * intNum2;

        num1 = calculation;

        num1 = String(num1);

        num2 = "";

        display = "";

        display = display.concat(`${num1}+`)

        displayNum.textContent = display;

        plus = true;
        minus = false;
        multiply = false;
        divide = false;
    }

    else if ( display.includes('÷') === true )
    {


        let calculation;

        let intNum1 = Number(num1);
        let intNum2 = Number(num2);

        calculation = intNum1 / intNum2;

        num1 = calculation;

        num1 = String(num1);

        num2 = "";

        display = "";

        display = display.concat(`${num1}+`)

        displayNum.textContent = display;

        plus = true;
        minus = false;
        multiply = false;
        divide = false;
    }

    else
    {
        plus = true;
        firstNum = false;
        display = display.concat("+")
        displayNum.textContent = display;
    }


}

minusButton.onclick = function minusButton()
{
    if ( display.endsWith('+') == true || display.endsWith('-') == true 
    || display.endsWith("×") == true || display.endsWith("÷") == true 
    || display.endsWith(".") )
    {

    }

    else if ( display.includes('+') === true )
    {


        let calculation;

        let intNum1 = Number(num1);
        let intNum2 = Number(num2);

        calculation = intNum1 + intNum2;

        num1 = calculation;

        num1 = String(num1);

        num2 = "";

        display = "";

        display = display.concat(`${num1}-`)

        displayNum.textContent = display;

        plus = false;
        minus = true;
        multiply = false;
        divide = false;


    }

    else if ( display.includes('-') === true )
    {


        let calculation;

        let intNum1 = Number(num1);
        let intNum2 = Number(num2);

        calculation = intNum1 - intNum2;

        num1 = calculation;

        num1 = String(num1);

        num2 = "";

        display = "";

        display = display.concat(`${num1}-`)

        displayNum.textContent = display;

        plus = false;
        minus = true;
        multiply = false;
        divide = false;
    }

    else if ( display.includes('×') === true )
    {


        let calculation;

        let intNum1 = Number(num1);
        let intNum2 = Number(num2);

        calculation = intNum1 * intNum2;

        num1 = calculation;

        num1 = String(num1);

        num2 = "";

        display = "";

        display = display.concat(`${num1}-`)

        displayNum.textContent = display;

        plus = false;
        minus = true;
        multiply = false;
        divide = false;
    }
    
    else if ( display.includes('÷') === true )
    {


        let calculation;

        let intNum1 = Number(num1);
        let intNum2 = Number(num2);

        calculation = intNum1 / intNum2;

        num1 = calculation;

        num1 = String(num1);

        num2 = "";

        display = "";

        display = display.concat(`${num1}-`)

        displayNum.textContent = display;

        plus = false;
        minus = true;
        multiply = false;
        divide = false;
    }

    else
    {
        minus = true;
        firstNum = false;
        display = display.concat("-");
        displayNum.textContent = display;
    }
}

multiplyButton.onclick = function multiplyButton()
{
    if ( display.endsWith('+') == true || display.endsWith('-') == true 
        || display.endsWith("×") == true || display.endsWith("÷") == true 
        || display.endsWith(".") )
    {

    }

    else if ( display.charAt(0) == '' )
    {

    }

    else if ( display.includes('+') === true )
    {


        let calculation;

        let intNum1 = Number(num1);
        let intNum2 = Number(num2);

        calculation = intNum1 + intNum2;

        num1 = calculation;

        num1 = String(num1);

        num2 = "";

        display = "";

        display = display.concat(`${num1}×`)

        displayNum.textContent = display;

        plus = false;
        minus = false;
        multiply = true;
        divide = false;
    }
    
    else if ( display.includes('-') === true )
    {


        let calculation;

        let intNum1 = Number(num1);
        let intNum2 = Number(num2);

        calculation = intNum1 - intNum2;

        num1 = calculation;

        num1 = String(num1);

        num2 = "";

        display = "";

        display = display.concat(`${num1}×`)

        displayNum.textContent = display;

        plus = false
        minus = false;
        multiply = true;
        divide = false;
    }
    
    else if ( display.includes('×') === true )
    {


        let calculation;

        let intNum1 = Number(num1);
        let intNum2 = Number(num2);

        calculation = intNum1 * intNum2;

        num1 = calculation;

        num1 = String(num1);

        num2 = "";

        display = "";

        display = display.concat(`${num1}×`)

        displayNum.textContent = display;

        plus = false;
        minus = false;
        multiply = true;
        divide = false;
        
    }
        
    else if ( display.includes('÷') === true )
    {


        let calculation;

        let intNum1 = Number(num1);
        let intNum2 = Number(num2);

        calculation = intNum1 / intNum2;

        num1 = calculation;

        num1 = String(num1);

        num2 = "";

        display = "";

        display = display.concat(`${num1}×`)

        displayNum.textContent = display;

        plus = false;
        minus = false;
        multiply = false;
        divide = false;
    }

    else
    {
        multiply = true;
        firstNum = false;
        display = display.concat("×");
        displayNum.textContent = display;
    }
}

divideButton.onclick = function multiplyButton()
{
    if ( display.endsWith('+') == true || display.endsWith('-') == true 
        || display.endsWith("×") == true || display.endsWith("÷") == true 
        || display.endsWith(".") )
    {

    }

    else if ( display.charAt(0) == '' )
    {

    }

    else if ( display.includes('+') === true )
    {


        let calculation;

        let intNum1 = Number(num1);
        let intNum2 = Number(num2);

        calculation = intNum1 + intNum2;

        num1 = calculation;

        num1 = String(num1);

        num2 = "";

        display = "";

        display = display.concat(`${num1}÷`)

        displayNum.textContent = display;

        plus = false;
        minus = false;
        multiply = false;
        divide = true;
    }
    
    else if ( display.includes('-') === true )
    {


        let calculation;

        let intNum1 = Number(num1);
        let intNum2 = Number(num2);

        calculation = intNum1 - intNum2;

        num1 = calculation;

        num1 = String(num1);

        num2 = "";

        display = "";

        display = display.concat(`${num1}÷`)

        displayNum.textContent = display;

        plus = false
        minus = false;
        multiply = false;
        divide = true;
    }
    
    else if ( display.includes('×') === true )
    {


        let calculation;

        let intNum1 = Number(num1);
        let intNum2 = Number(num2);

        calculation = intNum1 * intNum2;

        num1 = calculation;

        num1 = String(num1);

        num2 = "";

        display = "";

        display = display.concat(`${num1}÷`)

        displayNum.textContent = display;

        plus = false;
        minus = false;
        multiply = false;
        divide = true;
        
    }
        
    else if ( display.includes('÷') === true )
    {


        let calculation;

        let intNum1 = Number(num1);
        let intNum2 = Number(num2);

        calculation = intNum1 / intNum2;

        num1 = calculation;

        num1 = String(num1);

        num2 = "";

        display = "";

        display = display.concat(`${num1}÷`)

        displayNum.textContent = display;

        plus = false;
        minus = false;
        multiply = false;
        divide = true;
    }

    else
    {
        divide = true;
        firstNum = false;
        display = display.concat("÷");
        displayNum.textContent = display;
    }
}

equalButton.onclick = function equal()
{
    let calculation

    let intNum1 = Number(num1);
    let intNum2 = Number(num2);

    if ( display.endsWith('+') == true || display.endsWith('-') == true 
        || display.endsWith('×') == true || display.endsWith('÷') == true 
        || display.endsWith("."))
    {

    }

    else if ( plus === true )
    {
        calculation = intNum1 + intNum2;

        displayNum.textContent = calculation
    }

    else if ( minus === true )
    {
        calculation = intNum1 - intNum2

        displayNum.textContent = calculation
    }

    else if ( multiply === true )
    {
        calculation = intNum1 * intNum2;

        displayNum.textContent = calculation;
    }

    else if ( divide === true )
    {
        calculation = intNum1 / intNum2;

        displayNum.textContent = calculation;
    }
}


clearButton.onclick = function clear()
{
    displayNum.textContent = "‎"; // "‎" = empty space
    num1 = "";
    num2 = "";
    display = "";
    firstNum = true;
    plus = false;
    minus = false;
    multiply = false;
    divide = false; 
}