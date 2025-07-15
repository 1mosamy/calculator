
let pnum='';
let c_operator='';
let cnum='';
let num = '';

function appendToDisplay(n){
    num +=n;
    document.getElementById('display').value = pnum + ' ' + c_operator + ' ' + num;
}
function clearDisplay(){
    document.getElementById("display").value="";
     pnum = '';
    c_operator = '';
    cnum = '';
    currentInput = '';
    num = '';
}

function operator(op) {
 if(num === "") 
    return;
 if(num !== '')
    calculateResult();

   pnum = num;
   c_operator = op;
   num= '';
    document.getElementById('display').value = pnum +' '+ c_operator;
}

 function calculateResult(){
    if(pnum === null || pnum ==='' || num ===null || num === '' || c_operator === null) {
        return;
    }
    cnum = num;
    let result = '';
    let firstNum = parseFloat(pnum);
    let secondNum = parseFloat(cnum);
    switch(c_operator) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            if(secondNum === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = firstNum / secondNum;
            break;
        case '%':
            result = firstNum % secondNum;
            break;
        default:
            return;
    }
   document.getElementById('display').value = result;
    num = result.toString();
    pnum = '';
    c_operator = '';
    cnum = '';
    result = '';
 }


 function darktoligth(){
     const button = document.getElementById("toligth");
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        button.textContent = "Dark Mode 🌙";
        button.classList.remove("dark");
        button.classList.add("light");
    } else {
        button.textContent = "Light Mode ☀️";
        button.classList.remove("light");
        button.classList.add("dark");
    }
 }
