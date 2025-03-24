let n = Number(prompt("Nhập số nguyên n:"));
if (isNaN(n) || n <= 0) {
    console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
} else {
    let count = 0;
    let num = 2;
    console.log(`Danh sách ${n} số nguyên tố đầu tiên:`);
    while (count < n) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(num);
            count++;
        }
        num++;
    }
}
