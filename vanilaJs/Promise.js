const callbackTest = (msg) => new Promise((res) => res(msg));
//here is a test function 

async function nnn() {
  const bbb = await callbackTest("ddd");
  console.log(bbb);
}

nnn();
//  console shows String "ddd"


const aaa = callbackTest("ccc");
console.log(aaa);
//  console shows Promise{ "ccc" }




console.log(callbackTest("Cccc"));

