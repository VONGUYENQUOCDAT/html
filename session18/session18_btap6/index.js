let year = parseInt(prompt("Nhập một năm bất kỳ:"));
switch (true) {
    case (year % 400 === 0):
    case (year % 4 === 0 && year % 100 !== 0):
        console.log(`${year} là năm nhuận.`);
        break;
    default:
        console.log(`${year} không phải là năm nhuận.`);
}
