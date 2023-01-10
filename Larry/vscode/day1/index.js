document.getElementById('title').innerHTML = "hello world";

a = 6;
b = "6";
c = a + b;
console.log(c);
//66

a = 6;
b = "6";
c = a - b;
console.log(c);
//0

a = 6;
b = "6";
c = a * b;
console.log(c);
//36

a = 6;
b = "6";
c = a /  b;
console.log(c);
//1

//-------------------------------------------------------------------------------------------------------------------------

let arr1 = [1, 2, 3, 4];
//Array

let obj1 = {
    name: "John",
    age: 30
}
//Objekt


console.log(obj1.name);
//Name des objektes

console.log(typeof arr1); 
//Typ der Variable


function test()
{
    //dosth
}

let text = '<br> Das ist ein Test';
document.write(text);

arr1.forEach((value, index) => {
    console.log(value);
    console.log(index);
})

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(some);
}

myCalculator(5, 5, myDisplayer);
