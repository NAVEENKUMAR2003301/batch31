// // // // // // // variable

// // // // // // // // container - we can store the data / value

// // // // // // // // three type - var / let / const

// // // // // // // // rules of variable

// // // // // // // // var  - global scope

// // // // // // // // 1. declration , 2. intialization

// // // // // // // var a = 10;

// // // // // // // // 3. reuse , 4. reInialization

// // // // // // // a = 20;

// // // // // // // // 5. reDeclration

// // // // // // // var a = 30;

// // // // // // // console.log(a);

// // // // // // // // let - block scope

// // // // // // // // declration  // intialization

// // // // // // // let b = 10;

// // // // // // // // reuse      // reIntialization

// // // // // // // b = 60;

// // // // // // // // reDeclration not accept

// // // // // // // // let b = 50

// // // // // // // console.log(b);

// // // // // // // // const - block scope

// // // // // // // // declration     // intialiazation

// // // // // // // const c = 30;

// // // // // // // // reuse   // reIntialiazation not accept

// // // // // // // //   c = 40

// // // // // // // // reDeclration not accept

// // // // // // // // const c = 50

// // // // // // // console.log(c);

// // // // // // // example :-

// // // // // // var a = 10;
// // // // // // a = 20;
// // // // // // var a = 30;
// // // // // // console.log(a);   //  30

// // // // // // let b = 15;
// // // // // // b = 25;
// // // // // // console.log(b);   //  25


// // // // // // const c = 50;
// // // // // // console.log(c);    // 50


// // // // // // var x = 5;
// // // // // // x = x + 10;
// // // // // // console.log(x);  // 15


// // // // // // let y = 40;
// // // // // // y = y - 10;
// // // // // // console.log(y);   // 30



// // // // // // const z = 20;
// // // // // // const result = z + 5;
// // // // // // console.log(result); // 25


// // // // // // var m = 1;
// // // // // // var m = 2;
// // // // // // m = 5;
// // // // // // console.log(m);  // 5


// // // // // // let n = 100;
// // // // // // n = n / 2;
// // // // // // console.log(n);   // 50


// // // // // // const p = 10;
// // // // // // const q = p * 3;
// // // // // // console.log(q);   // 30


// // // // // // var r = 2;
// // // // // // r = r * 3;
// // // // // // var r = r + 4;
// // // // // // console.log(r);   // 10



// // // // // // // Printing Statement


// // // // // // // 1. console.log()

// // // // // // console.log(100);

// // // // // // let a1 = 10

// // // // // // console.log(a1);


// // // // // // // 2. alert()


// // // // // // // alert(100)

// // // // // // // let b1 = 120

// // // // // // // alert(b1)


// // // // // // // 3. confirm()

// // // // // // // confirm("did you like js?")


// // // // // // // 4. prompt()

// // // // // // // prompt("what is your name :-")


// // // // // // // 5. document.writeln()

// // // // // // // document.writeln(120)



// // // // // // // i want to print value in console side. "welcome"


// // // // // // console.log("welcome");




// // // // // // // i want to print the value to pop up  . "Good evening"

// // // // // // // alert("Good evening")

// // // // // // // i want to know the wish to user final val in console("do you like apple")


// // // // // // // let userWish = confirm("do you like apple ?")

// // // // // // // console.log(userWish);






// // // // // // // i want to print in console side user age .

// // // // // // // let userAge = prompt("what is your age :- ")

// // // // // // // console.log("user age :- " + userAge);




// // // // // // // console method :- 


// // // // // // // console.log()

// // // // // // console.log(100);



// // // // // // // console.warn()

// // // // // // console.warn(100);



// // // // // // // console.error()

// // // // // // console.error(100)


// // // // // // // console.clear()

// // // // // // console.clear()


// // // // // // console.log("good");
// // // // // // console.error("bad");

// // // // // // console.clear();

// // // // // // // DataTypes 


// // // // // // // 1. primitive datatype

// // // // // // // Types

// // // // // // // 1. string - ""

// // // // // // let name1 = "123"

// // // // // // console.log(typeof(name1));


// // // // // // // 2. number 

// // // // // // let num = 123

// // // // // // console.log(typeof(num));


// // // // // // // 3. boolean

// // // // // // let boo = true 

// // // // // // console.log(typeof(boo));


// // // // // // // 4. undefined 

// // // // // // let var1;

// // // // // // console.log(var1);


// // // // // // // 5. null

// // // // // // // let hello = prompt()

// // // // // // // console.log(hello);


// // // // // // // 2. non-primitive datatype

// // // // // // //  1. Array 

// // // // // // // syntex -   [] - index number

// // // // // // let fruit = ["banana","apple","orange","graphs","cherry","guava","giwi"]

// // // // // // console.log(fruit);
// // // // // // console.log(fruit[3]);


// // // // // // console.log(fruit[0]);
// // // // // // console.log(fruit[fruit.length-1]);

// // // // // // console.log(fruit[1]);

// // // // // // console.log(fruit[1],fruit[fruit.length-3]);


// // // // // // fruit = ["banana", "apple", "orange", "graphs", "cherry", "guava", "giwi"];

// // // // // // //  2. object 

// // // // // // // syntex - {}

// // // // // // let fruitDetials = {
// // // // // //     yellowFruit : "banana",
// // // // // //     redFruit    : ["apple","cherry"],
// // // // // //     greenFruit  : ["graphs","guava","giwi"],
// // // // // //     orangeFruit : "orange"
// // // // // // }


