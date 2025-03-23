let str = prompt("Nhập chuỗi:");
let searchChar = prompt("Nhập ký tự cần tìm:");
let found = false;
for (let i = 0; i < str.length; i++) {
    if (str[i] === searchChar) {
        found = true;
        break;
    }
}
if (found) {
    console.log("Tồn tại từ cần tìm kiếm!");
} else {
    console.log("Không tồn tại từ cần tìm kiếm!");
}