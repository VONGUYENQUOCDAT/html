let userInput = prompt("Nhập dãy số:");
if (/^\d+$/.test(userInput)) {
    let numberArray = userInput.split("").map(Number);
    let maxNumber = Math.max(...numberArray);
    console.log(`${maxNumber} là số lớn nhất trong dãy số`);
} else {
    console.log("Dãy số không hợp lệ");
}