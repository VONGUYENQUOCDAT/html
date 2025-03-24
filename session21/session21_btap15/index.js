let money = Number(prompt("Nhập số tiền: "));
let count_500 = 0;
let count_200 = 0;
let count_100 = 0;
let count_50 = 0;
let count_20 = 0;
let count_10 = 0;
let count_5 = 0;
let count_2 = 0;
let count_1 = 0;
while (money > 0) {
    if (money >= 500000) {
        money -= 500000;
        count_500++;
    } else if (money >= 200000) {
        money -= 200000;
        count_200++;
    } else if (money >= 100000) {
        money -= 100000;
        count_100++;
    } else if (money >= 50000) {
        money -= 50000;
        count_50++;
    } else if (money >= 20000) {
        money -= 20000;
        count_20++;
    } else if (money >= 10000) {
        money -= 10000;
        count_10++;
    } else if (money >= 5000) {
        money -= 5;
        count_5++;
    } else if (money >= 2000) {
        money -= 2;
        count_2++;
    } else {
        money -= 1;
        count_1++;
    }
}
document.writeln("Số tờ 500 - " + count_500 + "<br>");
document.writeln("Số tờ 200 - " + count_200 + "<br>");
document.writeln("Số tờ 100 - " + count_100 + "<br>");
document.writeln("Số tờ 50 - " + count_50 + "<br>");
document.writeln("Số tờ 20 - " + count_20 + "<br>");
document.writeln("Số tờ 10 - " + count_10 + "<br>");
document.writeln("Số tờ 5 - " + count_5 + "<br>");
document.writeln("Số tờ 2 - " + count_2 + "<br>");
document.writeln("Số tờ 1 - " + count_1 + "<br>");