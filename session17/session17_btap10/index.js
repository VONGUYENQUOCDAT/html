let number = Number(prompt("Nhập vào một số bất kì: "));
let result = Number.isInteger(Math.sqrt(number)) ? `${number} là số chính phương` : `${number} không phải số chính phương`;
document.writeln(result);