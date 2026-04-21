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


console.clear();




// concatination    - (+)


let str1 = "iron"
let str2 = "man"


console.log(str1+" "+"marvel"+" "+str2);


// Template string


console.log(`${str1} marvel ${str2}`);





// Type Conversion 

// 1. implicit type conversion 

// string 
// string anything string


console.log(typeof("hello" + "str"));
console.log(typeof("hello"+1));
console.log(typeof("hello"+true));
console.log(typeof("hello"+undefined));
console.log(typeof("hello"+null));

console.log(typeof("hello"+[1,2]));
console.log(typeof("hello"+{l:1}));

console.log("number :- ");

// number 

console.log(typeof(1 + "hello"));
console.log(typeof(1 + 1));
console.log(typeof(1 + true));
console.log(typeof(1 + undefined));
console.log(typeof(1 + null));

console.log(typeof(1 + [1,2]));
console.log(typeof(1 + {l:4}));

console.log("boolean :- ");

// boolean

console.log(typeof(true + "hello"));
console.log(typeof(true + 1));
console.log(typeof(true + true));
console.log(typeof(true + undefined));
console.log(typeof(false + null));

console.log(typeof(true + [1,2]));
console.log(typeof(true + {k:2}));

console.log("undefined :- ");

// undefined 

console.log(typeof(undefined + "hello"));
console.log(typeof(undefined + 1));
console.log(typeof(undefined + true));
console.log(typeof(undefined + undefined));
console.log(typeof(undefined + null));

console.log(typeof(undefined + [1,2]));
console.log(typeof(undefined + {i:9}));


console.log("null :-");

// null 

console.log(typeof(null + "hello"));
console.log(typeof(null + 1));
console.log(typeof(null + true));
console.log(typeof(null + undefined));
console.log(typeof(null + null));

console.log(typeof(null + [1,2]));
console.log(typeof(null + {k:2}));




console.clear();




// 2. explicit type conversion 

// constractor 
// numberConstractor - Number()


console.log(10 + Number("10"));

console.log(Number())
console.log(Number(""))
console.log(Number("123"))
console.log(Number("abc"))
console.log(Number(123))
console.log(Number(-1))
console.log(Number(true))
console.log(Number(false))
console.log(Number(undefined))
console.log(Number(null))
console.log(Number([1,"a"]))
console.log(Number({k:2}))


// boolean - Boolean()


console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("123"));
console.log(Boolean("abc"));
console.log(Boolean(123));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([1,"false"]));
console.log(Boolean({k:2}));


console.clear();


// flow control statement 

// conditional statement

// if stament 

// syntex :

// if(condition){statement}

// if true = allow


if(5=="5"){

    console.log("check true");
    
}

console.log("hai");



// if else statement


// syntex :- 

// if(condtion){statment}else{statement}

// if true = allow , false else = allow


if(0){
    console.log("true");
  
}else{
    console.log("false");   
}


// else if statment

let hour = 15

if(hour >= 1 && hour <= 6){
    console.log("good moning");
    
}else if(hour >= 7 && hour <= 12){
    console.log("morning");
    
}else if(hour >= 13 && hour <= 16 ){
    console.log("good afternoon");
    
}else if(hour >= 17 && hour <= 20){

    console.log("good evening");
    

}else if(hour >=21 && hour <= 24){
    console.log("good night");
    
}else{
    console.log("invalid time");
    
}


console.clear();

// nested if statement
// nest


// let age = prompt("enter your age :-")
// let height = prompt("enter your height (cm)")
// let weight =prompt("enter your weight")


// if(age >= 20){
//     if(height >= 170){
//         if(weight >= 70){
//             alert("congadulation your selected ⭐⭐⭐"); win + >
            
//         }else{
//             alert("your weight is not sufficiant");
            
//         }

//     }else{
//         alert("your height is not sufficiant");
        
//     }

// }else{
//     alert("your age is not sufficiant");
    
// }


// switch statement

// switch (condition) {
//     case value: statement
        
//         break;

//     default: statement
//         break;
// }



let trafficSignal = "yellow"

switch(trafficSignal){
    case "red" : console.log("vechile stop"); break
    case "yellow" : console.log("vechile start"); break
    case "green" : console.log("vechile go"); break

    default : console.log("have nice day");
    
    
    
    
}



// looping statement 

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);


// for loop

// for(intialization; condition ; iteration){
//     statement
// }

for(let a = 1; a <= 3 ; a++){

    console.log(a); // 1 2 3
    

}

// let a = 1 ; 1<=3 = true ; 1++ = 2
// let a = 2 ; 2<=3 = true ; 2++ = 3
// let a = 3 ; 3<=3 = true ; 3++ = 4
// let a = 4 ; 4<=3 = false.

// while loop

// intialization
// while(condition){
// statement
// iteration
// }
console.log("while loop :- ");

let val = 3
while(val >= 10){

    console.log(val);

    val--
    

}

// 3  , 3>=0 = true , c = 3 , 3-- = 2
// 2  , 2>=0 = true , c = 2 , 2-- = 1
// 1  , 1>=0 = true , c = 1 , 1-- = 0
// 0  , 0>=0 = true , c = 0 , 0-- = -1
// -1 , -1>=0 = false .



// do while loop


// syntex :- 

// intialization 
// do{
//     statement
//     iteration
// }
// while(condition)

let val1 = 3

do{
    console.log(val1);
    val1--
    
}
while(val1>=0)

console.log("for of loop :- ");



// for of loop - string , array , function

let str = "javascript"



// for(declration of str ){
//     console.log(declration);
    
// }

for(let a of str){
    console.log(a);
    
}

str = "javascript";

for (let a = 0; a < str.length; a++) {
  console.log(str[a]);
}













let arr = [1,2,3,4,5,6]


for(let b of arr){
    console.log(b);
    
}



// for in loop - object

let obj = {
    name1 : "john",
    role  : "developer",
    salary : 400000
}


for(let c in obj){
    console.log(obj[c]);
    
}


console.log(str + 10);

// str10





//  3. function 

//  4. date