// // // // // // console.log(fruitDetials);
// // // // // // console.log(fruitDetials.yellowFruit);
// // // // // // console.log(fruitDetials.orangeFruit);
// // // // // // console.log(fruitDetials.redFruit[1]);
// // // // // // console.log(fruitDetials.greenFruit[1]);

// // // // // // console.clear();


// // // // // // //  operator

// // // // // // // 1. Arithmetic operator

// // // // // // // addition    +

// // // // // // console.log(6 + 6);

// // // // // // // subraction  -

// // // // // // console.log(7 - 7);


// // // // // // // multiplication   *


// // // // // // console.log(7 * 5);


// // // // // // // division       /

// // // // // // console.log(70 /  7);


// // // // // // // modulus        %


// // // // // // console.log(4000 % 500);

// // // // // // console.clear();


// // // // // // // increament   ++   = +1

// // // // // // // pre inc   = ++var

// // // // // // // post inc  = var++


// // // // // // // decreament   --  = -1

// // // // // // // pre dec   = --var

// // // // // // // post dec  = var--


// // // // // // // example :


// // // // // // //  first type

// // // // // // let num1 = 2

// // // // // // num1++

// // // // // // console.log(num1);


// // // // // // // second type

// // // // // // // we are searching Element if find in variable side, that time you can calculate that value side till variable only.


// // // // // // let num2 = 2       // null

// // // // // //     num2 = num2--  // 1+2 = 3


// // // // // //     console.log(num2);


// // // // // // // theird type

// // // // // // // we are searching Element if find in value side, that time you can calculate value side full.


// // // // // // let num3 = 2    

// // // // // // let num4 = num3++ 

// // // // // // console.log("num3 :",num3); // 3
// // // // // // console.log("num4 :",num4); // 2


// // // // // // // example


// // // // // // let num5 = 3         
// // // // // // let num6 = ++num5    // ++num5 = 4 
// // // // // // let num7 = --num6    // --num6 = --4 = 3 


// // // // // // console.log("num5 :",num5);  // 4  3 4   final  =  4
// // // // // // console.log("num6 :",num6);  // 3  4 3   final  =  3
// // // // // // console.log("num7 :",num7);  // 2  3 3   final  =  3


// // // // // // //  Exponencial    **

// // // // // // console.log(3**3);  // 3^3 = 3*3*3 = 27

    


// // // // // // //  Assignment operator



// // // // // // let num8 = 20

// // // // // // let additionVal = 100

// // // // // //     // num8 = num8 + additionVal 

// // // // // //     num8 **= additionVal

// // // // // //     console.log(num8);

// // // // // // console.clear();

// // // // // // // 3. comparision operator


// // // // // // // meaning          operator          example            result


// // // // // // // lessThen            <                5 < 7                true

// // // // // // // greaterThen         >                5 > 7                false

// // // // // // // lessThenEq          <=               5 <= 5               true

// // // // // // // greaterThenEq       >=               10 >= 1              true

// // // // // // // loosyTypeEq         ==               5 == "5"             true

// // // // // // // loosyNotEq          !=               5 !="5"              false

// // // // // // // strictlyTypeEq      ===              5==="5"              false

// // // // // // // strictlyNotEq       !==              5!==5                false




// // // // // // console.log(10 < 20 ) // true

// // // // // // console.log(15 > 30 ) // false

// // // // // // console.log(25 <= 25 ) // true

// // // // // // console.log(40 >= 50 ) // false

// // // // // // console.log(7 == "7" ) // true

// // // // // // console.log( 9 != "9" ) // false

// // // // // // console.log(12 === "12" ) // false

// // // // // // console.log(8 !== 8 ) // false

// // // // // // console.log("10" > 5 ) // true

// // // // // // console.log(null == 0 ) // false



// // // // // // // 4. logical operator

// // // // // // // 3 type :- 


// // // // // // // 1 . AND  - &&


// // // // // // // true && true && true = true 
// // // // // // // true && false && true= false 


// // // // // // // 2 . OR   - ||

// // // // // // // true || true || true = true

// // // // // // // true || false || false = true


// // // // // // // 3 . Not  - !


// // // // // // // !(true) = false

// // // // // // // !(false) = true


// // // // // // // Example : - 


// // // // // // console.log("logical operator");


// // // // // // console.log(5 > 3 && 10 > 2);  

// // // // // // // true  && true = true

// // // // // // console.log(8 > 10 && 4 < 6); 

// // // // // // //   false   &&   true = false

// // // // // // console.log(7 < 9 || 2 > 5);

// // // // // // //    true  ||  false = true

// // // // // // console.log(3 > 6 || 1 < 4);

// // // // // // //  false || true = true  

// // // // // // console.log(!(5 > 2));

// // // // // // // !(true) = false

// // // // // // console.log(!(10 < 5));

// // // // // // // !(false) = true

// // // // // // console.log(6 >= 6 && 2 != 3);

// // // // // // // (true && true) = true

// // // // // // console.log(9 === 9 || 4 > 10);

// // // // // // //  true || false = true

// // // // // // console.log(!(7 <= 7));

// // // // // // // !(true) = false

// // // // // // console.log(2 < 1 || !(3 == 3));

// // // // // // // false || false = false


// // // // // // // 5. ternery operator


// // // // // // console.log("ternary operator");


// // // // // // // condition ? statement : statement ;


// // // // // // // example 

// // // // // // 5=="5" ? console.log("true") : console.log("false");


// // // // // // // password check


// // // // // // let pwd = false

