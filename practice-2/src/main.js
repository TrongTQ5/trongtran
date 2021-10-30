// Loai bo so trung lap
function deduplicate(arr) {
  let isExist = (arr, x) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === x) return true;
    }
    return false;
  };

  let ans = [];
  arr.forEach((element) => {
    if (!isExist(ans, element)) ans.push(element);
  });
  return ans;
}

// Total
function total(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

// find odd numbers
function odd(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1){
      ans.push(arr[i]);
    }
  };
  return ans;
}

// find even numbers
function even(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0){
      ans.push(arr[i]);
    }
  };
  return ans;
}

// Sort array of numbers by ascending
function sortAscending (arr) {
  let tg;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++ ) {
      if(arr[i] > arr[j]){
        // Hoan vi 2 so a[i] va a[j]
        tg = arr[i];
        arr[i] = arr[j];
        arr[j] = tg;
      }
    }
  }
  return arr;
}

// Sort array of numbers by descending
function sortDescending (arr) {
  let tg;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++ ) {
      if(arr[i] < arr[j]){
        // Hoan vi 2 so a[i] va a[j]
        tg = arr[i];
        arr[i] = arr[j];
        arr[j] = tg;
      }
    }
  }
  return arr;
}


// Find the prime numbers
function primeNum(arr) {
  let k = 0;
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 2; j < arr[i]; j++ ) {
      if (arr[i] % j == 0){
        k++;
      }
    }
    console.log(`${k}`);
    if (k == 0) {
      ans.push(arr[i]);
    };
    k = 0;
  };
  return ans;
}

// Find the perfect numbers
function perfectNum(arr) {
  let ans = [];
  let tong = function tonguocNum(num) {
    let tong = 0;
    for (let i = 0; i < num; i++) {
        if (num % i == 0) {
          tong += i;
        }
      }
      return tong;
  }

  let checkNum = function (num,tong) {
    if (num == tong) {
      return true;
    } else {return false};
  }

  for (let a = 0; a < arr.length - 1; a++) {
    if (checkNum(arr[a],tong(arr[a]))) {
      ans.push(arr[a]);
    }
  }
  return ans;
}








let arr = [1, 50, 28, 2, 5, 103, 496, 105, 108, 25, 36, 6, 50, 53, 289, 1003, 472, 105, 3, 899, 692, 1000, 289, 103]
let ans = deduplicate(arr);

console.log(arr);
console.log(ans);

console.log(`sum= ${total(ans)}`);

console.log(odd(arr));
console.log(even(arr));
console.log(sortAscending (arr));
console.log(sortDescending (arr));

// arr.sort(function(a, b) {return a - b})
// console.log(`ascending : ${arr}`)
// arr.sort(function(a, b) {return b - a})
// console.log(`descending : ${arr}`)

console.log(primeNum(arr));
console.log(`Số hoàn hảo là: ${perfectNum(arr)}`);