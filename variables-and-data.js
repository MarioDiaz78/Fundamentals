/*
*Variables, Data Types, and Typing
 */
let wordData = "Word List";

console.log("Word List");
console.log(wordData);

/*
let wordData;
wordData = "Word List";
 */


let subTotal = 100;   /*let x = 100;*/
let tax = subTotal * 0.07;    /*let y = x * 0.07;*/
let totalWithTax = tax + subTotal;    /*let z = y + x;*/

let obj = {
    key1: "Value 1",
    key2: 4,
    boolean: true,
    obj2: {
        obj2Key1: "value of inner object",
    }
};

console.log(obj.key1);
console.log(obj.obj2.obj2Key1);

/* Typing Systems  */

/*let variable : string = "string";   don't need to do this*/

let var1 = "2";
let var2 = 5;
let result = var1 + var2;

console.log(result);  /*will give unexpected results*/

let add = 1+2;
let sub = 2-1;
let mult = 2*4;
let division = 4/2;
let mod = 5%2;

let string = "String 1 " + "String 2";

console.log(string);

