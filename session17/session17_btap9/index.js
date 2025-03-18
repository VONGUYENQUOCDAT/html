let a = Number(prompt("Nhập hệ số a:"));
let b = Number(prompt("Nhập hệ số b:"));
let c = Number(prompt("Nhập hệ số c:"));

let delta = b * b - 4 * a * c;

if (delta < 0) {
    document.writeln("Phương trình vô nghiệm");
} else if (delta === 0) {
    let x = -b / (2 * a);
    document.writeln("Phương trình có nghiệm kép x = " + x);
} else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.writeln("Nghiệm x1 = " + x1 + "<br>Nghiệm x2 = " + x2);
}