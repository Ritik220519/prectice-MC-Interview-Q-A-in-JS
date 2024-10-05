// get array of names from given array of user
let users = [
  {
    id: 1,
    name: "vishal",
    isActive: true,
    age: 10,
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
    name: "bhanu",
    isActive: true,
    age: 40,
  },
  {
    id: 5,
    name: "chotu",
    isActive: true,
    age: 34,
  },
];

// level:1
// function getNames(arr){
//     let names = []
//     for(let i=0; i<arr.length; i++){
//         names.push(arr[i].name)
//     }

//     return names;
// }
// const res = getNames(users);
// console.log(res);

// level 2:

// const names = [];
// users.forEach((user)=>{
//     names.push(user.name);
// })
// console.log(names);

// write a code get user those who active in an array;

// level: 1
// function isActiveUser(user){
//     let names = [];
// for(let i=0; i<user.length; i++){
//     if(user[i].isActive !== true){
//             names.push(user[i].name);
//     }
// }
// return names;
// }
// console.log(isActiveUser(users));

// level:2

// const names = [];
// users.forEach((user) => {
//   if (!user.isActive) {
//     names.push(user.name);
//   }
// });
// console.log(names);

// level 3:

// const names = users.filter((user)=>user.isActive).map((user)=>user.name).sort()
// console.log(names);

// sorting on age

// users.sort((user1 , user2)=>user1.age > user2.age ? -1 : 1);
// console.log(users);