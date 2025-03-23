let n = parseInt(prompt("Nhập n số Fibonacci:"));
if (n <= 0) {
    console.log("Vui lòng nhập số nguyên dương.");
} else {
    let a = 1, b = 1;
    let result = "1";
    if (n > 1) {
        result += ", 1";
    }
    for (let i = 2; i < n; i++) {
        let next = a + b;
        result += ", " + next;
        a = b;
        b = next;
    }
    console.log(result);
}
