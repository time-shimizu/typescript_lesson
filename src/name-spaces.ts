export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('タイム');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('taimu');

const michael = new English.Person('Michael', 'Hoge', "Jackson");
console.log(michael.firstName);
