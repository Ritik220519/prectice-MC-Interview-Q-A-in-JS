// Bubble Sort

let arr = [7,2,5,9];

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
    console.log(arr);
        if(arr[j] > arr[j+1]){
            let  temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
       
    }
}

console.log(arr);