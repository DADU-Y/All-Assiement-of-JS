// Home Assiement Start 
// Chapter 15 (Array I)

// 1. Declare an empty array.

// var a = [];

// 2. Code an array with 1 string element

// a = ["h"];

// 3. var alphabet = [&quot;h&quot;,&quot;i&quot;,&quot;j&quot;,&quot;k&quot;]. Now print the letter “j” in alert
// using array index

// var alphabet = ["h","i","j","k"];

// alert(alphabet[2]);

// 4. var alphabet=[&quot;h&quot;,&quot;i&quot;,&quot;j&quot;,&quot;k&quot;, “l”,”m”, “n”, “o”]. Find the total
// length of array.

// var alphabet = ["h","i","j","k","l","m","o"];

// console.log(alphabet.length);

// 5. Declare an array with one element and Add a second element
// with index in array. Create an alert whose message is the new
// element.

// var arr = ["h"];

// arr[1] = "i";

// alert(arr[1]);

// Chapter 16 (Array II)

// 1. Code an array with 1 string element.
// Add an additional element to the array using push.
// Create an alert whose message is the last element.

// var arr = ["a"];

// arr.push("b");

// alert(arr[1]);

// 2. var Alphabet=[&quot;h&quot;,&quot;i&quot;,&quot;j&quot;,&quot;k&quot;]
// Remove the last element from the array Alphabet.

// var alphabet = ["h","i","j","k"];

// alphabet.pop();

// console.log(alphabet);

// 3. var Alphabet=[&quot;h&quot;,&quot;i&quot;,&quot;j&quot;,&quot;k&quot;]
// Add a new element, a number, to the end of an array.

// var alphabet = ["h","i","j","k"];

// alphabet.push(7);

// console.log(alphabet);

// Chapter 16 (Array III)

// 1. var sizes = [&quot;S&quot;, &quot;M&quot;, &quot;XL&quot;, &quot;XXL&quot;, &quot;XXXL&quot;].
// Remove the first element of an array.

// var sizes = ["s","m","xl","xxl","xxxl"];

// sizes.shift();

// console.log(sizes);

// 2. var sizes = [&quot;S&quot;, &quot;M&quot;, &quot;XL&quot;, &quot;XXL&quot;, &quot;XXXL&quot;].
// Add three number elements to the beginning of an array.

// var sizes = ["s","m","xl","xxl","xxxl"];

// sizes.unshift("a","b","c");

// console.log(sizes);

// 3. Declare an array with one element.
// Add a second element to the beginning of the array.
// Create an alert whose message is the new first element.

// var arr = ["a"];

// arr.unshift("b");

// alert(arr[0]);

// 4. var sizes = [&quot;S&quot;, &quot;M&quot;, &quot;XL&quot;, &quot;XXL&quot;, &quot;XXXL&quot;].

// Insert &quot;L&quot; into the array between &quot;M&quot; and &quot;XL&quot;.

// var sizes = ["s","m","xl","xxl","xxxl"];

// sizes.splice(2,0,"l");

// console.log(sizes);

// 5. var sizes = [&quot;S&quot;, &quot;M&quot;, &quot;XL&quot;, &quot;XXL&quot;, &quot;XXXL&quot;].
// Copy the first 3 sizes of the array and put them into a new array,
// regSizes.

// var sizes = ["s","m","xl","xxl","xxxl"];

// var regSizes = sizes.slice(0,3);

// console.log(regSizes);

// 6. var pets = [&quot;dog&quot;, &quot;cat&quot;, &quot;ox&quot;, &quot;duck&quot;, &quot;frog&quot;].
// Add 2 elements after &quot;dog&quot; and remove &quot;cat&quot;, &quot;ox&quot;, and &quot;duck&quot;.

// var pets = ["dog","cat","ox","duck","frog",];

// pets.splice(1,3,"tiger","eliphent");

// console.log(pets);

// 7. var pets = [&quot;dog&quot;, &quot;cat&quot;, &quot;ox&quot;, &quot;duck&quot;, &quot;frog&quot;];
// Remove &quot;cat&quot; and &quot;ox&quot;.

// var pets = ["dog","cat","ox","duck","frog",];

// pets.splice(1,2);

// console.log(pets);

// 8. var pets = [&quot;dog&quot;, &quot;cat&quot;, &quot;ox&quot;, &quot;duck&quot;, &quot;frog&quot;, &quot;flea&quot;];
// Reduce it to &quot;duck&quot; and &quot;frog&quot; using slice.

// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];

// var selectedPets = pets.slice(3, 5);

// console.log(selectedPets);

// home Assiement end 




// pdf Assiemt start 

// 1. Declare an empty array using JS literal notation to store
// student names in future.

// var StudentName = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

// var StudentName = new Array();

// 3. Declare and initialize a strings array.

// var StringArr = ["yameen"];

// 4. Declare and initialize a numbers array.

// var NumArr = [5];

// 5. Declare and initialize a boolean array.

// var BooleanArr = [true,false,true,false];

// 6. Declare and initialize a mixed array.

// var MixedArr = ["yammen",1,true,"dadu",2,false];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// var EducationQualification = ["SSC","HSC","BCS","BS","BCOM","MS","M. PHIL.","PHD"];

// console.log("Qualifications:",EducationQualification);


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:


// var StudentsName = ["Ali","Yameen","Tahir"];

// var StudentScore = [240,300,400];

// var TotalMarks = [500];

// document.write("Score of",StudentsName[0],"is",StudentScore[0],".Percentage:",StudentScore[0] / TotalMarks[0] * 100,"%<br><br><br>","Score of",StudentsName[1],"is",StudentScore[1],".Percentage:",StudentScore[1] / TotalMarks[0] * 100,"%<br><br><br>","Score of",StudentsName[2],"is",StudentScore[2],".Percentage:",StudentScore[2] / TotalMarks[0] * 100,"%<br><br><br>");



// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["“This ”, “ is ”, “ my ”, “ cat”"];

// var SingleString = ["This is my cat"];









