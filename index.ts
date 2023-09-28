#! /usr/bin/env node
import inquirer from "inquirer"

const questions : {
    numb1 : number,
    numb2 : number,
    operator : string
}= await inquirer.prompt ([
    {
        type : "number",
        name : "numb1",
        message : "Enter first number"
    },
    {
        type : "number",
        name : "numb2",
        message : "Enter second number"
    },
    {
        type : "list",
        name : "operator",
       choices : ["+","-","*","/"],
        message : "Select operator"
    },
]);
const {numb1,numb2,operator} = questions;
if (numb1 && numb2 && operator) {
    let result : number = 0;
    if (operator === "+"){
        result = numb1 + numb2;
    }else if (operator === "-"){
        result = numb1 - numb2;
    }else if (operator === "*"){
        result = numb1 * numb2 ;
    }else if (operator === "/"){
        result = numb1 / numb2;
    }
    console.log("The required result is :" ,result);
}else {
    console.log("Kindly enter valid input !");
}; 