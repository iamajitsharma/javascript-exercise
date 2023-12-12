function findLeapYear(year) {
  // Return true if the year is divisible by 4 but not divisible by 100 unless it's also divisible by 400
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

console.log(findLeapYear(2035));
