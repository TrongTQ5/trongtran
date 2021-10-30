// Draw a triangle
function draw(num) {
  let counti = 0;
  let countj = 0;

  for (counti = 1; counti <= num; counti++) {
    for (countj = 1; countj <= counti; countj++) {
      document.write("*");
    }
    document.write("<br/>");
  }
  return;
}

let newNum = prompt("Please input a number larger than or equal 3");
while ( newNum < 3) {
  alert("Please retry again!");
  newNum = prompt("Please input a number larger than or equal 3");
}

draw(newNum);

