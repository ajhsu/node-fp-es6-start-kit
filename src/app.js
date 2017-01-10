const text = 'hello world!';
const add = x => y => x + y;
const add3 = add(3);
console.log(add(3)(2));
console.log(add3(2));