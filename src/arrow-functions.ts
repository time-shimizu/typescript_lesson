export {};

let bmi: (weight: number, height: number) => number = (
  weight: number,
  height: number
): number => weight / (height * height);

console.log(bmi(77, 1.86));