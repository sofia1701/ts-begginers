//Objects, arrays, tupples

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
// person.role[1] = 10; gives an error as tupple only accepts 2 elements of type number and string
person.role = [3, 'admin'];

let favouriteHobbies: string[];
favouriteHobbies = ['sports'];

console.log(person);

for(const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
};