// // // // // // pwd ? console.log("welcome home page") : console.log("incorrect password");


// // // // // // console.clear();




// // // // // // // concatination    - (+)


// // // // // // let str1 = "iron"
// // // // // // let str2 = "man"


// // // // // // console.log(str1+" "+"marvel"+" "+str2);


// // // // // // // Template string


// // // // // // console.log(`${str1} marvel ${str2}`);





// // // // // // // Type Conversion 

// // // // // // // 1. implicit type conversion 

// // // // // // // string 
// // // // // // // string anything string


// // // // // // console.log(typeof("hello" + "str"));
// // // // // // console.log(typeof("hello"+1));
// // // // // // console.log(typeof("hello"+true));
// // // // // // console.log(typeof("hello"+undefined));
// // // // // // console.log(typeof("hello"+null));

// // // // // // console.log(typeof("hello"+[1,2]));
// // // // // // console.log(typeof("hello"+{l:1}));

// // // // // // console.log("number :- ");

// // // // // // // number 

// // // // // // console.log(typeof(1 + "hello"));
// // // // // // console.log(typeof(1 + 1));
// // // // // // console.log(typeof(1 + true));
// // // // // // console.log(typeof(1 + undefined));
// // // // // // console.log(typeof(1 + null));

// // // // // // console.log(typeof(1 + [1,2]));
// // // // // // console.log(typeof(1 + {l:4}));

// // // // // // console.log("boolean :- ");

// // // // // // // boolean

// // // // // // console.log(typeof(true + "hello"));
// // // // // // console.log(typeof(true + 1));
// // // // // // console.log(typeof(true + true));
// // // // // // console.log(typeof(true + undefined));
// // // // // // console.log(typeof(false + null));

// // // // // // console.log(typeof(true + [1,2]));
// // // // // // console.log(typeof(true + {k:2}));

// // // // // // console.log("undefined :- ");

// // // // // // // undefined 

// // // // // // console.log(typeof(undefined + "hello"));
// // // // // // console.log(typeof(undefined + 1));
// // // // // // console.log(typeof(undefined + true));
// // // // // // console.log(typeof(undefined + undefined));
// // // // // // console.log(typeof(undefined + null));

// // // // // // console.log(typeof(undefined + [1,2]));
// // // // // // console.log(typeof(undefined + {i:9}));


// // // // // // console.log("null :-");

// // // // // // // null 

// // // // // // console.log(typeof(null + "hello"));
// // // // // // console.log(typeof(null + 1));
// // // // // // console.log(typeof(null + true));
// // // // // // console.log(typeof(null + undefined));
// // // // // // console.log(typeof(null + null));

// // // // // // console.log(typeof(null + [1,2]));
// // // // // // console.log(typeof(null + {k:2}));




// // // // // // console.clear();




// // // // // // // 2. explicit type conversion 

// // // // // // // constractor 
// // // // // // // numberConstractor - Number()


// // // // // // console.log(10 + Number("10"));

// // // // // // console.log(Number())
// // // // // // console.log(Number(""))
// // // // // // console.log(Number("123"))
// // // // // // console.log(Number("abc"))
// // // // // // console.log(Number(123))
// // // // // // console.log(Number(-1))
// // // // // // console.log(Number(true))
// // // // // // console.log(Number(false))
// // // // // // console.log(Number(undefined))
// // // // // // console.log(Number(null))
// // // // // // console.log(Number([1,"a"]))
// // // // // // console.log(Number({k:2}))


// // // // // // // boolean - Boolean()


// // // // // // console.log(Boolean());
// // // // // // console.log(Boolean(""));
// // // // // // console.log(Boolean("123"));
// // // // // // console.log(Boolean("abc"));
// // // // // // console.log(Boolean(123));
// // // // // // console.log(Boolean(0));
// // // // // // console.log(Boolean(-1));
// // // // // // console.log(Boolean(true));
// // // // // // console.log(Boolean(false));
// // // // // // console.log(Boolean(undefined));
// // // // // // console.log(Boolean(null));
// // // // // // console.log(Boolean([1,"false"]));
// // // // // // console.log(Boolean({k:2}));


// // // // // // console.clear();


// // // // // // // flow control statement 

// // // // // // // conditional statement

// // // // // // // if stament 

// // // // // // // syntex :

// // // // // // // if(condition){statement}

// // // // // // // if true = allow


// // // // // // if(5=="5"){

// // // // // //     console.log("check true");
    
// // // // // // }

// // // // // // console.log("hai");



// // // // // // // if else statement


// // // // // // // syntex :- 

// // // // // // // if(condtion){statment}else{statement}

// // // // // // // if true = allow , false else = allow


// // // // // // if(0){
// // // // // //     console.log("true");
  
// // // // // // }else{
// // // // // //     console.log("false");   
// // // // // // }


// // // // // // // else if statment

// // // // // // let hour = 15

// // // // // // if(hour >= 1 && hour <= 6){
// // // // // //     console.log("good moning");
    
// // // // // // }else if(hour >= 7 && hour <= 12){
// // // // // //     console.log("morning");
    
// // // // // // }else if(hour >= 13 && hour <= 16 ){
// // // // // //     console.log("good afternoon");
    
// // // // // // }else if(hour >= 17 && hour <= 20){

// // // // // //     console.log("good evening");
    

// // // // // // }else if(hour >=21 && hour <= 24){
// // // // // //     console.log("good night");
    
// // // // // // }else{
// // // // // //     console.log("invalid time");
    
// // // // // // }


// // // // // // console.clear();

