// Chapter 10 (if statements)

// 1. var city = &quot;Karachi&quot; if (city = &quot;Karachi&quot;) { console.log(&quot;The City
//     OF Lights&quot;) Correct the above statement:
//     Also try this statement by yourself

var city = "karachi";

if(city === "karachi") {
    console.log("The city of lights");
}

// 2. This is the first line of an if statement:
// if (x === y) {
// Complete the statement. If the condition is true, display a box
// that asks the user value of z? and assign it to another variable.

var x = "y";

if (x === "y") {
    var value = prompt("Enter a value z");
}

// 3. Code an if statement that tests if ZipCode is &quot;10010&quot; so, Alert
// that &quot;Karachi&quot;. if not then alert (&quot;Please write correct city&quot;)

var zipCode = +prompt("Enter a your ZipCode");

if (zipCode === 10010) {
    alert("Karachi");
}

else{
    alert("Enter Your Correct City");
}

// 4. Code an if statement. Test whether a variable has a particular
// numerical value. If so, assign a new value to that variable, as in
// x = 1;

var x = 10;

if (x === 10) {
    x = 1;
}

alert(x);

// Chapter 11 (Comparison Operators)

// 1. Code the first line of an if statement that tests whether one
// variable is unequal to another. (Use !)


var x = "z";

if (x !== "y") {
    alert("my code");
}

// 2. Code the first line of an if statement that tests whether the
// value represented by a variable is greater than or equal to the
// value represented by another variable.

var a = 3;

var b = 2;

if (a >= b) {
    alert("hy user");
}


// 3. Code an if statement. Test whether a variable is unequal to a
// particular number. If so, assign a number to that variable.

var d = 10;

if (d !== 5) {
    d = 15;
}

alert(d);

// 4. Code an if statement that tests whether a number is unequal
// to a different number. If the condition is true (it will be),
// display a congratulations alert.

if (2 !== 3) {
    alert("code work");
}

// 5. Code a prompt asking for your first name.
// Code an if statement that tests whether the name you entered
// is unequal to another name.
// If the condition is true (it will be), display an alert that says &quot;No
// match&quot;

var firstName = prompt("Eneter your First Name");

if (firstName !== "Danial") {
    alert("Welcome My web");
}

else{
    alert("you are not allow");
}

// Chapter 12 (if…else and else if statements)

// 1. Code an if statement that tests whether the value represented by
// a variable is greater than or equal to the value represented by
// another variable. If so, display an alert. If not, display a different
// alert.


var a = 10;

var b = 5;

if (a >= b) {
    alert("a is greater then b");
}

else{
    alert("a is lessthen b")
}


// 3. This is the if statement that begins the code.
// if (a === 10) {
// alert(&quot;a is 10&quot;);
// }
// If a isn&#39;t 10, display an alert that says The correct value of a is

var a = +prompt("Enter Value of a");

if (a = 10) {
    alert("This is correct Value congruchlation");
}

else{
    alert("This is incorrect Value Please Try agian");
}


// 4. Prompt the user to enter a city.
// If the city is Karachi, display an alert acknowledging it is Karachi.
// If not, check to see if it&#39;s Lahore.
// If it is, display an alert acknowledging it&#39;s Lahore.
// Otherwise, display a different alert.


var city = prompt("Enter your city name:"); 

if (city === "Karachi") {
    alert("You entered Karachi");
} else if (city === "Lahore") {
    alert("You entered Lahor");
} else {
    alert("You entered " + city + ". Get outs");
}

// Chapter 13 (Testing sets of conditions)

