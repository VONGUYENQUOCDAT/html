let principal = Number(prompt("Nhập số tiền ban đầu:"));
let interestRate = Number(prompt("Nhập lãi suất (% mỗi tháng):")) / 100;
let months = Number(prompt("Nhập số tháng gửi:"));
let totalInterest = 0;
for (let i = 0; i < months; i++) {
    let interest = principal * interestRate;
    totalInterest += interest;
    principal += interest;
}
console.log(`Tiền lãi: ${totalInterest.toFixed(3)}`);
console.log(`Tiền nhận được: ${principal.toFixed(3)}`);
alert(`Tiền lãi: ${totalInterest.toFixed(3)}\nTiền nhận được: ${principal.toFixed(3)}`);