// // // // // // // nested if statement
// // // // // // // nest


// // // // // // // let age = prompt("enter your age :-")
// // // // // // // let height = prompt("enter your height (cm)")
// // // // // // // let weight =prompt("enter your weight")


// // // // // // // if(age >= 20){
// // // // // // //     if(height >= 170){
// // // // // // //         if(weight >= 70){
// // // // // // //             alert("congadulation your selected ⭐⭐⭐"); win + >
            
// // // // // // //         }else{
// // // // // // //             alert("your weight is not sufficiant");
            
// // // // // // //         }

// // // // // // //     }else{
// // // // // // //         alert("your height is not sufficiant");
        
// // // // // // //     }

// // // // // // // }else{
// // // // // // //     alert("your age is not sufficiant");
    
// // // // // // // }


// // // // // // // switch statement

// // // // // // // switch (condition) {
// // // // // // //     case value: statement
        
// // // // // // //         break;

// // // // // // //     default: statement
// // // // // // //         break;
// // // // // // // }



// // // // // // let trafficSignal = "yellow"

// // // // // // switch(trafficSignal){
// // // // // //     case "red" : console.log("vechile stop"); break
// // // // // //     case "yellow" : console.log("vechile start"); break
// // // // // //     case "green" : console.log("vechile go"); break

// // // // // //     default : console.log("have nice day");
    
    
    
    
// // // // // // }



// // // // // // // looping statement 

// // // // // // console.log(1);
// // // // // // console.log(2);
// // // // // // console.log(3);
// // // // // // console.log(4);
// // // // // // console.log(5);


// // // // // // // for loop

// // // // // // // for(intialization; condition ; iteration){
// // // // // // //     statement
// // // // // // // }

// // // // // // for(let a = 1; a <= 3 ; a++){

// // // // // //     console.log(a); // 1 2 3
    

// // // // // // }

// // // // // // // let a = 1 ; 1<=3 = true ; 1++ = 2
// // // // // // // let a = 2 ; 2<=3 = true ; 2++ = 3
// // // // // // // let a = 3 ; 3<=3 = true ; 3++ = 4
// // // // // // // let a = 4 ; 4<=3 = false.

// // // // // // // while loop

// // // // // // // intialization
// // // // // // // while(condition){
// // // // // // // statement
// // // // // // // iteration
// // // // // // // }
// // // // // // console.log("while loop :- ");

// // // // // // let val = 3
// // // // // // while(val >= 10){

// // // // // //     console.log(val);

// // // // // //     val--
    

// // // // // // }

// // // // // // // 3  , 3>=0 = true , c = 3 , 3-- = 2
// // // // // // // 2  , 2>=0 = true , c = 2 , 2-- = 1
// // // // // // // 1  , 1>=0 = true , c = 1 , 1-- = 0
// // // // // // // 0  , 0>=0 = true , c = 0 , 0-- = -1
// // // // // // // -1 , -1>=0 = false .



// // // // // // // do while loop


// // // // // // // syntex :- 

// // // // // // // intialization 
// // // // // // // do{
// // // // // // //     statement
// // // // // // //     iteration
// // // // // // // }
// // // // // // // while(condition)

// // // // // // let val1 = 3

// // // // // // do{
// // // // // //     console.log(val1);
// // // // // //     val1--
    
// // // // // // }
// // // // // // while(val1>=0)

// // // // // // console.log("for of loop :- ");



// // // // // // // for of loop - string , array , function

// // // // // // let str = "javascript"



// // // // // // // for(declration of str ){
// // // // // // //     console.log(declration);
    
// // // // // // // }

// // // // // // for(let a of str){
// // // // // //     console.log(a);
    
// // // // // // }

// // // // // // str = "javascript";

// // // // // // for (let a = 0; a < str.length; a++) {
// // // // // //   console.log(str[a]);
// // // // // // }













// // // // // // let arr = [1,2,3,4,5,6]


// // // // // // for(let b of arr){
// // // // // //     console.log(b);
    
// // // // // // }



// // // // // // // for in loop - object

// // // // // // let obj = {
// // // // // //     name1 : "john",
// // // // // //     role  : "developer",
// // // // // //     salary : 400000
// // // // // // }


// // // // // // for(let c in obj){
// // // // // //     console.log(obj[c]);
    
// // // // // // }


// // // // // // console.log(str + 10);

// // // // // // // str10


// // // // // // console.clear();








// // // // // // //  3. function 


// // // // // // perform particular task

// // // // // // reusable code 

// // // // // // block of code 

// // // // // // return value

// // // // // // easily debug


// // // // // // syntex : - 

// // // // // // function one(parameter){
// // // // // //     statement 
// // // // // //     return
// // // // // //     yield
// // // // // // }

// // // // // // one(argument)


// // // // // // example :- 

// // // // // function one(){
// // // // //     console.log("batch 31");
    
// // // // // }


// // // // // one()

// // // // // function button1(){
// // // // //     console.log("hello world");
    
// // // // // }

// // // // // function button2(){
// // // // //     console.log("hai , how are you !");
    
// // // // // }

// // // // // button1()

// // // // // button2()




// // // // // // parameter and argument


// // // // // function two(a,b,c){
// // // // //     console.log(a);
// // // // //     console.log(b);
// // // // //     console.log(c);
    
// // // // // }

// // // // // two("hello","hai","how")


// // // // // // example :-  reuse code


// // // // // function form(name,department,cgpa){
// // // // //     console.log("name :-",name );
// // // // //     console.log("department :-",department );
// // // // //     console.log("cgpa :-",cgpa );
    
