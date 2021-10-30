// calculate how many days in that month
function calDay (month, year) {
  let month31 = ["January", "March", "May", "July", "August", "October", "December"]
  let month30 = ["April", "June", "September","Novmber"]

  if (month31.indexOf(month) !== -1) {
    return "31 days.";
  } else if (month30.indexOf(month) !== -1) {
    return "30 days.";
  } else if (year % 4 == 0) {
    return "29 days.";
  } else {
    return "28 days.";
  }
}


let dayNum = prompt("Please input a number form 1 to 7");
let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let monthNum = prompt("Please input a number from 1 to 12");
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novmber", "December"]

let yearNum = prompt("Please input a year");

alert(day[dayNum - 1]);
alert(month[monthNum - 1]);
alert(calDay(month[monthNum - 1],yearNum));

console.log(day[dayNum - 1]);
console.log(month[monthNum - 1]);
console.log(calDay(month[monthNum - 1],yearNum));

