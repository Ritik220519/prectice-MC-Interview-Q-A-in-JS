let arr = [];
let currEle = arr.length;
let maxSize = 4;

function push(value) {
  if (currEle > maxSize) {
    console.log("stack is full");
  } else {
    arr[currEle] = value;
    currEle += 1;
  }
}

function pop() {
  lastRemovedItem = arr[currEle - 1];
  if (currEle > 0) {
    currEle -= 1;
    arr.length = currEle;
  } else {
    console.log("stack is already empty");
  }
  return lastRemovedItem;
}

function reverse(str) {
  for (let i = 0; i < str.length; i++) {
    push(str[i]);
  }
  for (let j = 0; j < str.length; j++) {
    str[j] = pop();
  }
}

let str = "ritik";
str = str.split("");
reverse(str);
console.log(str.join(""));
