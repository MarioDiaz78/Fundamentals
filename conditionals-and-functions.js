
/*
    Conditions, Functions, Scope and Loops.
 */
/*
// Equals
let equals = 1 === 1;
//console.log(equals);

//Greater than
let greaterThan = 5 > 1;

//Less than
let lessThan = 2<10;

//Greater than Equals
let greaterThanEq = 5 >= 5;

//Less Than Equals
let  lessThanEq = 4 >= 9;

//Not equals
let notEquals = 5 !== 2;  //not equals only returns true if the values aren't the same

let storeA = 1.40;
let storeB = 4.40;

let storeAIsLower = storeA < storeB;
//console.log(storeAIsLower);

if(storeAIsLower){
    console.log("Store A has a lower price.")
}else if (storeB < storeA) {
    console.log("Store B has a lower price.")
}else{
    console.log("Their prices are equal.")
}

//Function
function compareStorePrices (storeA, StoreB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}

//compareStorePrices (10, 5);
//compareStorePrices (7, 10);

function squareNum (number) {
    return number * number;
}

let squaredNumber = squareNum(7);
console.log(squaredNumber);


//Scope

let x = 10;    //Global scope

//Function scope
function addNumbers (n, m, x){
    console.log(x);
    return n + m;
}

addNumbers(2,3, 8);
console.log(x);

//Block Scope
function addNumbers (n, m, x){
   // console.log(x);
    let b;
    if (1===1){
        let b = 8;
    }
    console.log(b);   //will give an error because b is undefined.  out of scope,
    return n + m;
}


//Arrays

let ourArray = [ 1, 2, 3, 4, ['a', 'b', 'c']  ];
console.log(ourArray[4][1]);

let newArr = ourArray [4];
console.log(newArr[0]);

/*for (counter; comparison; incrementor){

}

for (i=0; i<5; i++){
    //console.log("i is equal to: " + i);
    //console.log (ourArray[i]);
}

let arrLen = ourArray.length;
for (i=0; i<arrLen; i++){
   // console.log("i is equal to: " + i);
    //console.log (ourArray[i]);
}

ourArray = [ 1, 9, 3, 5, 3, 8 ,4 ]
//If you put a loop within a loop
arrLen = ourArray.length;
for (i=0; i<arrLen; i++){
    //console.log("i is equal to: " + i);
   // console.log (ourArray[i]);
    for (j=0; j<10; j++){
      //  console.log("j is equal to: " + j);
    }
}


//runs until the conditional is false
while ( true ) {
    //console.log('ran'); //will run infinitely
}
*/

x = 0;
while ( x<10 ) {
    console.log('ran');
    x = x+1;
}