// // // // // }

// // // // // form("vivith","ece",9)
// // // // // form("nitish","AI",8)


// // // // // // block of code 


// // // // // function block(){
// // // // //     console.log("welcome javascript");

// // // // //     if(true){
// // // // //         console.log("hi");
        
// // // // //     }

// // // // //     for(let i= 1 ; i <= 5; i++){
// // // // //         console.log(i);
        
// // // // //     }
    
// // // // // }

// // // // // block()



// // // // // // return 


// // // // // function val(){
// // // // //     return("hi");
    
// // // // // }


// // // // // let newVal = val()

// // // // // console.log(newVal);


// // // // // function random(){
// // // // //     console.log(newVal);
    
// // // // // }

// // // // // random()


// // // // // let obj = {
// // // // //     name1: "sai",
// // // // //     role : "developer"
// // // // // }

// // // // // function accessOuter(){

// // // // //     console.log(obj.role);
// // // // //     console.log(obj.name1);
    

// // // // // }


// // // // // accessOuter()


// // // // // console.clear();



















// // // // // // Scope

// // // // // function scopesCheck(){
// // // // //     if(5){

// // // // //         var h1 = "var is global scope"
// // // // //         let h2 = "let is block scope"
// // // // //         const h3 = "const is block scope"

// // // // //         console.log(h2);
// // // // //         console.log(h3);
// // // // //     }

// // // // //     console.log(h1)  ;
    
    
    
// // // // // }

// // // // // scopesCheck()


// // // // // // hoisting 

// // // // // console.log(a1);
// // // // // var a1 = "hello"



// // // // // let a2 = "welcome"

// // // // // console.log(a2);


// // // // // const a3 = "namaste"
// // // // // console.log(a3);


// // // // // // types of function

// // // // // // named function 
// // // // // named("named function")

// // // // // function named(parameter){
// // // // //     console.log(parameter);
    
// // // // // }


// // // // // // annonymous function

// // // // // var annonymous = function(parameter){
// // // // //     console.log(parameter);
    
// // // // // }

// // // // // annonymous("annonymous function")

// // // // // // arrow function

// // // // // var arrow = (parameter)=>{
// // // // //     console.log(parameter);
    
// // // // // }
// // // // // arrow("Arrow function")


// // // // // console.clear();


// // // // // // higher order function and callback function 


// // // // // let addidas= function(){

// // // // //     console.log("higher order function")
    
// // // // // }

// // // // // let nike = function(){

// // // // //     console.log("callback fundtion");
    
// // // // // }

// // // // // addidas(nike())


// // // // // // example :- 


// // // // // let add = (callback,a,b)=>{ // callback = sub , a = 20 , b = 40

// // // // //     console.log(a+b);   // 60    
// // // // //     callback(20,20)     // sub(20,20)       
// // // // // }



// // // // // let sub = (n1,n2)=>{ 
// // // // //     console.log(n1 - n2); 
    
// // // // // }



// // // // // add(sub,20,40) // -20 , -40, 0 , 20


// // // // // IIFE function :- 

// // // // // syntex :- 

// // // // // (function(shirt){

// // // // //     alert(`offers going on shirt ${shirt} rs price only.`)
    

// // // // // })(500)


// // // // // generator function 


// // // // function* gen(){
// // // //     yield "10% cashback"
// // // //     yield "20% cashback"
// // // //     yield "100% cashback"
// // // //     yield "better luck next time"
// // // //     yield "10% cashback"
// // // //     yield "100% cashback"
// // // // }


// // // // let allVal = gen()

// // // // console.log(allVal.next().value);
// // // // console.log(allVal.next().value);
// // // // console.log(allVal.next());
// // // // console.log(allVal.next());
// // // // console.log(allVal.next());
// // // // console.log(allVal.next());


// // // // if(allVal.next().done){

// // // //     console.log("the value full completed try again");
    
// // // // }


// // // // console.clear();


// // // // function clgForm(name1,age,department,disability="no"){

// // // //     console.log("name :- ", name1);
// // // //     console.log("age :- ", age);
// // // //     console.log("department :- ", department);
// // // //     console.log("disability :- ", disability);
    

// // // // }

// // // // clgForm("kamal",23,"ece")
// // // // clgForm("praveen",23,"ece","yes")




// // // // // uncurrying Stracture


// // // // function a(a){
// // // //     return function b(b){
// // // //         return function c(c){
// // // //             console.log(a+b+c);
            
// // // //         }
// // // //     }
// // // // }

// // // // a(10)(20)(30)



// // // // // Data Stracture 


// // // // // ECMA Script - ES6 edition - 2015

// // // // // Spread operator

// // // // // array spread operator

// // // // // syntex = [...]

// // // // // we can merge two array , clone

// // // // // example :-


// // // // let array1 = [1,2,3,4]
// // // // let array2 = [5,6,7,8]

// // // // let finalArray = [...array1,...array2]

// // // // console.log(finalArray);


// // // // let boyToy1 = ["car","helicopter","aeroplane"]

// // // // let girlToy2 = ["doll","teddy","cat"]


// // // // let shop = [...boyToy1,...girlToy2,"rc car"]


// // // // console.log(shop);



// // // // // object spread operator

// // // // // syntex - {...}

// // // // // we can merge the value , clone

// // // // // example :- 


// // // // let emp1 = {
// // // //     name1:"john",
// // // //     role :"developer",
// // // //     salary:200000
// // // // }

