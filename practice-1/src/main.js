// Input number
let newNumber = prompt("Please input a number");
console.log(`Number : ${newNumber}`);

while (newNumber < 0 || newNumber >=0) {
  if ( newNumber == "null") {
    alert("Please input a number!");
    newNumber = prompt("Please input a number");
    console.log("Please input a number!");
  } else if ( newNumber == '') {
    alert("Please input a number!");
    newNumber = prompt("Please input a number");
    console.log("Please input a number!");
  } else if ( newNumber < 0) {
    alert("Please input a positive number!")
    newNumber = prompt("Please input a number");
    console.log("Please input a positive number!");
  } else {
    alert("Congratulations! You did it!");
    console.log("Congratulations! You did it!");
    break;
  }
}


// Input Email
let newEmail = prompt("Please input your email");
console.log(`Email: ${newEmail}`);
let count = 0;
let numCo = 0;
let lastChart = newEmail.charAt(newEmail.length - 1 );
console.log(lastChart);

for (count = 0; count < newEmail.length; count++) {
  if (newEmail.charAt(count) == "@"){
    numCo++;
  }
}

if (numCo != 1 || newEmail.length <= 8
  || newEmail.charAt(0) == "@" || lastChart == "@") {
  alert("Your email is not valid");
}



// if (numCo != 1) {
//   alert("Your email is not valid");
//   newEmail = prompt("Please input your email");
//   console.log(`Email: ${newEmail}`);
//   console.log(lastChart);
// }

// while (numCo == 1) {
//   if (newEmail.length <= 8) {
//     alert("Your email is not valid");
//     newEmail = prompt("Please input your email");
//     console.log(`Email: ${newEmail}`);
//     console.log(lastChart);
//   } else if (newEmail.charAt(0) == "@") {
//     alert("Your email is not valid");
//     newEmail = prompt("Please input your email");
//     console.log(`Email: ${newEmail}`);
//     console.log(lastChart);
//   } else if (lastChart == "@") {
//     alert("Your email is not valid");
//     newEmail = prompt("Please input your email");
//     console.log(`Email: ${newEmail}`);
//     console.log(lastChart);
//   } else {
//     break;
//   }
// }
