

// concatination  --    + 


let str = "hello"
let str1 = "world"

console.log(str + " " +str1);


// template string  


console.log(`${str} ${str1}`);



// Type conversion 

// implicit type conversion 

// string 
// string anything string

console.log(typeof("hello" + "world"));
console.log(typeof("hello" + 1));
console.log(typeof("hello" + true));
console.log(typeof("hello" + undefined));
console.log(typeof("hello" + null));

console.log(typeof("hello"+[1,2]));
console.log(typeof("hello"+{h:5}));


// number 

console.log(typeof(1+"hello"));
console.log(typeof(1+1));
console.log(typeof(1+true));
console.log(typeof(1+undefined));
console.log(typeof(1+null));

console.log(typeof(1+[1,2]));
console.log(typeof(1+{h:5}));


// boolean


console.log(typeof(true + "hello"));
console.log(typeof(true + 1));
console.log(typeof(true + true));
console.log(typeof(true + undefined));
console.log(typeof(true + null));

console.log(typeof(true + [1,2]));
console.log(typeof(true + {k:9}));



console.clear();




// explicit type conversion


// Constractor
// number constractor -->  Number()

console.log(1 + Number("1"));
console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("abc"));
console.log(Number(1));
console.log(Number(-1));
console.log(Number(0));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));
console.log(Number([1,2]));
console.log(Number({k:2}));



// boolean Constarctor  --> Boolean()

console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("123"));
console.log(Boolean("abc"));
console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean(0));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));



console.clear()


// flow control statement

// conditional statement 

// if statement

// syntex :- 

// if(condition){statement}

// flow : -  if (true) = allow

// example :- 


// if(5!=5){
//     console.log("hello");
    
// }

// console.log("world");


// // if else statement 


// // syntex :- if(condition){statement}else{statement}


// // flow :-   if(true) = allow , false ,else = allow.


// // example 


// if(0){
//     console.log("true");
    
// }else{
//     console.log("false");
    
// }


// // else if statement


// let hour = 25

// if(hour >= 1 && hour <= 6){
//     console.log("good morning");
    
// }else if(hour >= 7 && hour <= 12){
//     console.log("morning");
    
// }else if(hour >= 13 && hour <=  15){
//     console.log("good afternoon");
    
// }else if(hour >= 16 && hour<=  18){
//     console.log("good evening");
    
// }else if(hour >= 19 && hour<=  24){
//     console.log("good night");
    
// }else{
//     console.log("invalid time");
    
// }


// // nested if statement 

// let age = prompt("eneter your age:- ")
// let height = prompt("eneter your height (cm) :-")
// let weight =prompt("eneter your weight :- ")

// if(age >= 18){
//     if(height >= 170){
//         if(weight >=70 ){
//             console.log("congradulation your are selected⭐⭐⭐");
            
//         }else{
            
//         console.log("your weighht is not sufficient");
    

//         }
        
//     }else{
//         console.log("your  height is not selected");
        
//     }

// }else{
//     console.log("your age is not selected");
    
// }



// switch statement


// switch(condition){
//     case "value" : statement ; break;
//     case "value" : statement ; break;
//     case "value" : statement ; break;
//     case "value" : statement ; break;
// }


// examle :- 


let trafficLight = ""

switch(trafficLight){
    case "red" : console.log("stop vechile"); break
    case "yellow" : console.log("start vechile");break
    case "green" : console.log("go vechile");break

    default : console.log("have a nice day...");
    
    
}




// looping statement

console.log(1);

console.log(2);
console.log(3);
console.log(4);
console.log(5);


// types :- 

// for loop :- 


// syntex  

// for(intialization ; condition ; iteration){
//     statement
// }

// example


console.log("for loop :- ");

for(let a = 1 ; a<=3 ; a++ ){
    console.log(a); // 1 2 3
    
}

// flow :- 

// a = 1 ; 1 <= 3 = true ; 1++ = 2 
// a = 2 ; 2 <= 3 = true ; 2++ = 3
// a = 3 ; 3 <= 3 = true ; 3++ = 4
// a = 4 ; 4 <= 3 = false .

// while loop :- 

console.log("while loop :-");

// syntex :- 

// intialization 

// while(condition){
//     statement 

//     iteration 
// }

// example :- 


let val = 2 

while(val >= 10){
    console.log(val);

    val--
    
}


// val = 2 ; 2 >= 0 = true ; c(2) ; 2-- = 1 
// val = 1 ; 1 >=0  = true ; c(1) ; 1-- = 0
// val = 0 ; 0 >= 0 = true ; c(0) ; 0-- = -1
// val = -1 ; -1 >= 0 = false.


console.log("do while loop :- ");
// do while loop :- 

// syntex :- 

// intialization 

// do{
//     statement  

//     iteration
// }

// while(condition)


// example :- 

let val1 =  2

do {
  console.log(val1);

  val1--;
} while (val1 >= 0);


console.log("for of loop :- ");


// for of loop :-  // array , string , function

let arr = [1,2,3,4]

let str2 = "javascript"


// syntex :- 

// for(declration of  arr){
//     console.log(declration);
    
// }

for(let a of str2){
    console.log(a);
    
}


// for in loop :- object 

let c = {
    name1 : "pravin",
    role  : "developer",
    salary: 2000000

}


for(let b in c){
    console.log(c[b]);
    
}