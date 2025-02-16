//  ch 6 to 9

// Chapter 6 (Math Expression II)

// 1. Code a short form of x = x + 1; Use either of the two legal
// expressions.

var x = 5;

var a = x++;

// 2. If x has a value of 100, what is the fastest way to reduce it to 99
// with a math expression?

var x = 100;

alert(--x);

// 3. var x = 50; var y = x++;
// What is the value of y?

// y value is 50

// 4. var y = 50; var z = --y;
// What is the value of z?

// z value is 49

// 5. In a single statement, decrement num and assign its original value
// to newNum.

var num = 5;

var newNum = num--;

alert(newNum);

// 6. In a single statement add 1 to a variable and assign its original
// value to another variable.

var a = 1;

var b = a;

alert(b)

// 7. Assign a number value to a variable. Increment the variable.
// Display the new value in an alert

var a = 5;

var b = ++a;

alert(7);

// end ch 6

// Chapter 7 (Math Expression III)

// 1. var calculatedNum = 2 + (2 * 6); What
// is the value of calculatedNum?

// 14 is answer

// 2. var calculatedNum = (2 + 2) * 6; What is the
// value of calculatedNum?

// 24 is answer

// 3. var calculatedNum = (2 + 2) * (4 + 2);
// What is the value of calculatedNum?

// 24 is answer

// 4. var calculatedNum = ((2 + 2) * 4) + 2;
// What is the value of calculatedNum?

// 18 is answer

// q5,6,7 is done

// ch 7 end

// Chapter 8 (Concatenating Text Strings)

// 1. var num = "2" + "2" ; What is the value of num? Include quotation marks.

// 22 is answer

// 2. message = (&quot;Hello,&quot; + &quot;Dolly&quot;);
// What is the value of message? (Include the quotation marks.)
// Alert the statement

// Hello,Dolly is answer

// 3. alert(&quot;33&quot; + 3);
// What message displays in the alert box?

// 333 is answer

// 4. Write an alert that displays the concatenation of the two parts of
// &quot;Pakistan Zindabad&quot;.

alert("PAKISTAN" + " " + "ZINDABAD");

// 5. Write a statement that assigns to a variable the concatenation of
// a string with a number

alert(9 + "yameen");

// 6. Assign strings to two variables. Then concatenate them and assign
// the result to a third variable.

var firstName = "yameen";

var lastName = "dadu";

var fullName = "firstName + lastName";

alert(fullName);

// end 8 ch

// Chapter 9 (Prompts)

// 1. Code a prompt with the message &quot;Enter first name&quot;. The user&#39;s
// response is assigned to firstName.

prompt("ENTER FIRST NAME");

// 2. Code a prompt with the message &quot;Country?&quot; and the default
// answer &quot;China&quot;. The user&#39;s response is assigned to country.

prompt("Country" , "China");

// 3. Correct this statement var yourName = prompt(Enter Your
//     Name&quot;);

var yourName = prompt("Enter Your Name");

// 4. Code a prompt that specifies a string as the message Include a
// default input.

prompt("Country" , "China");

// 5. Assign strings to two variables. Code a prompt specifying the first
// variable as the message and the second variable as the default
// response. Assign the user&#39;s response to a third variable.

var a = "country";

var b = "China";

prompt("a" , "b");

// 6. Display a prompt, including both a message and a default
// response.
// Display the user&#39;s response in an alert.

var message = prompt("both" , "response");

alert(message);

// end assiement

// start ch 5 MATH EXPRESSIONS

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

var a = 5;

var b = 6;

document.write(a+b);

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

var d = 5;

var y = 10;

document.write(d+y,d-y,d*y,d%y,d/y);

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.

var j;

// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.

document.write(j,"<br>");

// c. Initialize the variable with some number.

var w = 5;

// d. Show the value of variable in your browser like “Initial
// value: 5”.

document.write("Initial value:" , w,"<br>");

// e. Increment the variable.

++w;

// f. Show the value of variable in your browser like “Value
// after increment is: 6”.

document.write("Value after increment is:" , w,"<br>");

// g. Add 7 to the variable.

w += 7;

// h. Show the value of variable in your browser like “Value after addition is: 13”.

document.write("alue after addition is:" , w,"<br>");

// i. Decrement the variable.

--w;

// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.

document.write("Value after decrement is:" , w,"<br>");

// k. Show the remainder after dividing the variable’s value
// by 3.

 w %= 3;

// l. Output : “The remainder is : 0”.

document.write("The remainder is :" , w , "<br><br><br><br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var movieTicket = 600;

movieTicket *= 5;

var totalCost = movieTicket;

document.write("The total movie ticket cost is:",totalCost, "<br>");

// 5. Write a script to display multiplication table of any
// number in your browser. E.g

document.write("Table of 4 <br> 4x1=4 <br> 4x2=8 <br> 4x3=12 <br> 4x4=16 <br> 4x5=20 <br> 4x6=24 <br> 4x7=28 <br> 4x8=32 <br> 4x9=36 <br> 4x10=40");

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// in this i m not understand what you say 






