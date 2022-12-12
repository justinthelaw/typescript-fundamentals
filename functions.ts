const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(sum(1, 2));

const sum2 = (num1: number | string, num2: number | string): number => {
  typeof num1 == "string" ? num1 = parseInt(num1) : null
  typeof num2 == "string" ? num2 = parseInt(num2) : null
  return num1 + num2;
}

console.log(sum2("80", 8));

const voidPrint = (): void => {
  console.log("void");
  return;
}

voidPrint();

const n: null = null;
const u: undefined = undefined;