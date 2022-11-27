import element from "./elements/elements.js";

const root = document.getElementById("root");
const div = element.div;
const p = document.createElement("p");

root.append(div);
div.innerText = " 나도요";
p.innerText = "사랑합니다";
