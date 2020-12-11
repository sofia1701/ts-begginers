//Objects, arrays

const person = {
  name: "Sofia",
  age: 26,
  hobbies: ['sports', 'cinema', 'travel']
};

let favouriteHobbies: string[];
favouriteHobbies = ['sports'];

console.log(person.name);

for(const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
};