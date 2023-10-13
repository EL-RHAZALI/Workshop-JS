
const ecran=document.querySelector(".ecran");
const one=document.querySelector(".one");
const two=document.querySelector(".two");
const four=document.querySelector(".four");
const five=document.querySelector(".five");
const seven=document.querySelector(".seven");
const eight=document.querySelector(".eight");
const division=document.querySelector(".division");
const clear=document.querySelector(".clear");
const egale=document.querySelector(".egale");
const delet=document.querySelector(".delete");
let number1="";
let operation="";

function resultOfZero(event){
    let resultOfZero=event.target.innerText;
    return ecran.append(resultOfZero);
}


function resultOfOne(event){
    let resultOfOne=event.target.innerText;
    return ecran.append(resultOfOne);
}
one.addEventListener("click", resultOfOne);


two.addEventListener("click", function(event){
    let resultOfTwo=event.target.innerText;
    return ecran.append(resultOfTwo);
})


function resultOfThree(event){
    let resultOfThree=event.target.innerText;
    return ecran.append(resultOfThree);
}


function resultOfFour(event){
    let resultOfFour=event.target.innerText;
    return ecran.append(resultOfFour);
}
four.addEventListener("click", resultOfFour);


five.addEventListener("click", function(event){
    let resultOfFive=event.target.innerText;
    console.log(resultOfFive);
    return ecran.append(resultOfFive);
})


function resultOfSex(event){
    let resultOfSex=event.target.innerText;
    return ecran.append(resultOfSex);
}


function resultOfSeven(event){
    let resultOfSeven=event.target.innerText;
    return ecran.append(resultOfSeven);
}
seven.addEventListener("click", resultOfSeven);


eight.addEventListener("click", function(event){
    let resultOfEight=event.target.innerText;
    console.log(resultOfEight);
return ecran.append(resultOfEight);
})


function resultOfNine(event){
    let resultOfNine=event.target.innerText;
    console.log(resultOfNine);
    return ecran.append(resultOfNine);
}

function resultOfDivision(event){
    number1=ecran.innerText;
    ecran.innerText="";
    operation=event.target.innerText;
    ecran.innerText="";
}
division.addEventListener("click", resultOfDivision);


function resultOfMultiplication(event){
    number1=ecran.innerText;
    ecran.innerText="";
    operation=event.target.innerText;
    ecran.innerText="";
}


function resultOfPlus(event){
    number1=ecran.innerText;
    ecran.innerText="";
    operation=event.target.innerText;
    ecran.innerText="";
}


function resultOfSubstraction(event){
    number1=ecran.innerText;
    ecran.innerText="";
    operation=event.target.innerText;
    ecran.innerText="";
}


function resultOfClear(event){
return ecran.innerText="";
}
clear.addEventListener("click", resultOfClear);


function calcul(x,op,y){
    if (op==="+") {
        return Number (x)+ Number (y);
    }
    else if (op==="-") {
        return Number (x)- Number (y);
    }
    else if (op==="x") {
        return Number (x)* Number (y);
    }
    else if (op==="/") {
        return Number (x)/ Number (y);
    }
}


function resultOfEgale(){
    let number2=ecran.innerText;
    let result="";
    ecran.innerText="";
    result=calcul(number1,operation,number2);
    return ecran.append(result);
}
egale.addEventListener("click", resultOfEgale)


function resultOfDelete(){
    let resulOfDelet=ecran.innerText.split('');
    resulOfDelet.pop();
    let effacer=resulOfDelet.join('');
    return ecran.innerText=effacer;
}
delet.addEventListener("click", resultOfDelete);