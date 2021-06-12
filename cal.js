const textbox = document.querySelector(".textbox");

const cancel = document.querySelector(".cancel");
const backspace = document.querySelector(".backspace");

const divide = document.querySelector(".divide");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multi = document.querySelector(".multi");

const nine  = document.querySelector(".nine");
const eight = document.querySelector(".eight");
const seven = document.querySelector(".seven");
const six = document.querySelector(".six");
const five = document.querySelector(".five");
const four = document.querySelector(".four");
const three = document.querySelector(".three");
const two = document.querySelector(".two");
const one = document.querySelector(".one");
const zero = document.querySelector(".zero");

const dot = document.querySelector(".dot");

const plusmin = document.querySelector(".plusmin");

const result = document.querySelector(".result");

let arr = [];
let frontNum = [];
let backNum = [];
let whatFunc = 0;
let middle = 0;
let dotJudge = 0;
let minJudge = 0;
let resultNum = 0;

function cancelHandler() {
    arr = [];
    frontNum = [];
    backNum = [];
    whatFunc = 0;
    middle = 0;
    dotJudge = 0;
    minJudge = 0;
    resultNum = 0;
    textbox.value = arr.join("");

    console.log(arr);
    console.log("C 눌러짐");
}

function backspaceHandler() {
    arr.pop();
    textbox.value = `${arr.join("")}`;
}

function nineHandler(){
    arr.push(9);
    textbox.value = `${arr.join("")}`;
}
function eightHandler(){
    arr.push(8);
    textbox.value = `${arr.join("")}`;
}
function sevenHandler(){
    arr.push(7);
    textbox.value = `${arr.join("")}`;
}
function sixHandler(){
    arr.push(6);
    textbox.value = `${arr.join("")}`;
}
function fiveHandler(){
    arr.push(5);
    textbox.value = `${arr.join("")}`;
}
function fourHandler(){
    arr.push(4);
    textbox.value = `${arr.join("")}`;
}
function threeHandler(){
    arr.push(3);
    textbox.value = `${arr.join("")}`;
}
function twoHandler(){
    arr.push(2);
    textbox.value = `${arr.join("")}`;
}
function oneHandler(){
    arr.push(1);
    textbox.value = `${arr.join("")}`;
}
function zeroHandler(){
    arr.push(0);
    textbox.value = `${arr.join("")}`;
}

function dotHandler(){
    if((textbox.value !== `` && dotJudge === 0) ||(textbox.value !== `` && arr.indexOf(".") === -1)){
    arr.push(".");
    textbox.value = `${arr.join("")}`;
    dotJudge = 1;
    }
}

function divideHandler(){
    if(middle === 1){
        resultHandler();
    }
    frontNum = Number(arr.join(""));
    arr = [];
    dotJudge = 0; 
    whatFunc = 1; 
    middle = 1;
    minJudge = 0;
    
}
function multiHandler(){
    if(middle === 1){
        resultHandler();
        
    }
    frontNum = Number(arr.join(""));
    arr = [];
    dotJudge = 0; 
    whatFunc = 2; 
    middle = 1; 
    minJudge = 0;
}
function minusHandler(){
    if(middle === 1){
        resultHandler();
        frontNum = resultNum;
    }
    frontNum = Number(arr.join(""));
    arr = [];
    dotJudge = 0; 
    whatFunc = 3;
    middle = 1; 
    minJudge = 0;
}
function plusHandler(){
    if(middle === 1){
        resultHandler();
        frontNum = resultNum;
    }
    frontNum = Number(arr.join(""));
    arr = [];
    dotJudge = 0; 
    whatFunc = 4; 
    middle = 1; 
    minJudge = 0;
}

function plusminHandler(){
    (textbox.value === "" || minJudge === 0)  ? (arr.unshift("-"), minJudge = 1) : (arr.shift(),minJudge = 0);
    textbox.value = `${arr.join("")}`;
}

function resultHandler(){
    
    switch(whatFunc){
        case 1 : 
            backNum = Number(arr.join(""));
            resultNum = frontNum / backNum ;
            frontNum = resultNum;
            frontNum < 0 ? minJudge = 1 : minJudge = 0;
            arr = [];
            arr.push(frontNum);
            arr = arr[0].toString().split("");
            textbox.value = `${arr.join("")}`;
            whatFunc = 0;
        break;
         case 2 : 
            backNum = Number(arr.join(""));
            resultNum = frontNum * backNum ;
            frontNum = resultNum;
            arr = [];
            arr.push(frontNum);
            arr = arr[0].toString().split("");
            textbox.value = `${arr.join("")}`;
            whatFunc = 0;
        break;
         case 3 :
            backNum = Number(arr.join("")); 
            resultNum = frontNum - backNum ;
            frontNum = resultNum;
            arr = [];
            arr.push(frontNum);
            arr = arr[0].toString().split("");
            textbox.value = `${arr.join("")}`;
            whatFunc = 0;
        break;
         case 4 : 
            backNum = Number(arr.join(""));
            resultNum = frontNum + backNum ;
            frontNum = resultNum;
            arr = [];
            arr.push(frontNum);
            arr = arr[0].toString().split("");
            textbox.value = `${arr.join("")}`;
            whatFunc = 0;
        break;
    }
}


cancel.addEventListener("click",cancelHandler);
backspace.addEventListener("click",backspaceHandler);

nine.addEventListener("click",nineHandler);
eight.addEventListener("click",eightHandler);
seven.addEventListener("click",sevenHandler);
six.addEventListener("click",sixHandler);
five.addEventListener("click",fiveHandler);
four.addEventListener("click",fourHandler);
three.addEventListener("click",threeHandler);
two.addEventListener("click",twoHandler);
one.addEventListener("click",oneHandler);
zero.addEventListener("click",zeroHandler);

dot.addEventListener("click",dotHandler);

divide.addEventListener("click",divideHandler);
plus.addEventListener("click",plusHandler);
minus.addEventListener("click",minusHandler);
multi.addEventListener("click",multiHandler);
result.addEventListener("click",resultHandler);

plusmin.addEventListener("click",plusminHandler);