let input = prompt("Nhập vào một số: ");
let number = Number(input);
let vnd = number.toLocaleString('vi-VN') + "VNĐ";
document.write("Số tiền sau khi định dạng: " + vnd);