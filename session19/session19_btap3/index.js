let choice = parseInt(prompt("Nhập lựa chọn (1. VND -> USD) hoặc (2. USD -> VND): "));
if (choice === 1) {
    let vnd = parseFloat(prompt("Nhập số tiền VND: "));
    if (!isNaN(vnd) && vnd >= 0) {
        let usd = vnd / 23000;
        alert(`${vnd.toLocaleString()} VND = ${usd.toFixed(2)} USD`);
    } else {
        alert("Số tiền không hợp lệ!");
    }
}
else if (choice === 2) {
    let usd = parseFloat(prompt("Nhập số tiền USD: "));
    if (!isNaN(usd) && usd >= 0) {
        let vnd = usd * 23000;
        alert(`${usd.toFixed(2)} USD = ${vnd.toLocaleString()} VND`);
    } else {
        alert("Số tiền không hợp lệ!");
    }
}
else {
    alert("Lựa chọn không hợp lệ!");
}