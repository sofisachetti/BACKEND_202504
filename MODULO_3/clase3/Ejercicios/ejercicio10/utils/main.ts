import { add, reverse, User } from '.';

console.log('Sum: ', add(8, 4));
console.log('Reversed String: ', reverse('typescript'));

const user = new User('Bob', 40);
console.log(`User: ${user.name}, Age: ${user.age}`);