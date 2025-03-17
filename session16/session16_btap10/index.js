var num1 = Number(prompt("Nhập số thứ 1: "));
var num2 = Number(prompt("Nhập số thứ 2: "));

var min = Math.min(num1, num2);
var max = Math.max(num1, num2);

var randomNum = Math.random()*(max - min)+min;
document.writeln("Số ngẫu nhiên trong khoảng từ "+min+" đến "+max+" là: "+randomNum.toFixed(2));