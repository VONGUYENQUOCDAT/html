let a = Number(prompt("Nhập số cơ số a:"));
let b = Number(prompt("Nhập số mũ b:"));
if (isNaN(a) || isNaN(b) || b < 0) {
    console.log("Không hợp lệ");
} else {
    let ketQua = 1;
    for (let i = 0; i < b; i++) {
        ketQua *= a;
    }
    console.log(`${a}^${b} = ${ketQua}`);
}