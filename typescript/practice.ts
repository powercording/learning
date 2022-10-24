const head = document.querySelector("#head");
// if (head) {
//   console.log("helloWorld");
// }

head.innerHTML = "TypeScript pracitce 중입니다."; // Error -> head is possibly null

if (head) {
  head.innerHTML = "TypeScript pracitce 중입니다.";
}

type World = "world" | "hell";
const a: World = "world";

type B = `hello${World}`;
const b: B = "hellohell"; // "helloworld"

type And = { a: "hello" } & { b: "world" };
const AndResult: And = { a: "hello", b: "world" };
//엔드로 이어진 모든 속성이 객체 안에 존재해야함. - intersection

type Or = { a: "hello" } | { b: "world" };
const OrResult: Or = { a: "hello" }; // or { b: "world" }
// 객체 안에 속성이 두 타입중 한개만을 만족하거나 전부 만족할 수 있다.

type Animal = { breath: boolean };
// interface Animal {
//   breath: boolean;
// }
interface Human extends Animal {
  speak: boolean;
}

const WhoAmI: Human = {
  breath: true,
  speak: true,
};

// interface func {
//   func: () => void;
// }
type func = {
  func: () => void;
};

const myFunc: func = {
  func: () => {
    console.log("eye");
    return 31;
  },
};

function returnVoid(): void {
  return;
}
// undefined / return; / no return 가능   !! null불가능 !!

interface ObjectLiteral {
  a: string;
}

// const literalObj: ObjectLiteral = { a: "상돈", b: "이" }; //잉여속성검사로 인해 b 오류.
const testObj = { a: "이", b: "상돈" };
const TestObj: ObjectLiteral = testObj; // 객체를 한번 거쳐온 속성에 대해서 b속성에 대한 검사를 진행하지 않음. a가 없으면 오류

// function forEach(arr: number[], callback: (el: number) => undefined): void; // 이러한 본문없는 함수선언은 오류를 일으킴.
// function forEach() {
//   return;
// }  // 이렇게 구현부를 바로 아래줄에 만들어주면 에러가 사라짐.

declare function forEach(
  err: number[],
  callback: (el: number) => undefined
): void; // declare 를 넣어주면 오류가 사라짐.

function numOrStr(a: string | number) {
  if (typeof a === "number") return a.toFixed(2);
  if (typeof a === "string") return a.toUpperCase();
}

type BB = {
  type: "b";
  bbb: string;
};
type CC = {
  type: "c";
  ccc: string;
};
type DD = {
  type: "d";
  ddd: string;
};

function typeCheck(type: BB | CC | DD) {
  if (type.type === "b") return type.bbb; // 속성값으로 타입을 지정해준다.
  if ("ccc" in type) return type.ccc; // 키값으로 타입을 지정해 준다.
}
// typescript 를 위해서 객체의 속성 안에  type : "value" 의 속성을 넣어주는 습관을 들이자.

interface Cat {
  meow: number;
}
interface Dog {
  bow: number;
}

function catOrDog(animal: Cat | Dog): animal is Dog {
  if ((animal as Cat).meow) return false;
  return true;
} //커스텀 타입가드

function pet(a: Cat | Dog) {
  if (catOrDog(a)) {
    a.bow = 5;
  }
  if ("meow" in a) {
    a.meow = 4;
  }
} //커스텀 타입가드를 이용한 타입체크

const isRejected = (
  input: PromiseSettledResult<unknown>
): input is PromiseRejectedResult => {
  return input.status === "rejected";
};
const isFulfilled = <T>(
  input: PromiseSettledResult<T>
): input is PromiseFulfilledResult<T> => {
  return input.status === "fulfilled";
};

type AA = { [key: string]: string }; //indexed signature

type TYPE = "human" | "mamal" | "animal";
type AAA = { [key in TYPE]: string }; // maped type  also ->  type AAA = { [key in TYPE]: TYPE };
const AAA: AAA = { human: "me", mamal: "you", animal: "all" };

/* generic  = 타입을 변수처럼 취급함.
 function add (x: number | string , y: number | string) : number | string {}
  => function add<T> (x: <T>, y:<T>) : <T> {}
*/

function add<T extends number>(x: T, y: T): T {
  return x + y;
}

add(1, 2);

interface Array<T> {
  forEach(
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;
  map<U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ): U[];
}

["1", 2, true].forEach((value) => console.log(value));

function add<T extends abstract new (...arge: any) => any>(x: T): T {
  return x;
}

interface Arr<T> {
  forEach(callback: (item: T) => void): void;
  map<U>(callback: (item: T) => U): U[];
  filter<N extends T>(callback: (item: T) => item is N): N[];
}
const mathodddd: Arr<number> = [2, 3, 4, 1];
mathodddd.forEach((value) => console.log(value));

const bthod: Arr<number> = [1, 2, 3];
const bthodMap = bthod.map((item) => item + 1); // [2, 3, ,4]  number[]
const Bbthod = bthod.map((item) => item.toString()); // ["2", "3", "4"] string []
const boolmap = bthod.map((item) => item % 2 === 0); // [true , false , true] boolean []

const stringMethod: Arr<string> = ["1", "2", "3"];
const stringMap = stringMethod.map((item) => +item);

const arrFilter: Arr<number> = [1, 2, 3, 4, 5, 6];
const filterOne = arrFilter.filter((item): item is number => item % 2 === 0); // [2] number []

const arrFilterTwo: Arr<number | string> = [1, "2", 3, "4", 5, 6];
const filterTwo = arrFilterTwo.filter(
  (item): item is string => typeof item === "string"
); // ["2" , "4"] string []
const filterThree = arrFilterTwo.filter(
  (item): item is number => typeof item === "number"
);
const filterOptions = (item: string | number): item is number =>
  typeof item === "number";

const filterfour = arrFilterTwo.filter(filterOptions);
