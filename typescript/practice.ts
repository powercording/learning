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
