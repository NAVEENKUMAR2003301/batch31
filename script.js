// variable

// // container - we can store the data / value

// // three type - var / let / const

// // rules of variable

// // var  - global scope

// // 1. declration , 2. intialization

// var a = 10;

// // 3. reuse , 4. reInialization

// a = 20;

// // 5. reDeclration

// var a = 30;

// console.log(a);

// // let - block scope

// // declration  // intialization

// let b = 10;

// // reuse      // reIntialization

// b = 60;

// // reDeclration not accept

// // let b = 50

// console.log(b);

// // const - block scope

// // declration     // intialiazation

// const c = 30;

// // reuse   // reIntialiazation not accept

// //   c = 40

// // reDeclration not accept

// // const c = 50

// console.log(c);

// example :-

var a = 10;
a = 20;
var a = 30;
console.log(a);   //  30

let b = 15;
b = 25;
console.log(b);   //  25


const c = 50;
console.log(c);    // 50


var x = 5;
x = x + 10;
console.log(x);  // 15


let y = 40;
y = y - 10;
console.log(y);   // 30



const z = 20;
const result = z + 5;
console.log(result); // 25


var m = 1;
var m = 2;
m = 5;
console.log(m);  // 5


let n = 100;
n = n / 2;
console.log(n);   // 50


const p = 10;
const q = p * 3;
console.log(q);   // 30


var r = 2;
r = r * 3;
var r = r + 4;
console.log(r);   // 10



// Printing Statement


// 1. console.log()

console.log(100);

let a1 = 10

console.log(a1);


// 2. alert()


// alert(100)

// let b1 = 120

// alert(b1)


// 3. confirm()

// confirm("did you like js?")


// 4. prompt()

// prompt("what is your name :-")


// 5. document.writeln()

// document.writeln(120)



// i want to print value in console side. "welcome"


console.log("welcome");




// i want to print the value to pop up  . "Good evening"

// alert("Good evening")

// i want to know the wish to user final val in console("do you like apple")


// let userWish = confirm("do you like apple ?")

// console.log(userWish);






// i want to print in console side user age .

// let userAge = prompt("what is your age :- ")

// console.log("user age :- " + userAge);




// console method :- 


// console.log()

console.log(100);



// console.warn()

console.warn(100);



// console.error()

console.error(100)


// console.clear()

console.clear()


console.log("good");
console.error("bad");

console.clear();

// DataTypes 


// 1. primitive datatype

// Types

// 1. string - ""

let name1 = "123"

console.log(typeof(name1));


// 2. number 

let num = 123

console.log(typeof(num));


// 3. boolean

let boo = true 

console.log(typeof(boo));


// 4. undefined 

let var1;

console.log(var1);


// 5. null

// let hello = prompt()

// console.log(hello);


// 2. non-primitive datatype

//  1. Array 

// syntex -   [] - index number

let fruit = ["banana","apple","orange","graphs","cherry","guava","giwi"]

console.log(fruit);
console.log(fruit[3]);


console.log(fruit[0]);
console.log(fruit[fruit.length-1]);

console.log(fruit[1]);

console.log(fruit[1],fruit[fruit.length-3]);


fruit = ["banana", "apple", "orange", "graphs", "cherry", "guava", "giwi"];

//  2. object 

// syntex - {}

let fruitDetials = {
    yellowFruit : "banana",
    redFruit    : ["apple","cherry"],
    greenFruit  : ["graphs","guava","giwi"],
    orangeFruit : "orange"
}


console.log(fruitDetials);
console.log(fruitDetials.yellowFruit);
console.log(fruitDetials.orangeFruit);
console.log(fruitDetials.redFruit[1]);
console.log(fruitDetials.greenFruit[1]);

console.clear();


//  operator

// 1. Arithmetic operator

// addition    +

console.log(6 + 6);

// subraction  -

console.log(7 - 7);


// multiplication   *


console.log(7 * 5);


// division       /

console.log(70 /  7);


// modulus        %


console.log(4000 % 500);

console.clear();


// increament   ++   = +1

// pre inc   = ++var

// post inc  = var++


// decreament   --  = -1

// pre dec   = --var

// post dec  = var--


// example :


//  first type

let num1 = 2

num1++

console.log(num1);


// second type

// we are searching Element if find in variable side, that time you can calculate that value side till variable only.


let num2 = 2       // null

    num2 = num2--  // 1+2 = 3


    console.log(num2);


// theird type

// we are searching Element if find in value side, that time you can calculate value side full.


let num3 = 2    

let num4 = num3++ 

console.log("num3 :",num3); // 3
console.log("num4 :",num4); // 2


// example


let num5 = 3         
let num6 = ++num5    // ++num5 = 4 
let num7 = --num6    // --num6 = --4 = 3 


console.log("num5 :",num5);  // 4  3 4   final  =  4
console.log("num6 :",num6);  // 3  4 3   final  =  3
console.log("num7 :",num7);  // 2  3 3   final  =  3


//  Exponencial    **

console.log(3**3);  // 3^3 = 3*3*3 = 27

    


//  Assignment operator



let num8 = 20

let additionVal = 100

    // num8 = num8 + additionVal 

    num8 **= additionVal

    console.log(num8);

console.clear();

// 3. comparision operator


// meaning          operator          example            result


// lessThen            <                5 < 7                true

// greaterThen         >                5 > 7                false

// lessThenEq          <=               5 <= 5               true

// greaterThenEq       >=               10 >= 1              true

// loosyTypeEq         ==               5 == "5"             true

// loosyNotEq          !=               5 !="5"              false

// strictlyTypeEq      ===              5==="5"              false

// strictlyNotEq       !==              5!==5                false




console.log(10 < 20 ) // true

console.log(15 > 30 ) // false

console.log(25 <= 25 ) // true

console.log(40 >= 50 ) // false

console.log(7 == "7" ) // true

console.log( 9 != "9" ) // false

console.log(12 === "12" ) // false

console.log(8 !== 8 ) // false

console.log("10" > 5 ) // true

console.log(null == 0 ) // false



// 4. logical operator

// 3 type :- 


// 1 . AND  - &&


// true && true && true = true 
// true && false && true= false 


// 2 . OR   - ||

// true || true || true = true

// true || false || false = true


// 3 . Not  - !


// !(true) = false

// !(false) = true


// Example : - 


console.log("logical operator");


console.log(5 > 3 && 10 > 2);  

// true  && true = true

console.log(8 > 10 && 4 < 6); 

//   false   &&   true = false

console.log(7 < 9 || 2 > 5);

//    true  ||  false = true

console.log(3 > 6 || 1 < 4);

//  false || true = true  

console.log(!(5 > 2));

// !(true) = false

console.log(!(10 < 5));

// !(false) = true

console.log(6 >= 6 && 2 != 3);

// (true && true) = true

console.log(9 === 9 || 4 > 10);

//  true || false = true

console.log(!(7 <= 7));

// !(true) = false

console.log(2 < 1 || !(3 == 3));

// false || false = false


// 5. ternery operator


console.log("ternary operator");


// condition ? statement : statement ;


// example 

5=="5" ? console.log("true") : console.log("false");


// password check


let pwd = false

pwd ? console.log("welcome home page") : console.log("incorrect password");







//  3. function 

//  4. date







