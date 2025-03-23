let N = prompt("Nhập số N:");
if (isNaN(N) || N < 1) {
    console.log("Dữ liệu nhập vào không hợp lệ");
} else {
    N = Number(N);
    let output = `Các số chia hết cho 5 từ 1 đến ${N} là: `;
    let first = true;
    for (let i = 5; i <= N; i += 5) {
        if (!first) {
            output += ", ";
        }
        output += i;
        first = false;
    }
    console.log(output);
}