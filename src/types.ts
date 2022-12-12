console.log("Hello World");

let myString: string = "hello brave new world";
console.log(myString);

let myNum: number;
myNum = 8;
console.log(myNum);
myNum = 8.8;
console.log(myNum);
myNum = 0xf03;
console.log(myNum);

let myBool: boolean = true;
console.log(myBool);

let myAny: any = [5, 6, 7];
console.log(myAny);
myAny = ["wow", 6, 2];
console.log(myAny);

let strArr: string[] = ["0", "hello", "world"];
let numArr: number[] = [0, 2.5, 4, 800000];
console.log(strArr);
console.log(numArr);

let tuple: [string, string, number, boolean] = ["string", "string", 8, true];
console.log(tuple);

let myUnion: string | number;
myUnion = 42;
console.log(myUnion);
myUnion = "string";
console.log(myUnion);