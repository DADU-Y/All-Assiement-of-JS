// Chapter 1 (Alerts)
// QUESTION NO 1?
// 1. Alert these following (individually):
// I. First Name
// II. Last Name
// III. Email
// IV. Phone Number V. Password

// ANSWER

// FIRST NAME

alert("YAMEEN");

// LAST NAME

alert("DADU");

// EMAIL

alert("yameen54@gmail.com");

// PHONE NUMBER

alert(9213740139837);

// PHONE NUMBER

alert("03128714639");

// PASSWORD

alert("dadu1234!@#$");

// QUESTION NO 2?

// 2. Correct this statement alert"Your learning JavaScript" ;

// ANSWER

alert("your learning JavaScript");

// QUESTION NO 3?

// 3. Code an alert statement displaying any message you like.

// ANSWER

alert("welcome user");

// Chapter 2 (Variables for string)

// QUESTION 1?

// 1. Declare any variable in the camel Case format.

// ANSWER

var myName = "Yameen";

var thisIsBigNumber = 1000;

// QUESTION 2?

// 2. Declare a variable of your choice without defining it. Then, in a second statement, assign it a string of your choice.

// ANSWER

var va = 56;

alert(va);

// QUESTION 3?

// 3. Declare the variable teamName and Alert your Team name.

// ANSWER

var daduTeam = "best web";

alert(daduTeam);

// QUESTION 4?

// 4. This statement has already been coded. var bestMan = "carlie"; Assign the variable a new string.

// ANSWER

var bestMan = "Charlie";

var bestMan = 40;

alert(bestMan);

// Chapter 3 (Variables for numbers)

// QUESTION 1,2

// 1. Declare a variable “caseQty”

// 2. Assign to the variable caseQty, which has already been declared,the value 144.

var caseQty = 144;

alert(caseQty);


// QUESTION 3

// 3. Rewrite this statement so the variable can be used in a math operation. var num = 9;

var num = 9;

// QUESTION 4

// In one statement declare a variable. In a second statement assignit the sum of 2 numbers.

// ANSWER

var sum;
sum = 2;

alert(sum + 3);

// QUESTION 5

// 5. What is the value of orderTotal?
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge; Try
// it yourself.

// ANSWER

var merchTotal = 100;
var shippingCharge =10;

var orderTotal =  merchTotal + shippingCharge;

alert(orderTotal);

// QUESTION 6

// 6. In the first statement declare a variable and assign it a number. In
// the second statement, change the value of the variable by adding
// it together with a number.

// ANSWER

var a = 10;
alert(a + 2);

// end ch 1 to 3  work 1

// start alert ch 1 work 2

// 1. Write a script to greet your website visitor using JS alert box.

alert("welcome user");

// 2. Write a script to display following message on your web page:

alert("Errore! Enter a Valid Password");

// 3. Write a script to display following message on your web page: (Hint : Use line break)

alert("welcome js land \n happy coding");

// 4. Write a script to display following messages in sequence:

alert("popop one");

alert("popop two");

// 5. Generate the following message through browser’s developer console:

console.log("Hello i m yameen");

// q6 q7 done


// end ch 1 alert

// start ch2 variables for strings

// 1. Declare a variable called username.

var username;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.

var myname = "MUHAMMAD YAMEEN DADU";

// Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

var message;

message = "Hello World";

alert(message);

// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

var studentName = "yameen";

var studentAge = 15;

var studentDegree = "NO DEGREE" ;

alert(studentName);

alert(studentAge);

alert(studentDegree);

// 5. Write a script to display the following alert using one JS variable:

alert("PIZZA \n PIZZ \n PIZ \n PI \n P");

// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

var email = "yameen56@gmail.com";

alert("My Email Address is " + email);

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

var book = "A smarter way to learn JavaScript";

alert("I m Learn book " + book);

// 8. Write a script to display this in browser through JS

document.write("Yah! I can Write html contant through JS");

// 9. Store following string in a variable and show in alert and browser through JS

alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");

// end ch 2 variable for strings

// start ch 3 variable for number

// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

var age = 15;

alert(age);

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

var visited = 19;

alert(visited);

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

var birthYear = 2009;

document.write("My birthyear is" , birthYear , "data type of my declared variable number");

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitorName = "yameen";
var productName = "T-Shirt";
var quantity = 5;

document.write(visitorName);

document.write(productName);

document.write(quantity);

// end ch 3 variables for Number

// start ch 4 VARIABLE NAMES: Legal & Illegal

// QUESTION 1

// 1. Declare 3 variables in one statement.

var a , b , c;

// QUESTION 2

// 2. Declare 5 legal & 5 illegal variable names.

// legal

var yameen = 4;

var _yameen = 5;

var $yameen = 5;

var yameen879 = 5;

var yam343een = 5;

// illega

// var var = 5;

// var yame en = 5;

// var 23yameen = 5;

// var %yameen = 5;

// var yameen@ = 5;

// QUESTION 3

// 3. Display this in your browser

document.write("<h1>Rules for naming JS variables</h1>")

document.write("Variable names can only contain Number, $,letter and _.")

document.write("Variables must begin with a letter, $ or_. For example $name, _name or name")

document.write("Variable names are case sensitive")

document.write("Variable names should not be JS keyword")