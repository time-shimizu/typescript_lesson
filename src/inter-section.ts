export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154
};

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367
};

// type TowWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

type TowWayPlayer = Pitcher1 & Batter1;

const OtaniShouhei: TowWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
};