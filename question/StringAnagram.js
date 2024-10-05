// string Anagram
//  -> hello -> llleo = not anagram
// ritik -> ktiri = is anagram
// condition = length check (for both string);
// hello ->{h:1 , e:1 , l:2 , o:1}  compare 2nd stringg = llheo->{h:0 , e:0 , l:0 , o:0}
//

function isAnagram(str1, str2) {
  if (str1.length === str2.legth) {
    return true;
  }
  let counter = {};
  for (let letter of str1) {
    // console.log(letter)
    counter[letter] = (counter[letter] || 0) + 1;

  }
  console.log(counter)

  for(let item of str2){
    if (!counter[item]) {
        return false;
    }
    counter[item] -= 1;
   
  }
  return true
}

let res =  isAnagram("hello", "lleho");
console.log(res)
