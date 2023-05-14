// explicitly setting type of roles
var person = {
    name: 'Naser',
    age: 32,
    hobbies: ['chess', 'watch movie'],
    role: [2, 'author']
};
// const person = {
//     name: 'Naser',
//     age: 32,
//     hobbies: ['chess', 'watch movie'],
//     role: [2, 'author']
// }
person.role.push('admin');
// person.role[1]=10 // get error
var favoriteActivities;
favoriteActivities = ['sport', 'movie'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}
