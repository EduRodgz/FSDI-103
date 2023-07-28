//Creating string varibale with let
let myName = "Eduardo";
let myLastName = "Rodriguez";

//Creating a numerical variable
let myAge = 31;
let mySize = 5.18;

//Creating a boolean variable
let isProfessor = true;
let isStudent = false;    

//Let's see the value
console.log(myName);
console.log(myLastName);
console.log(myAge);
console.log(mySize);
console.log(isProfessor);
console.log(isStudent);

//Concatenate
//console.log(" My name is " + myName + " , I am " + myAge + " years old and my size is " + mySize + ". ");

//Operations

let num1 = 10;
let num2 = 2;

// Basic operations +,-,* and /.
let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplacation = num1 * num2;
let division = num1 / num2;

//let pie = 3.14;
//let radius = 3;

//let areaValue = pie * radius * radius;
//let radiusValue = areaValue ;
//console.log(" The area of a circle with a radius of " + radiusValue + " is the " + areaValue);

const pi = 3.1416
let radius = prompt("Enter the radius: ");

//perform the operation

let area = pi * radius * radius;

console.log(area);

//document.write(" My name is " + myName + " , I am " + myAge + " years old and my size is " + mySize + ". ");

//template string
document.write(`<p>My name is ${myName}, ${myAge} years old and my size is ${mySize} </p>`);


//assingment 1
let userName ="Eduardo";
let userPassword ="Password";
let userProfile = "Rod";
let userChild ="Children";
let searchBar ="Search";
let movieOption ="Movies";
let movieCategoy ="TV Shows";
let tvCategory ="TV Categories";
let horrorCategory = "Horror Movies";
let actionCategory ="Action Movies";
let animeCategory ="Anime";
let sadCategory = "Sad movies";
let onlyonNetlflix ="Only on Netflix";
let latestAdded ="Latest Addition";
let newReleases ="New Releases";
let comedyShow ="Standups";
let nextEpisode ="Next Episode";
let recommenedOption ="Similiar like this";
let singOut ="Sign Out";
let singIn ="Sign In";
let dramaOption ="Drama"; 


document.write(`<p>${userName}</p>`);
document.write(`<p>${userPassword}</p>`);
document.write(`<p>${userProfile}</p>`);
document.write(`<p>${userChild}</p>`);
document.write(`<p>${searchBar}</p>`);
document.write(`<p>${movieOption}</p>`);
document.write(`<p>${movieCategoy}</p>`);
document.write(`<p>${tvCategory}</p>`);
document.write(`<p>${horrorCategory}</p>`);
document.write(`<p>${actionCategory}</p>`);
document.write(`<p>${sadCategory}</p>`);
document.write(`<p>${animeCategory}</p>`);
document.write(`<p>${onlyonNetlflix}</p>`);
document.write(`<p>${latestAdded}</p>`);
document.write(`<p>${newReleases}</p>`);
document.write(`<p>${comedyShow}</p>`);
document.write(`<p>${nextEpisode}</p>`);
document.write(`<p>${recommenedOption}</p>`);
document.write(`<p>${singIn}</p>`);
document.write(`<p>${singOut}</p>`);
document.write(`<p>${dramaOption}</p>`);