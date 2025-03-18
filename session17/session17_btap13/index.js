let soTienGui = Number(prompt("Nhập số tiền gửi (VND):"));
let soThangGui = Number(prompt("Nhập số tháng gửi:"));
let laiSuatThang = 4.3 / 100 / 12;
let tienLai = soTienGui * laiSuatThang * soThangGui;
console.log(`Số tiền lãi nhận được sau ${soThangGui} tháng là: ${tienLai.toFixed(2)} VND`);