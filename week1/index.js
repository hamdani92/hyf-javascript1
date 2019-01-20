console.log("Hello world // english")
console.log("salam duniya // urdu ")
console.log("Hej varlden // swedish")

console.log("I' m awesome") // the error for this statement is complier thought that after
 //closing the string with single collen(') the next word is variable so 
//compiler did not find the varible or we have use 3 single collens in one statment to print

let x;
console.log("the value of my variable x will be:javascript is smart programming language");
console.log(x);
x=1;
console.log("value of x is =", x);

let y= 'sweden';
console.log("the vlue of y is=", y);
y='norway';
console.log("the new value of y will be=",y);

let z=7.25;
console.log("z=", z);
let a= Math.round(z);
console.log("a= ", a);

c = Math.max(z, a);

console.log("The highest value between z and a is: ",c);


let computer = [];
console.log("the computer parts");
console.log("The value of my array is: ",computer);
let myFavoriteAnimals = ["lion", "leopard", "cat", "horse"];
console.log("My favorite animals are: ", myFavoriteAnimals);
myFavoriteAnimals.push("baby pig");
console.log("My favorite animals are: ", myFavoriteAnimals);


let myString = "this is a test"
console.log(myString);
console.log("The length of my string is: ", myString.length);


let nissan = "nissan Gtr";
let model = 2016;
let volvo = "xc90";
let bolean= 0.6;
console.log("The name of car is = " , nissan);
console.log("volvo model is =" , volvo);
console.log("model= " , model);
console.log("bolean=",bolean);

console.log("The type of variable of nissan is: " , typeof nissan);
console.log("The type of variable of volvo is: " , typeof volvo);
console.log("The type of variable of model is: " , typeof model);
console.log("The type of variable of model is: " , typeof bolean);
if (typeof nissan == typeof volvo) {
    console.log('nissan and volvo are the same type');
} else {
    console.log('nissan and volvo are not the same type');
}
if (typeof volvo == typeof model) {
    console.log('nissan and model are the same type');
} else {
    console.log('nissan and model are not the same type');
}
if (typeof model == typeof bolean) {
    console.log('model and boolean are the same type');
} else {
    console.log('model and boolean are NOT the same type');
}

x = 7;
console.log("The value of x is: ", x);
x = x % 3;
console.log("new value is = " , x);



let comparing = ["porsche", 991, true]
console.log("multiarray is : ",comparing);
console.log("types of values: " ,
 typeof comparing[0] , ", " , typeof comparing[1] , ", and "
  ,typeof comparing[2] , ".");

let firstvalue = 6/ 0;
let secondvalue = 10 / 0;
let finalvalue = firstvalue === secondvalue;
console.log("infinite One is: " . firstvalue , ", or 6 \/ 0");
console.log("infinite Two is: " , secondvalue , ", or 10 \/ 0");
if (finalvalue = true) {
    console.log("We can compare infinites");
} else {
    console.log("We cannot compare infinites");
}