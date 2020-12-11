//Objects, arrays, tuples
var person = {
    name: "Sofia",
    age: 26,
    hobbies: ['sports', 'cinema', 'travel'],
    role: [2, 'author']
};
// person.role.push('admin'); push is an exeption, typescript can't catch error
// person.role[1] = 10; gives an error as tuple only accepts 2 elements of type number and string
person.role = [3, 'admin'];
var favouriteHobbies;
favouriteHobbies = ['sports'];
//console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    //console.log(hobby.toUpperCase());
}
;
//Enums
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person1 = {
    name: "Sofia",
    age: 26,
    hobbies: ['sports', 'cinema', 'travel'],
    role: Role.ADMIN
};
if (person1.role === Role.AUTHOR) {
    console.log('The role is author');
}
