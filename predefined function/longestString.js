// level 1: find longest string (word)

// function longestString(str){

//     if(str.trim().length === 0){
//             return false;
//     }
//     let newStr = str.split(" ").sort((a,b)=>a.length - b.length);
//     console.log(newStr);

// return newStr.at(-1);

// }

// const res = longestString("this side Ritik from india at uttarPradesh")
// console.log(res);

// level: 2 find longest string (word) reduce method

// function longestString(str) {
//   if (str.trim().length === 0) {
//     return false;
//   }
//   let word = str.split(" ");
//   console.log(word);

//   return word.reduce((accum, currEle) => (
//     currEle.length > accum.length ? currEle : accum
//   ), "");
// }

// const res = longestString("this side Ritik from india at uttarPradesh");
// console.log(res);
