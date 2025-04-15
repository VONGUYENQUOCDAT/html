function register() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!email || !password || !confirmPassword) {
        alert("Vui lòng điền vào tất cả chỗ trống.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Mật khẩu sai.");
        return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert("Email đã được đăng kí!");
        return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng kí thành công!");

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
}