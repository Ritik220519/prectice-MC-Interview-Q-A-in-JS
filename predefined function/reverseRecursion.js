let arr = [1,2,3,4,5,6,7,8]
// o/p: [8,7,6,5,4,3,2,1]

// function reverseRecursion(arr , start , end){
   
//       let temp
//     if(start <= end){
//         temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         reverseRecursion(arr , start+1 , end-1);
//     }
//      console.log(arr);
// }

// reverseRecursion(arr , 0 , arr.length-1);

// predefined function 
arr.reverse()
console.log(arr)