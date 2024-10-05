// remove duplicate Element in an array;

let arr = [1,2,1,3,4,4,5,6,6,9,7,8];
// level 1:
// let notDuplicate = (arr)=>{
//     // return unique element
//    let newArr = []
//     // return duplicate element
//    let duplicate = []

//    for(let i=0; i<arr.length; i++){
//     let isDuplicate = false;
//       for(let j=0; j<newArr.length; j++){
//         if(arr[i] === newArr[j]){
//             isDuplicate = true;
//         }
//       }
//       if(!isDuplicate){
//         newArr.push(arr[i])
//       }
//     //   return duplicate element
//       else{
//         duplicate.push(arr[i])
//       }
//    }
//    return duplicate;

// }
// console.log(notDuplicate(arr))


// Level 2:

// function uniqueElement(arr){
//     let unique =[];
// arr.forEach((ele)=>{
//    if (!unique.includes(ele)) {
//         unique.push(ele);
//    } 
// })
// return unique;
// }

// console.log(uniqueElement(arr));


// level 3:

let uniqueArr = (arr)=>{
    // a Set is a built-in object that allows you to store collections of unique values.
        let newArr = [...new Set(arr)]
        return newArr;
}

console.log(uniqueArr(arr))