// // // // let emp2 = {
// // // //     name11 :"paul",
// // // //     role1 : "tester",
// // // //     salary1 : 100000
// // // // }

// // // // let totalEmp = {...emp1,...emp2,date : "27"}

// // // // console.log(totalEmp);




// // // // // rest operator 


// // // // // function

// // // // // syntex - (...)

// // // // // we can store n number of argument in single parameter

// // // // // example 


// // // // function memory(a,b,...c){
// // // //     console.log(a);
// // // //     console.log(b);

// // // //     console.log(c[0]);
// // // //     console.log(c[1]);
    
    
    
// // // // }

// // // // memory(1,2,3,4,5,6,7,8,9,10)





// // // // // destracture

// // // // // array 

// // // // let arr1 = [1,2,3,4]

// // // // let d1 = arr1[0]
// // // // let d2 = arr1[1]
// // // // let d3 = arr1[2]
// // // // let d4 = arr1[3]

// // // // console.log(d1+d1+d2+d1+d3);

// // // // // deStracture Array

// // // // let [g1,g2,g3,g4] = arr1

// // // // console.log(g1+g1+g2+g1+g3);

// // // // // object deStracture

// // // // let objVal = {
// // // //     empName : "kamal",
// // // //     age     : 23,
// // // //     role    : "senior",
// // // //     salary  : "3lpa"
// // // // }


// // // // let h1 = objVal.empName
// // // // let h2 = objVal.age
// // // // let h3 = objVal.role
// // // // let h4 = objVal.salary


// // // // console.log(h1,h2,h4,h1);

// // // // // deStracture

// // // // let {empName,age,role,salary} = objVal

// // // // console.log(empName,age,empName,role);




// // // // // nested 

// // // // let nested = [1,2,3,[4,5,[6,[7]]]]

// // // // let k1 = nested[0]
// // // // let k2 = nested[1]
// // // // let k3 = nested[2]
// // // // let k4 = nested[3][0]
// // // // let k5 = nested[3][1]
// // // // let k6 = nested[3][2][0]
// // // // let k7 = nested[3][2][1][0]

// // // // console.log(k1,k2,k3,k4,k5,k6,k7);


// // // // // destracture 

// // // // let [l1,l2,l3,[l4,l5,[l6,[l7]]]] = nested

// // // // console.log(l1,l2,l3,l4,l5,l6,l7);


// // // // console.clear();


// // // // // Array advance concept


// // // let a = [1,2,3,4,5,6,7,8,9,"hello",true,undefined,null,[1,2],{k:1}]



// // // console.log(a);
// // // console.log(a[0]);
// // // console.log(a[a.length-1]);



// // // // advance 


// // // // homogenious


// // // // hetrogenious


// // // // flexible 

// // // console.clear();



// // // // condition : - 

// // // //   1. add --> you can add multiple value.

// // // //   2. remove --> you can remove only one value.


// // // // array manipulation method :-

// // // let arr = [1,2,3,4]
// // // // 1. pop()    --> we can remove array last value

// // // arr.pop()

// // // // 2. push()   --> we can add array last value

// // // arr.push(4,5,6,7,8)

// // // // 3. unshift() -> we can add array first value

// // // arr.unshift(-1,0)

// // // // 4. shift()  --> we can remove array first value

// // // arr.shift()

// // // // 5. splice() --> we can add and remove whatever place in array

// // // // splice(starting Index , DeleteCount , add val)

// // // arr.splice(3,3,30,40,50)


// // // console.log(arr);



// // // // Array merge method : - 



// // // //  concat(),

// // // let arr1 = [1,2,3,4]
// // // let arr2 = [5,6,7,8]


// // // let totalArr = arr1.concat(arr2)
// // // let total    = [...arr1,...arr2]

// // // console.log(totalArr);


// // // //  slice(),

// // // let arr3 = [1,2,3,4,54,67,78,8,9,10]

// // // let sliceVal = arr3.slice(4,7) // sI  , eI + 1

// // // console.log(sliceVal);

// // // //  flat(),

// // // let arr4 = [1,2,3,[4,5,[6,7,[8]]]]

// // // let flatVal = arr4.flat(Infinity)

// // // console.log(flatVal);

// // // //  fill,

// // // let h = [1,2,3,4]  

// // // h.fill("two",1,2)  // value , Si , Ei + 1

// // // console.log(h);



// // // //  includes,

// // // let g  = [1,2,3,406,500,"hi"]

// // // let incluesVal = g.includes("h")

// // // console.log(incluesVal);




// // // //  reverse

// // // // let deccending = accend.reverse()

// // // // console.log(deccending);

// // // //  sort(),

// // // let random = [1,5000,32,71,20000,8,0]

// // // let accend = random.sort()

// // // console.log(accend);


// // // let sample = [6,9,3,6,4,7]

// // // console.log(sample.reverse());


// // // //  indexOf,

// // // let sample1 = [1,2,3,4,3,2,1]


// // // let index = sample1.indexOf(2,3) // value , fromIndex

// // // console.log(index);


// // // //  lastIndexOf,

// // // let lastIndex = sample1.lastIndexOf(1,5)


// // // console.log(lastIndex);


// // // console.clear();



// // // // Array higher order method :- 


// // // // function fun1(){
// // // //     console.log("hi");
    
// // // // }

// // // // function fun2(){
// // // //     console.log("hello");
    
// // // // }

// // // // fun1(fun2())


// // // let games = ["cricket","hockey","kabaddi","chess"]

// // // // forEach()


