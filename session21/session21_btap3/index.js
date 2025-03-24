const Password = "123456";
let userPassword = prompt("Nhập mật khẩu:");
if (userPassword === Password) {
    alert("Mật khẩu chính xác! Đăng nhập thành công.");
} else {
    alert("Mật khẩu sai! Vui lòng thử lại.");
}