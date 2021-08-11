"use strict";

 const arr =[86, 32, 13, 56, 18];

arr.sort(compareNum);
console.log(arr);

 function compareNum (a, b) {
     return a - b;
 }
// // arr[99] = 0;

// arr.forEach(function(item, i, arr) {
//     console.log(`${i} : ${item} внутри массива ${arr}`);

// });


//arr.pop();
// arr.push(10);

 
// console.log(arr);

// for (let i = 0; i <arr.length; i++)
//  {
//     console.log(arr[i]);
//  }

//  for (let value of arr) {
//      console.log(value);
//  }


//  const str = prompt ("", "");
//  const products = str.split(", ");
//  products.sort();
//  console.log(products.join(';'));





//передача по ссылке и значению


// let a = 5,
//     b = a;

//     b = b+5;

// console.log(b);
// console.log(a);

// const  obj = {
//     a : 5,
//     b : 1

// };

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainOb) {
    let objCopy = {};

    let key;
    for(key in mainOb) {
        objCopy[key] = mainOb[key];
    }

    return objCopy;

}

const numbers = {
    a: 2,
    b:5,
    c: {
        x: 7,
        y: 4
    }
   
};

const newNubers = copy(numbers);
newNubers.a = 10;

console.log(newNubers);
console.log(numbers);



const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = [ 'a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'fb';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['live', 'redac', 'improvis'],
    internet = [...video, ...blogs, 'vk', 'fb'];

console.log(internet);

function log (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [1, 5, 7, 89, 9];

log(...num);


const array = ["a", "b"];

const newArr = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

console.log(newObj);
