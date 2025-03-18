let r = Number(prompt("Nhập bán kính của hình cầu:"));
const PI = Math.PI;

let chuViLonNhat = 2 * PI * r;
let dienTichBeMat = 4 * PI * r * r;
let theTich = (4 / 3) * PI * Math.pow(r, 3);

console.log(`Chu vi lớn nhất của hình cầu: ${chuViLonNhat.toFixed(2)}`);
console.log(`Diện tích bề mặt của hình cầu: ${dienTichBeMat.toFixed(2)}`);
console.log(`Thể tích hình cầu: ${theTich.toFixed(2)}`);