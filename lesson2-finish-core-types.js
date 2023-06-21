"use strict";
// explicitly setting type of roles
// const person:{
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Naser',
//     age: 32,
//     hobbies: ['chess', 'watch movie'],
//     role: [2, 'author']
// }
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role[Role["READ_ONLY"] = 0] = "READ_ONLY";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'Naser',
    age: 32,
    hobbies: ['chess', 'watch movie'],
    role: Role.ADMIN
};
// push method is an exception which even by using Tuple, Typescript can't catch error 
// person.role.push('admin')
// person.role[1]=10 // because of using Tuple, catch error
let favoriteActivities;
favoriteActivities = ['sport', 'movie'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