// // // let newForEach = games.forEach((currentElement,index,totalArray)=>{

// // //     return(currentElement);
  
    
// // // })


// // // console.log(newForEach);




// // // // map()

// // // let newmap = games.map((c,i,t)=>{

// // //     return(c);
   
// // // })

// // // console.log(newmap);


// // // let emp = [
// // //     {empName : "bharath",salary : 100000 },
// // //     {empName : "kushal",salary : 200000 },
// // //     {empName : "vivith",salary : 500000 },
// // //     {empName : "nithish",salary : 700000 },
// // //     {empName : "nithya",salary : 800000 },
// // //     {empName : "rishika",salary : 900000 },
// // // ]

// // // console.log(emp);


// // // // filter()

// // // let checkSalary = emp.filter((c,i,t)=>{

// // //     return c.salary < 500000

// // // })

// // // console.log(checkSalary);


// // // // find()

// // // let firstGotSalary = emp.find((c,i,t)=>{

// // //     return c.salary > 500000

// // // })

// // // console.log(firstGotSalary);




// // // emp = [
// // //   { empName: "bharath", salary: 100000 },
// // //   { empName: "kushal", salary: 200000 },
// // //   { empName: "vivith", salary: 500000 },
// // //   { empName: "nithish", salary: 700000 },
// // //   { empName: "nithya", salary: 800000 },
// // //   { empName: "rishika", salary: 900000 },
// // // ];

// // // // reduce()

// // // let calcAllSalary = emp.reduce((acc,c,i,t)=>{
// // //     return acc + c.salary

// // //     //     0 + 1 = 1
// // //     //     1 + 2 = 3 
// // //     //     3 + 5 = 8
// // //     //     8 + 7 = 15
// // //     //     15+ 8 = 23
// // //     //     23+ 9 = 32

// // //     // return 32 + null

// // // },0) // 1 // 3 // 8 // 15 // 23 // 32

// // // console.log(calcAllSalary);



// // // // some() - or 

// // // let sample2 = [1,2,3,4]

// // // let someVal = sample2.some((c,i,t)=>{
// // //     return c%2==1

// // //     //     1 % 2 == 1      true
// // //     //     2 % 2 == 1      false
// // //     //     3 % 2 == 1      true
// // //     //     4 % 2 == 1      false

// // //     // true || false || true || false = true 
// // // })

// // // console.log(someVal);


// // // // every() - and


// // // let sample3 = [2,2,2,8,50]

// // // let everyVal = sample3.every((a,b,c)=>{

// // // return a % 2 == 0

// // // })

// // // console.log(everyVal);



// // // // sort()


// // // let sample4 = [1,2,5,6,34,54,32,21,0]


// // // // 2 5 6 34 54 32 21 1 0 

// // // // 5 6 34 54 32 21 2 1 0

// // // // 6 34 54 32 21 5 2 1 0

// // // // 34 54 32 21 6 5 2 1 0

// // // // 54 34 32 21 6 5 2 1 0 

// // // console.log(sample4.sort());


// // // let sortVal = sample4.sort((a,b)=>{
// // //    return b-a
// // // })

// // // console.log(sortVal);


// // // // arr to str 


// // // // join()

// // // let sample5 = [1,2,3,4]

// // // console.log(sample5.join("jhgk"));


// // // // toString()

// // // console.log(sample5.toString());


// // // console.clear();



// // // // String Advance concept



// // // let str = "javascript"

// // // //   charAt(),  index --> character

// // // console.log(str.charAt(1));


// // // //   charCodeAt(), index --> asscii value


// // // console.log(str.charCodeAt(1));



// // // //   length,

// // // console.log(str.length);




// // // //   slice, (si , ei + 1)  --> perticular value

// // // str = "javaSCript";

// // // console.log(str.slice(2,5));



// // // //   toUpperCase(),

// // // console.log(str.toUpperCase());

// // // str = "javaSCript";
// // // //   toLowerCase(),

// // // console.log(str.toLowerCase());


// // // //   trim(),

// // // let str1 = " hello world "

// // // console.log(str1.trim());

// // // //  trimStart()

// // // console.log(str1.trimStart());


// // // //  trimEnd()

// // // console.log(str1.trimEnd());




// // // //   includes(),

// // // let str2 = "batch31"

// // // console.log(str2.includes("34"));


// // // // startsWith()

// // // console.log(str2.startsWith("b"));

// // // // endsWith()

// // // console.log(str2.endsWith("1"));



// // // //   indexOf(),

// // // let str4 = "helloworld"

// // // let front = str4.indexOf("l",4)

// // // console.log(front);

// // // // lastIndexOf


// // // let back = str4.lastIndexOf("l",7)

// // // console.log(back);





// // // //   replace(),

// // // let str6 = "python developer"

// // // console.log(str6.replace("python","javascript"));


// // // // repeat()


// // // let str7 = "hello"

// // // console.log(str7.repeat(1));




// // // //   split(),

// // // let str8 = "spider-man"

// // // console.log(str8.split("-"));



// // // console.clear();












// // // // // // //  4. date


// // // Date()

// // let a = new Date()

// // console.log(a);


// // // get

// // // year

// // console.log(a.getFullYear());

// // // month

// // console.log(a.getMonth());

// // // date

// // console.log(a.getDate());

// // // day

// // console.log(a.getDay());

// // // hours

// // console.log(a.getHours());

// // // minutes 

// // console.log(a.getMinutes());

// // // seconds 

// // console.log(a.getSeconds());


// // // local data 


