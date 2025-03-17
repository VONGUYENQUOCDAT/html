var math=Number(prompt("Nhập điểm toán: "));
var physics=Number(prompt("Nhập điểm lý: "));
var chemistry=Number(prompt("Nhập điểm hóa: "));
var average=(math+physics+chemistry)/3;
average = average.toFixed(2);
document.writeln("Điểm trung bình của bạn là: "+average+"");