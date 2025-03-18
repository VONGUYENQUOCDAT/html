let date1 = new Date(prompt("Nhập ngày thứ nhất (YYYY-MM-DD):"));
let date2 = new Date(prompt("Nhập ngày thứ hai (YYYY-MM-DD):"));

let timeDiff = Math.abs(date2 - date1);
let dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

document.writeln("Độ lệch là " + dayDiff + " ngày");