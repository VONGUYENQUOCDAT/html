const n = Number(prompt("Nhập vào một số nguyên: "), 10);
let laSoNguyenTo = true;
if (n <= 1) {
    laSoNguyenTo = false;
} else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            laSoNguyenTo = false;
            break;
        }
    }
}
if (laSoNguyenTo) {
    console.log(`${n} là số nguyên tố.`);
} else {
    console.log(`${n} không phải là số nguyên tố.`);
}