let newNum = prompt("Please input a number larger than or equal 3");
let counti = 0;
let countj = 0;

while ( newNum < 3) {
  alert("Please retry again!");
  newNum = prompt("Please input a number larger than or equal 3");
}

for (counti = 1; counti <= newNum; counti++) {
  for (countj = counti; countj < newNum; countj++){
    document.write("&nbsp&nbsp");
  }
  for (countj = 1; countj <= counti ; countj++){
  document.write("*");
  }
  document.write("<br/>");
}