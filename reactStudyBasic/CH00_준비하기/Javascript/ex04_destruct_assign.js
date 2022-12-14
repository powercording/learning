/**
 * 자바스크립트 구조분해할당.
 * : 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 자바스크립트 표현식.
 */

let a, b, res;
[a, b] = [10, 20];
[a, b, ...res] = [10, 20, 30, 40, 50];
console.log(res);

//객체 구조 분해
const o = { p: 42, q: true };
let { p, q } = o;
