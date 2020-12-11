//Objects, arrays, tuples

const person: {
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string]
} = {
  name: "Sofia",
  age: 26,
  hobbies: ['sports', 'cinema', 'travel'],
  role: [2, 'author']
};

// person.role.push('admin'); push is an exeption, typescript can't catch error
// person.role[1] = 10; gives an error as tuple only accepts 2 elements of type number and string
person.role = [3, 'admin'];

let favouriteHobbies: string[];
favouriteHobbies = ['sports'];

//console.log(person);

for(const hobby of person.hobbies) {
  //console.log(hobby.toUpperCase());
};

//Enums

enum Role { ADMIN, READ_ONLY, AUTHOR }

const person1 = {
  name: "Sofia",
  age: 26,
  hobbies: ['sports', 'cinema', 'travel'],
  role: Role.ADMIN,
};

if(person1.role === Role.AUTHOR) {
  console.log('The role is author')
}