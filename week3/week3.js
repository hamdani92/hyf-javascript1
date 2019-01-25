let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
myString=myString.replace(/,/g,' ');
console.log(myString);
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
favoriteAnimals.splice(1,0,"meerkat");
console.log(favoriteAnimals);
console.log("The array has a length of" ,favoriteAnimals.length);
favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);
console.log('The item you are looking for is at index: ', favoriteAnimals.indexOf("meerkat"));
favoriteAnimals.splice(favoriteAnimals.indexOf("meerkat"), 1);
console.log(favoriteAnimals);


