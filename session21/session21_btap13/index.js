let n = 8;
console.log("a.");
for (let i = n; i > 0; i--) {
    console.log("*".repeat(i));
}
console.log("\nb.");
for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
}
console.log("\nc.");
for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(i));
}
console.log("\nd.");
for (let i = n; i > 0; i--) {
    console.log(" ".repeat(n - i) + "*".repeat(i));
}