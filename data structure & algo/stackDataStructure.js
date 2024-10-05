// A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. This means that the last element added to the stack is the first one to be removed. Imagine a stack of plates: you can only add a new plate to the top, and you can only remove the top plate.

// In JavaScript, you can implement a stack using arrays because arrays already have methods that allow for LIFO operations, such as push() and pop().

// Basic Stack Operations:
// Push: Add an element to the top of the stack.
// Pop: Remove and return the top element from the stack.
// Peek: Look at the top element of the stack without removing it.
// isEmpty: Check if the stack is empty.

let arr = [];
let currentEle = arr.length;
let maxElement = 5;

// function stackDataStructure(){

// }

function push(newValue) {
  if (currentEle >= maxElement) {
    console.log("stack is full");
  } else {
    arr[currentEle] = newValue;

    currentEle += 1;
  }
}
push(10);
push(20);
push(30);

console.log(arr);

function pop() {
  if (currentEle > 0) {
    currentEle -= 1;
    arr.length = currentEle;
  } else {
    console.log("stack is already empty");
  }
}
pop();
pop();

console.log(arr);
