let num = Number(prompt("Nhập một số nguyên:"));
if (!isNaN(num)) {
    console.log(`Các ước của ${num} là:`);
    for (let i = 1; i <= Math.abs(num); i++) {
        if (num % i === 0) {
            console.log(i);
        }
    }
} else {
    console.log("Vui lòng nhập một số nguyên hợp lệ.");
}