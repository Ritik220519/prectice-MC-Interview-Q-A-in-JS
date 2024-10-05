let array = [-5,-4,-3,-2,0,2,4,6,8];
//sortd array otherwise we have to sort the array;
// [-4,4]=0 answer
// quarditic time complexcity

let checkSumPairZero = (arr)=>{

    for(let i=0; i<arr.length; i++){
        console.log("outer loop "+arr[i])
        for(let j=1 ; j<arr.length; j++){
            console.log("inner loop "+arr[j])
            if(arr[i] + arr[1] ==0 ){
                    return [arr[i] , arr[j]]
            }
        }
    }
}

let res = checkSumPairZero(array)
console.log(res);