// count Words
function countWords(string) {
  return (string.split(` `)).length;
};

// find word
function findWord (string, x) {
  let arr = string.split(` `);
  for (let i = 0; i < arr.length; i++ ) {
    if (arr[i] == x) {
      return i + 1;
    }
  }
}

// Cut the word “newbie”
function cutWord(string, x) {
  let ans = [];
  let arr = string.split(` `);
  for (let i = 0; i < arr.length; i++ ) {
    if (arr[i] == x) {
      ans.push(arr[i]);
    }
  }
  return ans;
}


let text = "Hello world! I'm a newbie in programming.";

console.log(text);
console.log(`length: ${text.length}`)
console.log(`Count Words: ${countWords(text)}`);
console.log(`Vi tri newbie: ${findWord (text, "newbie")}`);
console.log(`Vi tri newbie: ${text.search("newbie")}`);
console.log(`Mang moi: ${cutWord(text, "newbie")}`);
// upcase programming
console.log(text.replace("programming", "PROGRAMMING"));

