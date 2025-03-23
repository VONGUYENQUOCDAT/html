let input = prompt("Nhập vào chuỗi số để kiểm tra:");
//kiểm tra chuỗi chỉ chứa số
let isValid = /^\d+$/.test(input);
if (!isValid) {
    console.log("Số không hợp lệ");
} else {
    let isPalindrome = true;
    let length = input.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (input[i] !== input[length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }
    if (isPalindrome) {
        console.log(input + " Là số đối xứng");
    } else {
        console.log(input + " Không phải số đối xứng");
    }
}