function docSo(n) {
    const donVi = ["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
    const chucDacBiet = ["mười", "mười một", "mười hai", "mười ba", "mười bốn", "mười lăm", "mười sáu", "mười bảy", "mười tám", "mười chín"];
    const chuc = ["", "", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];

    if (n === 0) return "không";
    let tram = Math.floor(n / 100);
    let chucHang = Math.floor((n % 100) / 10);
    let donViHang = n % 10;
    let ketQua = "";

    if (tram > 0) {
        ketQua += donVi[tram] + " trăm ";
    }
    if (chucHang === 1) {
        ketQua += chucDacBiet[donViHang];
    } else {
        if (chucHang > 1) {
            ketQua += chuc[chucHang] + " ";
        } else if (tram > 0 && donViHang > 0) {
            ketQua += "lẻ ";
        }

        if (donViHang > 0) {
            ketQua += donVi[donViHang];
        }
    }
    return ketQua.trim();
}
let so = parseInt(prompt("Nhập số từ 0 - 999: "));
if (isNaN(so) || so < 0 || so > 999) {
    alert("Số không hợp lệ!");
} else {
    alert("Số bạn nhập là: " + docSo(so));
}