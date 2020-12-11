//Objects, arrays
var person = {
    name: "Sofia",
    age: 26,
    hobbies: ['sports', 'cinema', 'travel']
};
var favouriteHobbies;
favouriteHobbies = ['sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
