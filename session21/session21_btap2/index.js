let chan = 0;
let le= 0;
for (let i = 0; i < 5; i++) {
    let num = Number(prompt(`Nhập số thứ ${i + 1}:`));
    if (num % 2 !== 0) {
        le++;
    }else{
        chan++;
    }
}
console.log("Tổng các số lẻ là:", le);
console.log("Tổng các số chẵn là:", chan);
alert(`Tổng các số lẻ là: ${le}`);
alert(`Tổng các số chẵn là: ${chan}`);