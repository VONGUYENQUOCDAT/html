let n = parseInt(prompt("Nhập số lượng số nguyên tố cần in:"));
if (n <= 0) {
    console.log("Vui lòng nhập số nguyên dương.");
} else {
    let count = 0;
    let num = 2;
    let result = "";
    while (count < n) {
        let isPrime = true;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            result += (count === 0) ? num : ", " + num;
            count++;
        }
        num++;
    }
    console.log(result);
}
