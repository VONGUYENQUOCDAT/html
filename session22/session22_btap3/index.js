let userInput = prompt("Nhập dãy số, cách nhau bởi dấu phẩy:");
let numberArray = userInput.split(",").map(Number);
numberArray.reverse();
console.log("Mảng sau khi đảo ngược:", numberArray);