let input = parseInt(prompt("Nhập một số: "));
if (input % 3 == 0 && input % 5 == 0) {
    alert(+input + " Chia hết cho cả 3 và 5");
} else {
    alert(+input + " Không chia hết cho cả 3 và 5");
}