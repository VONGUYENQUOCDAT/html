let result = “javascript” + 5;
// javascript5 vì javascript là chuỗi nên nó sẽ nối chuỗi 5 vào cuối chuỗi javascript
let result = “javascript” - 1;
// NaN vì javascript không phải là số nên không thể thực hiện phép trừ
let result = “3” + 2;
// 32 vì 3 là chuỗi nên nó sẽ nối chuỗi 2 vào cuối chuỗi 3
let result = “5” - 4;
// 1 vì 5 và 4 là số nên nó sẽ thực hiện phép trừ
let result = isNaN( “123”);
// false vì 123 là số nên không phải là NaN
let result = “5” * 2;
// 10 vì 5 và 2 là số nên nó sẽ thực hiện phép nhân
let result = isNaN(“hello”);
// true vì hello không phải là số nên là NaN
let result = “hello” - 1;
// NaN vì hello không phải là số nên không thể thực hiện phép trừ
let result = Number.isNaN("123");
// false vì 123 là số nên không phải là NaN
let result = Number.isNaN(NaN);
// true vì NaN là NaN