// // // local time 


// // console.log(a.toLocaleTimeString());

// // // local date 

// // console.log(a.toLocaleDateString());

// // // both 

// // console.log(a.toLocaleString());
// // console.clear();


// // // set 

// // let a1 = new Date()

// // a1.setFullYear(2025)

// // console.log(a1);


// // a1.setMonth(0)

// // console.log(a1);

// // a1.setDate(30)

// // console.log(a1);

// // // time 

// // a1.setHours(18)

// // console.log(a1);


// // a1.setMinutes(18)

// // console.log(a1);

// // a1.setSeconds(18)

// // console.log(a1);

// // console.clear();


// // // Birth day (day) finder

// // // let year  = prompt("enter your dob year")
// // // let month = prompt("enter your dob month")
// // // let date  =prompt("enter your dob date")


// // // let birth = new Date()

// // // birth.setFullYear(year)
// // // birth.setMonth(month-1)
// // // birth.setDate(date)

// // // console.log(birth);

// // // let day = birth.getDay()
// // // // let dayData = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

// // // // alert(dayData[day]);




// // // // // Async

// // // // // setTimeOut()
// // // // // setIntrval()


// // // // setTimeout(()=>{

// // // //     console.log("hi");
    

// // // // },5000)


// // // // console.log("hello");

// // // // console.log("welcome");

// // // // let a2 = setInterval(()=>{

// // // //     console.log("hello guys");
    

// // // // },2000)

// // // // setTimeout(()=>{

// // // //     clearInterval(a2)

// // // // },20000)



// // // setTimeout(()=>{
// // //     console.log("hi");
    
// // // },2000)


// // // // Promise 

// // // // resolve state   - successful state  - then()

// // // // reject state    - error state       - catch()

// // // // bending state   - coming state      - finally()




// // // // API - Application programmable Interface


// // // let api ="https://fakestoreapi.com/products/"


// // // // Fetch(API LINK)


// // // fetch(api)
// // // .then((data)=>{

// // //     // convert json to js -- > .json() , js to json --> .stringify()

// // //     return data.json()  

// // // })
// // // .then((jsData)=>{

// // //    let priceTen = jsData.filter((c,i,t)=>{

// // //     return c.price === 9.99
    

// // //    })

// // //    console.log(priceTen);
   
    

// // // })

// // // .catch((error)=>{

// // //     console.warn(error);
    

// // // })
// // // .finally((h)=>{

// // //     console.log(h);
    

// // // })




// // // console.log("welcome");




// // //  DOM - Document Object Model


// // // selecting method 

// // // tagName 

// // // getElementByTagnames

// // let tag = document.getElementsByTagName("h1")

// // console.log(tag);



// // // getElementByClassName

// // let className = document.getElementsByClassName("one")

// // console.log(className);

// // // getElementById

// // let idName = document.getElementById("two")

// // console.log(idName);


// // // querySelector


// // // tagName 

// // let tag1 = document.querySelector("h2")

// // console.log(tag1);

// // // className 

// // let class1 = document.querySelector(".one1")

// // console.log(class1);

// // // idName 

// // let id1 = document.querySelector("#one2")

// // console.log(id1);

// // // querySelectorAll

// // let allH3 = document.querySelectorAll("h3")

// // console.log(allH3);









// // // traversing method 


// // // parent select method


// let child1 = document.querySelector(".child1")

// console.log(child1);

// console.log(child1.parentElement); // parentElement




// // // child select method

// let parent = document.querySelector(".parent")

// console.log(parent);
// console.log(parent.firstElementChild); // firstElementChild
// console.log(parent.lastElementChild);  // lastElementChild
// console.log(parent.children); // children



// // // sibling select method

// let child2 = document.querySelector(".child2")

// console.log(child2);
// let child3 = (child2.nextElementSibling); // nextElementSibling

// console.log(child3.nextElementSibling);

// console.log(child2.previousElementSibling); // previousElementSibling







// // // manipulating method


// if you want to input tag inside value manipulate  : - (value)

// if you want to other tag inside value manipulate  : - (innerText,textContent,innerHTML)



// input tag :- value

let input = document.querySelector("input")

input.value = "hello"


// other tag : - 1. innerText , 2. textContent , 3. innerHTML

let h2 = document.querySelector("h2")

h2.innerText = "Document object model"

let p = document.querySelector("p")

p.textContent = "Dom is we can manipulate html content using javascript"

let list = document.querySelector("ol > li")

list.innerHTML = `<h1>banana</h1> <h2>apple</h2> <img src="" alt = "marvel"/>`


// EventHandler 

function clk(){
    let one = document.querySelector(".one")
    one.innerText = "hi team, Good morning"
}

function clk1(){
    
}




// EventListner

let two = document.querySelector(".two")
let btn = document.querySelector(".btn")
let one1 = document.querySelector(".one1");



btn.addEventListener("click",()=>{

    two.innerText = "Batch 31 , complete soon !!!"

})

btn.addEventListener("click",()=>{
    one1.innerText = "hello everyone"
})




// add css using js

let first = document.querySelector(".first")

first.style.color = "red"
// first.style.fontSize = "50px"



// create new tag 

let ol = document.querySelector(".ol")

let li = document.createElement("li")

li.innerText = "hello"



// append

ol.append(li)

// setAttributes

let h3 = document.querySelector("h3")

h3.setAttribute("class","active")


// remove

h3.remove()



let demo = document.querySelector("#demo")

console.log(demo.textContent);
console.log(demo.innerText);




















