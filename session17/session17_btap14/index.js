let r = Number(prompt("Nhập bán kính của hình trụ:"));
let h = Number(prompt("Nhập chiều cao của hình trụ:"));
const PI = Math.PI;

let chuViDay = 2 * PI * r;
let dienTichXungQuanh = 2 * PI * r * h;
let dienTichToanPhan = 2 * PI * r * (r + h);
let theTich = PI * r * r * h;

console.log(`Chu vi đáy: ${chuViDay.toFixed(2)}`);
console.log(`Diện tích xung quanh: ${dienTichXungQuanh.toFixed(2)}`);
console.log(`Diện tích toàn phần: ${dienTichToanPhan.toFixed(2)}`);
console.log(`Thể tích hình trụ: ${theTich.toFixed(2)}`);