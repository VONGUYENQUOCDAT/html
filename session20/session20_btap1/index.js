let N = Number(prompt("Nhập số N: "));
let sum = 0;
for(let i=1; i<=N; i++){
    sum += i;
}
console.log(`Tổng các số từ 1 đến ${N} là: ${sum}`);