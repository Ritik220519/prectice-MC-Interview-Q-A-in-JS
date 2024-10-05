// add element in an array

// let arr = [1,2];

// let append = (arr , ele)=>{
// push method also changed the orignal array

//         return [...arr , ele];
// }
// console.log(append(arr , 3));
// console.log(arr);

// hard code without predifined function
// Q: add element in an array at postion 3;

let arr = [1, 2, 3, 4, 5, 6];

function addElement(arr) {
  let value = 40;
  let index = 3;

  for (let i = index; i < arr.length; i++) {
    if (i === index) {
      arr[i] = arr[i + 1];
      if (i >= index) {
        arr[i] = value;
      }
    }
  }
  return arr;
}

const res = addElement(arr);
console.log(res);
