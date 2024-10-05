let user = [
    {
        id: 1,
        name: "vishal",
        isActive: true,
        age: 30,
    },
    {
        id: 2,
        name: "ritik",
        isActive: true,
        age: 24,
    },
    {
        id: 3,
        name: "arun",
        isActive: false,
        age: 32,
    },
    {
        id: 4,
        name: "abhi",
        isActive: true,
        age: 30,
    },
]

// check if user with such name exists

// level 1:
// function exists(name , user){
//     let exists = false;
//     for(let i=0; i<user.length; i++){
//         if(user[i].name === name){
//             return true;
//         }
//     }
//     return exists;
// }
// console.log(exists("ritik" , user));


// level 2:
// const isExists = (name , user)=>{
//       const userName = user.find((u)=> u.name === name);
//     //   return userName; o/p: { id: 2, name: 'ritik', isActive: true, age: 24 }
//         return Boolean(userName);
// }
// console.log(isExists("ritik1" , user))

// level 3:
// const isExists = (name , user)=>{
//       const userName = user.findIndex((u)=> u.name === name);
//         return userName >=0
// }
// console.log(isExists("vishal" , user))


 // level 4:
// const isExists = (name , user)=>{
//       const userName = user.some((u)=> u.name === name);
//         return userName 
// }
// console.log(isExists("vishal" , user))
