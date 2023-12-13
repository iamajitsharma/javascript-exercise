# Basic: Javascript Exercise Question & Solution

1. Write a JavaScript program to display the current day and time in the following format.  
   Sample Output : Today is : Tuesday.
   Current time is : 10 PM : 30 : 38

Solution

```
const today = new Date();
//Get Weekday, it will return number 0 mean Sunday and 6 mean saturday.
const day = today.getDay();

//Weekday array
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Firday", 'Saturday'];

//Get Hour, Minutes and Second from date;

let hours = today.getUTCHours();
let minutes = today.getUTCMinutes();
let seconds = today.getUTCSeconds();

//Find AM and PM from hours
const prepand = ( hours >= 12) ? "PM" : "AM";

//Convert 24 hours to 12 hours format
hours = (hours >= 12) ? hours-12
: hours

// Special Case When Hour is Zero
if(hours === 0 && prepand === 'PM') {
if(minutes == 0 && seconds == 0) {
hours = 12;
prepand = 'Noon'
} else{
hours = 12;
prepand = "PM"
}
}

//Special Case When hour is Zero
if(hours === 0 && prepand === 'AM') {
if(minutes === 0 && seconds === 0) {
hours = 12;
prepand = "Midnight"
} else{
hours = 12;
prepand = 'AM'
}
}

console.log("Today is:", weekdays[day])
console.log("Current Time: " + hours + prepand + " : " + minutes + " : " + seconds);

```

2. Write a JavaScript program to print the current window contents.

Solution

```
function printCurrentWindowContent(){
window.print();
```

3. Write a JavaScript program to get the current date. Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

Solution

```
//Function to formate Date
function formatDate(date){
const day = date.getDate();
const month = date.getMonth()+1;
const year = date.getFullYear();

    if(month < 10) {
        month = '0' + month
    }

    if(day < 10) {
        day = '0' + day;
    }

    console.log(day + "/" + "/" + month + "/" + year)

}

const date = new Date();
formatDate(date)
```

4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

Solution

```
function findTriangleArea(a, b, c){

    //Calculate semi perimeter
    const semiPerimeter = (a + b + c) / 2;

    const area = Math.sqrt(semiPerimeter * ((semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c)))
    console.log(area)
}

findTriangleArea(5,6,7)
```

5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

Solution

```
<body onload="animateText('target')">
    <h2 id="target">W3Resource</h2>
</body>

function animateText(id) {
let element = document.getElementById(id);
let textNode = element.childNodes[0];
let text = textNode.data;

setInterval(function () {
text = text[text.length - 1] + text.substring(0, text.length - 1);
textNode.data = text;
}, 100);
}
```

6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

Solution

```
function findLeapYear(year) {
  // Return true if the year is divisible by 4 but not divisible by 100 unless it's also divisible by 400
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
```

7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

Solution

```
for(let year = 2014; year <= 2050; year++) {
    date = new Date(year, 0, 1);

    if(date.getDay() === 0) {
        console.log("1st Jan is being a Sunday " + year)
    }
}

```

8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

Solution

```
let number = Math.ceil(Math.random() * 10);

let userInput = prompt("Enter number between 1 - 10");

if(userInput == number){
    console.log("Good Work")
} else{
    console.log("Match Not Found")
}
```

9. Write a JavaScript program to calculate the days left before Christmas.

```
const today = new Date();
const christmasDay = new Date(today.getFullYear(), 11, 25);
let oneday = 1000 * 60 * 60 * 24;
if(today.getMonth() == 11 && today.getDate() > 25) {
    christmasDay.setFullYear(christmasDay.getFullYear()+1)
}

 let dayLeft = Math.ceil((christmasDay - today) / oneday);
console.log(dayLeft)
```

10. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).

Solution: We can perform same task with html form as well.

```
const userInput1 = prompt("Enter first number");
const userInput2 = prompt("Enter second number");
const operation = prompt("Enter operation operator");

if(operation === "*"){
    const result = parseInt(userInput1) * parseInt(userInput2);
    console.log("Multiple of two number " + result)
}

if(operation === "/"){
    const result = parseInt(userInput1) / parseInt(userInput2);
    console.log("Division of two number " + result)
}
```

11. Write a JavaScript exercise to get the filename extension.

```
const fileName = "myresume.docx";

//this method will remove "." and result filename and extension in an array;

const getFileExtension = fileName.split(".")

//Using pop method remove last element from an array;
console.log(getFileExtension.pop())
```

12. Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

Solution

```
function findDifferences(number) {
    if(number > 13) {
        let result = (number - 13) * 2;
        return result;
    } else{
        let result = 13 - number;
        return result;
    }
}

console.log(findDifferences(32))
```

13. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

Solution

```
function getSum(number1, number2) {
    if(number1 === number2){
        return ((number1 + number2) * 3);
    } else{
        return (number1 + number2);
    }
}

console.log(getSum(5, 5));
```

14. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

15. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

Solution

```
function checkNumbersPair(num_1, num_2){
    let sumTwoNumbers = num_1 + num_2;

    if(num_1 === 50 || num_2 === 50 || sumTwoNumbers === 50) {
        return true;
    } else{
        return false;
    }
}

console.log(checkNumbersPair(45, 6))
```
