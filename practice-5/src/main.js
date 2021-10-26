let pointMath = prompt("Please input point for Math");
let pointPhys = prompt("Please input point for Physical");
let pointChem = prompt("Please input point for Chemistry");

let pntMath = parseFloat(pointMath);
let pntPhys = parseFloat(pointPhys);
let pntChem = parseFloat(pointChem);

let averageMark = (pntMath + pntPhys + pntChem) / 3;
console.log(averageMark);
let aveMark = averageMark.toFixed(1);

if (aveMark >= 8.0) {
  alert(`Your average mark is ${aveMark}. Your rank is: A`);
} else if (aveMark >= 6.5) {
  alert(`Your average mark is ${aveMark}. Your rank is: B`);
} else if (aveMark >= 5.0) {
  alert(`Your average mark is ${aveMark}. Your rank is: C`);
} else {
  alert(`Your average mark is ${aveMark}. Your rank is: D`);
}