export {};

const kansuu = (): number => 43;

let numberAny: any = kansuu();
let numberUnknown: unknown = kansuu();

let someAny = numberAny + 10;
if (typeof numberUnknown === 'number') {
  let someUnknown = numberUnknown + 10;
}

