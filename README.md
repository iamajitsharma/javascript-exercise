# JavaScript Exercise Questions & Answers

1. Write a JavaScript program to display the current day and time in the following format.  
   Sample Output : Today is : Tuesday.
   Current time is : 10 PM : 30 : 38

Soltution:

````const today = new Date();
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
console.log("Current Time: " + hours + prepand + " : " + minutes + " : " + seconds);```

2. Write a JavaScript program to print the current window contents.

Solution

```function printCurrentWindowContent(){
window.print();
}```

3. Write a JavaScript program to get the current date.
   Expected Output :
   mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

Solution

```//Function to formate Date
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
formatDate(date)```

4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

Solution

```function findTriangleArea(a, b, c){

    //Calculate semi perimeter
    const semiPerimeter = (a + b + c) / 2;

    const area = Math.sqrt(semiPerimeter * ((semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c)))
    console.log(area)

}

findTriangleArea(5,6,7)```

5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

````

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

6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

````function findLeapYear(year) {
  // Return true if the year is divisible by 4 but not divisible by 100 unless it's also divisible by 400
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}```

````
