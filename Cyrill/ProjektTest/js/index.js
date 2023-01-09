'use strict';

// Document.getElementById in JQuery (ist einfach viel geiler)
$('#Versuch').html("Das ist ein JQuery Text");

// Temporäre Variabeln definieren
let a, b, c

//Werte zuweisen
a = 6;
b = 6;
c = a / b;

//Ausgabe auf die Konsole
console.log(c);


//Funktion definieren und mit Code implementieren
function test(var1, var2){
    console.log(var1 + " " + var2);
}

//Funktion ausführen
test("Hello", "World");


//Array erstellen
let filme = ["Shawshank Redemption", "Schindlers List", "Interstellar", "Pulp Fiction"];

//erstellt ein Objekt
let mensch = {
    name: "Cyrill",
    age: 16
};

//geben einen spezifischen Wert aus einem Array aus
console.log(filme[0]);

//Gebe einen spezifischen Wert aus einem Objekt aus
console.log(mensch.age);

//Identifikation des Types des Objektes (Hier ein Array)
console.log(typeof filme);

//Erstellt einen Eventlistener auf dem Button, welcher auf ein Klicken reagiert
$("#button1").click(function(){
    alert("You clicked the Button");
});

// Schreibt etwas in die Website
let text = "hahahahahhahah";
document.write(text);


//ForEach Schleife mit Value und Index, man kann auch den Index weglassen
filme.forEach((value, index) => {
    console.log(value);
    console.log(index);
});

