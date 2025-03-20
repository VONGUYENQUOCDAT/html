let a = parseFloat(prompt("Nhập hệ số a: "));
let b = parseFloat(prompt("Nhập hệ số b: "));
let c = parseFloat(prompt("Nhập hệ số c: "));
let delta = b * b - 4 * a * c;
if (delta < 0) {
    alert("Phương trình vô nghiệm");
} else if (delta == 0) {
    alert("Phương trình có nghiệm kép x1=x2= " + (-b / (2 * a)));
} else {
    alert("Phương trình có 2 nghiệm phân biệt x1= " + ((-b + Math.sqrt(delta)) / (2 * a)) + " và x2= " + ((-b - Math.sqrt(delta)) / (2 * a)));
}