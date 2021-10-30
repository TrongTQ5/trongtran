// input number
function checkNumber(value) {
  if(typeof parseInt(value) !== "number") {
      return false
  }
  return true
};

var value = prompt("Please input a number");
console.log(value);
console.log(typeof parseInt(value));

const isNumber = checkNumber(value);

if (typeof isNumber !== 'number') {
  alert("Please input a number")
} else if (parseInt(value) < 0 ) {
  alert ("please input positive number")
} else {
  alert("congratusion! you did it")
};

// Input email
let email = prompt("Please input your email");
let lastChart = email.charAt(email.length - 1 );

if (email.length < 8 || email.charAt(0) == '@'
  || lastChart == "@" || email.indexOf('@') == -1) {
  alert("Your email is not valid")
}
else {
  alert("Congrats!")
};
