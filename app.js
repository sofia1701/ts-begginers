//Objects, arrays, tupples
var person = {
    name: "Sofia",
    age: 26,
    hobbies: ['sports', 'cinema', 'travel'],
    role: [2, 'author']
};
// person.role.push('admin'); push is an exeption, typescript can't catch error
// person.role[1] = 10; gives an error as tupple only accepts 2 elements of type number and string
person.role = [3, 'admin'];
var favouriteHobbies;
favouriteHobbies = ['sports'];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
;
