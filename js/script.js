"use strict";

function showFirstMessage(text) {
    console.log(text);
    let num = 20;
}

showFirstMessage("hello");

function calc (a, b){
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret()
{
    let num = 50;
    return num;
}

const anoterNum = ret();
console.log(anoterNum);


const logger = function () {
    console.log("hello")

};

logger();

const str ="tEst";
const arr = [1, 2, 3];

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str);

let fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello World";

console.log(logg.slice(6, 11));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

const num = 12.5;

console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));
