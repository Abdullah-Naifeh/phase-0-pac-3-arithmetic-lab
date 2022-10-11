function add (a ,b ){
    return a + b ;
}

function subtract (a ,b ){
    return a - b ;
}

function multiply (a ,b ){
    return a * b ;
}

function divide (a ,b ){
    return a / b ;
}

function increment (number){
     return ++number;
}

console.log(increment(55))


function decrement (n){

    return --n;      
  
}
console.log(decrement(33))

function makeInt (n){
    let res = parseInt(n , 10)
    return res;
}
console.log(makeInt("5.2253"))

function preserveDecimal (n){
    let res = parseFloat(n)
    return res;
}
console.log(preserveDecimal("vdv"))