let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let countMap = {};
for (let num of numbers) {
    countMap[num] = (countMap[num] || 0) + 1;
}
let maxCount = 0;
let mostFrequent = null;
for (let num in countMap) {
    let count = countMap[num];
    if (count > maxCount || (count === maxCount && num < mostFrequent)) {
        maxCount = count;
        mostFrequent = Number(num);
    }
}
console.log("Phần tử xuất hiện nhiều nhất:", mostFrequent);