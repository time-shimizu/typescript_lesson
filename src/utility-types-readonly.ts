export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'taimu',
  age: 28
};

me.age++;

console.log(me.age);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'shigeru',
  age:39
}

type YomitoriSenyo<T> = {
  readonly[P in keyof T] : T[P];
}

type Personal = YomitoriSenyo<Profile>
