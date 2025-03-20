let a=parseFloat(prompt("Nhập số thứ 1: "));
let b=parseFloat(prompt("Nhập số thứ 2: "));
let c=parseFloat(prompt("Nhập số thứ 3: "))
// so sánh nếu a>b và a>c thì a max còn a>b và a<c thì c max , còn a<b và b>c thì b max còn b<c và c>a thì c max
let max=(a>b)?((a>c)?a:c):((b>c)?b:c);
alert("Số lớn nhất trong 3 số là: "+max);