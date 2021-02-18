export {};

class Person {
  constructor(public name: string, protected age: number) {} 
}

const me = new Person('taimu', 28);
console.log(me);