'use strict';

document.getElementById("test").innerHTML = "HalloWelt";
document.write("<p>guten Tag</p>");

console.log("Hello world");
console.warn("Hello warn");
console.error("Hello error");
console.info("Hello info");

let x = 6;
let y = "6";
console.log(x + y);

function add(first, second) {
    return first + second;
}

console.log(add(2, 6));

let text = "  Hallo World  ";
console.log(text.length);
console.log(text.slice(1, 3));
console.log(text.slice(-5, -3));
console.log(text.slice(-5));
// Extracting String
// slice(start, end)
// substring(start, end)
//substr(start, length)

console.log(text.replace("orl", "lor"));
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.trim());
console.log(text.indexOf("W"));

const cars = ["Audi", "Volvo", "VW"];
console.log(cars.length);
console.log(cars[0]);

cars.forEach(car => {
    console.log(car);
});

for (let index = 0; index < cars.length; index++) {
    console.log(cars[index]);
    
}

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
console.log(person);
console.log(person.firstName);

Object.entries(person).forEach(entry => {
    const [key, value] = entry;
    console.log(key, value);
})