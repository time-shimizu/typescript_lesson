export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);
fooCompatible = barCompatible;
console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStrignLiteral' = 'fooStrignLiteral';

fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1993 = 1993

fooNumber = fooNumberLiteral;


interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal = new Person(28, 'taimu');