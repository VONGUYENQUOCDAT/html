let sum = 0;
for (let i = 0; i < 5; i++) {
    let num = Number(prompt(`Nhập số thứ ${i + 1}:`));
    if (num % 2 !== 0) {
        sum += num;
    }
}
console.log("Tổng các số lẻ là:", sum);
alert(`Tổng các số lẻ là: ${sum}`);