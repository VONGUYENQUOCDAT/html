let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let userInput = parseInt(prompt("Nhập một số nguyên:"));
let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === userInput) {
        count++;
    }
}
if (count > 0) {
    console.log(`Số ${userInput} xuất hiện ${count} lần trong mảng`);
} else {
    console.log(`Số ${userInput} không tồn tại trong mảng`);
}