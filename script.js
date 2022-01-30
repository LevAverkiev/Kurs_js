let num = 266219;
let arr = String(num).split("");
let multiplication = 1;
let degree;
let numTwo;

for (let i = 0; i < arr.length; i++) {
    multiplication *= Number(arr[i]);
}
console.log(multiplication);

degree = multiplication ** 3;
console.log(degree);

numTwo = Number(String(degree).substr(0, 2));
console.log(numTwo);