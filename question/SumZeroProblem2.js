let array = [-5,-4,-3,-2,0,2,4,6,8];
//sortd array otherwise we have to sort the array;
// [-4,4]=0 answer
// linear time complexcity O(n)

let checkSumPairZero = (arr)=>{
        let left=0;
        let right=arr.length-1;

        while (left < right) {
            let sum = arr[left] + arr[right];
            if(sum === 0){
                return [arr[left] , arr[right]]
            }else if(sum > 0){
                right --

            }else{
                left ++;
            }
            
        }
  
}

let res = checkSumPairZero(array)
console.log(res);