// console.log("I like Spaghetti");
// console.log("It's delicious");

// window.alert("I REALLY HATE FRUIT");

// let age; // number
// let firstname = "Bean"; //string
// let student = true; // boolean
// age = 20;
// age += 1; // math

let username = '';
let age;
let student = true;
document.getElementById("nameButton").onclick = function () {
    username = document.getElementById("nameText").value;
    console.log(username);
    document.getElementById("ageLabel").innerHTML = "Hello " + username + " please input your age";

}
document.getElementById("ageButton").onclick = function () {
    age = document.getElementById("ageText").value;
    console.log(age);

    document.getElementById("p1").innerHTML = "Hello " + username;
    document.getElementById("p2").innerHTML = "You are " + age + " years old";
    document.getElementById("p3").innerHTML = "Enrolled: " + student;
}

// console.log("Hello", firstname);
// console.log("You are ", age, " year old");
// console.log("Enrolled: ", student);

// let year = window.prompt("How old are you?");

// console.log(typeof age);
// year = Number(year);
// year += 1;

// console.log("Happy Birthday!! You are", year, "years old");
let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);

console.log(x, typeof x);
console.log(y, typeof y);