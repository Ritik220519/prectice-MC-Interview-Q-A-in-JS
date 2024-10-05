// input : this is ritik
// o/P : #ThisIsRitik

// const hastag = (str) => {
//   let newStr = str.split(" ");
//   newStr = newStr.map((eachEle) =>{
//     // console.log(eachEle[0]) o/p: t , i , r, f ,i
//     eachEle.replace(eachEle[0], eachEle[0].toUpperCase())
// });
//   newStr = newStr.join(" ");
// //   console.log(newStr);
// return newStr
// };

// console.log(hastag("this is ritik from india"));



const hastag = (str) => {
    let newStr = str.split(" ");
    newStr = newStr.map((eachEle) =>
        eachEle.charAt(0).toUpperCase() + eachEle.slice(1)
       
  );
     console.log(newStr);
    newStr = `#${newStr.join("")}`;

  return newStr
  };
  
  console.log(hastag("this is ritik from india"));
