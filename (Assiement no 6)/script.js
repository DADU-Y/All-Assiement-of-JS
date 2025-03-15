

// chapters21-25    start 


// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter Your First Name");

// var lastName = prompt("Enter your Last Name");

// var fullName = firstName + lastName;

// console.log(fullName);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var favoriteMobile = prompt("Enter Your Favorite Mobile Name");

// var mobileLenth = favoriteMobile.length;

// console.log("My Favorite Mobie is",favoriteMobile,"Lenth of string",mobileLenth);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var myCountry = "Pakistan";

// var indexN = myCountry.indexOf("n");

// console.log("string :" , myCountry , "Index of 'n':" , indexN);

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var string = "Hello World";

// var lastIndex = string.lastIndexOf("l");

// console.log("string:",string,"\nLast Index of;",lastIndex);

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var string = "Pakistan";

// console.log("string:",string,"\nCharacter at 3rd index",string[3]);

// 6. Repeat Q1 using string concat() method.

// var firstName = prompt("Enter Your First Name");

// var lastName = prompt("Enter your Last Name");

// var fullName = firstName.concat(" ",lastName);

// console.log(fullName);

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var city = "Hyderbad";

// var afterReplacement = city.replace("Hyderbad","Islamabad");

// console.log("City:",city,"\nAfter Replaement:",afterReplacement);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.


// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var updateMessage = message.replaceAll("and","&");

// console.log(updateMessage);


// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var value = "472.2";

// var type = typeof value;

// var updateVlaue = Number(value);

// var updateType = typeof updateVlaue;

// console.log("value:",value,"\nType:",type,"\nvalue:",updateVlaue,"\nType:",updateType);

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// var userInput = prompt("Enter a Text");

// console.log(userInput.toUpperCase());

// 11. Write a program that takes user input. Convert and
// show the input in title case.

// var userInput = prompt("Enter a Text");

// var firstChar = userInput.slice(0,1).toUpperCase();

// var otherChar = userInput.slice(1).toLowerCase();

// var updateInput = firstChar + otherChar;

// console.log(updateInput);


// 12. Write a program that converts the variable num to
// string.
// Remove the dot to display “3536” display in your browser.

// var num = 35.36;

// var str = num.toString().replace(".","");

// console.log("Number:",num,"\nResult:",str);

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var userName = prompt("Enter your username");

// if(/[@ . , !]/.test(userName)){
//     alert("Please inter valid username");
// }

// else{
//     console.log("username sahi hai");
// }

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// var A = ["cake","apple pie","cookie","chips","patties"];

// var userInput = prompt("Enter your item").toLowerCase();

// if(A.includes(userInput)){
//     console.log("Your Item is Availaible");
// }

// else{
//     console.log("Your Item is not Availaible");
// }

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var userPassword = prompt("Enter a Password");

// if(userPassword.length < 6){
//     alert("Password aleast 6 word");
// }

// else if(!isNaN(userPassword.slice(0,1))){
//     alert("Password kai shuru main number not allow");
// }

// else if(!(/[A-Za-z]/.test(userPassword)) || !(/[0-9]/.test(userPassword))){
//     alert("Please inter ltter or number bothh");
// }

// else{
//     console.log("Password is Valid");
// }

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University of Karachi";

// console.log(university.split(""));

// 17. Write a program to display the last character of a user
// input.

// var userInput = prompt("Eter a Text");

// var lastChar = userInput.slice(-1);

// console.log("userinput:",userInput,"\nlast character:",lastChar);

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// var str = "the quick brown fox jumps over the lazy dog";

// for(var i = 0;i < str.length;i++){
//     if(str.slice(i,i + 3) === "the"){
//         alert("2 the hai");
//     }
// }


// chapters21-25  end

// chapters26-30  start

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var userNum = +prompt("Enter a positive integer Number");

// var round = Math.round(userNum);

// var floor = Math.floor(userNum);

// var ciel = Math.ceil(userNum);

// console.log("Number:",userNum,"\nRound of valu:",round,"\nfloor value:",floor,"\ncielvalue",ciel);

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var userNum = +prompt("Enter a negative floating point number");

// var round = Math.round(userNum);

// var floor = Math.floor(userNum);

// var ciel = Math.ceil(userNum);

// console.log("Number:",userNum,"\nRound of valu:",round,"\nfloor value:",floor,"\ncielvalue",ciel);

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var subFour = -4;

// var five = 5;

// console.log("The absolute Value of",subFour,"is",Math.abs(subFour),"\nThe absolute Value of",five,"is",Math.abs(five));

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// var dice = Math.ceil(Math.random() * 6);

// alert("random dice Value: "+ dice);

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var toss = Math.ceil(Math.random() * 2);

// var result;

// if(toss === 1){
//     result = "Heads";
// }

// else{
//     result = "Tails";
// }

// alert("Random coin Valu: " + result);

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// var ranNum = Math.ceil(Math.random() * 100);

// console.log("random value between 1 to 100:",ranNum);

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var userWieght = parseFloat(prompt("Enter Your Wieght"));

// console.log("Your wieght is",userWieght,"kg");

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// var secretNum = Math.ceil(Math.random() * 10);

// var userInput = parseInt(prompt("Enter a 1 to 10 between Number"));

// if(userInput === secretNum){
//     alert("Congruchulation Your guess is correct");
// }

// else{
//     alert("ohh your guess is inccorrecct pleasee try againe");
// }

// chapters26-30   end 

// chapters31-34 start

// 1. Write a program that displays current date and time in
// your browser.

//  var date = new Date();

//  console.log(date);

// 2. Write a program that alerts the current month in words.
// For example December.

// var date = new Date();

// var monthIndex = date.getMonth();

// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// var currentMonth = monthNames[monthIndex];

// alert("current Month:"+ currentMonth);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var date = new Date();

// var dayIndex = date.getDay();

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// var currentDay = dayNames[dayIndex];

// alert("Today is:" + currentDay);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var date = new Date();

// var dayIndex = date.getDay();

// if(dayIndex === 0 || dayIndex === 6){
//     alert("Its Funday");
// }

// else{
//     alert("Its Workday");
// }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var date = new Date();

// var dateNum = date.getDate();

// if(dateNum <= 15){
//     alert("First fifteen days of the month");
// }

// else{
//     alert("Last days of the month");
// }