function xepLoaiHocLuc(toan, van, anh) {
    let dtb = (toan + van + anh) / 3;
    let xepLoai;

    if (dtb >= 8.0) {
        xepLoai = "Giỏi";
    } else if (dtb >= 6.5) {
        xepLoai = "Khá";
    } else if (dtb >= 5.0) {
        xepLoai = "Trung bình";
    } else {
        xepLoai = "Yếu";
    }

    console.log(`Điểm trung bình: ${dtb.toFixed(2)}`);
    console.log(`Xếp loại: ${xepLoai}`);
}
let toan = parseFloat(prompt("Nhập điểm Toán:"));
let van = parseFloat(prompt("Nhập điểm Văn:"));
let anh = parseFloat(prompt("Nhập điểm Anh:"));

if (isNaN(toan) || isNaN(van) || isNaN(anh)) {
    console.log("Vui lòng nhập số hợp lệ!");
} else {
    xepLoaiHocLuc(toan, van, anh);
}
