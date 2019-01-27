
//String and array challenge
//console.log for this statement
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
//how to find out length of the strings or statement
console.log(myString.length);


//how to remove a letter and replace 
// /which letter to remove/g,' add the letter here which do you want to replace'
myString=myString.replace(/,/g,' ');
console.log(myString);

//to push some data in array using push function 
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");

//add a text in specific place
//splice(index number,remove how much text do you want to remove,"text do you want to add")
console.log(favoriteAnimals);
favoriteAnimals.splice(1,0,"meerkat");
console.log(favoriteAnimals);

//to find out the lenght of array 
console.log("The array has a length of" ,favoriteAnimals.length);
favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);

//to finout a specifice string at index number
console.log('The item you are looking for is at index: ', favoriteAnimals.indexOf("meerkat"));
favoriteAnimals.splice(favoriteAnimals.indexOf("meerkat"), 1);
console.log(favoriteAnimals);




//more javascript
function sum(a,b,c)

{
    
    let result= a+b+c;
return result;}
let a=1;
    let b=2;
    let c=3;

console.log("sum is :",a+b+c);


function colorCar(red){
        return "a " + red + " car";
    }



    let car = {
        name: "nissan",
        model:"GTR 2018",
        horsePower: "600",
        torque: "425",
    };
    for (let entries of Object.entries(car)){
        console.log(entries);
    };
    function vehicleType(color,code)
{

    if (code===1)
    {
        return console.log("a",colored,"car")

    }
    else
    {
    return console.log("a",color ,"motorBike")
    };
};

vehicleType("blue", 2);
console.log("yes");

if (3 === 3) {
     console.log("yes");
    } else {
     console.log("no");
    }