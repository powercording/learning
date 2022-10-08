/**
 * 화살표함수
 */

//map()과 => ()=>{}
const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

materials.map((e) => {
  console.log(e);
});

let newArr = materials.map((e, idx) => {
  return e.length * 2;
});

function hellow(a) {
  return;
}
