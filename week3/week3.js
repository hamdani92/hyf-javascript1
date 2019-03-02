
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
let rep = myString.split(",").join(" ");
console.log(rep);

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, 'meerka');
console.log(favoriteAnimals);
console.log("the length of array is : ", favoriteAnimals.length);
favoriteAnimals.splice('3', '1');
console.log(favoriteAnimals);

favoriteAnimals.splice(favoriteAnimals.indexOf("meerkat"), 1);
console.log(favoriteAnimals);

function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(2, 6, 5));

function colorcar(color) {
  console.log("a" + color + "car");
}
colorcar("red");





function vehicleType(color, code) {
  if (code === 1) {
    console.log("a", color, "car")
  } else {
    console.log("a", color, "motorbike")
  };

};
vehicleType("blue", 1);

console.log(3 === 3 ? "yes" : "no");
//Create a function called vehicle, like before, but takes another parameter 
//called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
function vehicle(color, code, age) {
  if (code === 1 && age === 5) {
    console.log("a", color, "used car");
  } else if (code === 2 && age === 0) {
    console.log("a", color, "motorbike")

  }
}
vehicle("green", 1, 5);
//Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
let vehicles = [
  "motorbike", "caravan", "bike"
]
//How do you get the third element from that list?
console.log(vehicles[2]);
//Change the function vehicle to use the list of question 
//7. So that vehicle("green", 3, 1) prints "a green new bike".
function vehicle(color, code, age) {
  if (code === 3 && age === 1) {
    console.log("a", color, "new bike");
  } else if (code === 2 && age === 0) {
    console.log("a", color, "motorbike")

  }
}
vehicle("green", 3, 1);

//Use the list of vehicles to write an advertisement.So that it prints something 
//like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.".
//(Hint: use a for loop.)

let advertisement = [
  "motorbike", "caravan", "bike"
]
for (let i = 0; i < 1; i++) {
  console.log("amazing joe's Garage, we service cars,",
    advertisement[0], ',', advertisement[1], "and", advertisement[2], ".");
}

let humanBody = {

}
let teachers = {
  name: "sanaulla",
  age: 40,
  module: "C++"

}
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
if (z == x) {
  console.log("yes");
} else {
  console.log("no");
}
let bar = 42;
typeof typeof bar;
console.log(bar)
