let title;
let screens;
let screenPrice;
let rollback;
let fullPrice;
let adaptive;

title = 'My Project';
screens = 'Простые, Сложные, Интерактивные';
screenPrice = 95;
rollback = 51;
fullPrice = 100000000;
adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");
console.log(screens.toLowerCase().split(", "));
console.log("Процент отката посреднику за работу " + (fullPrice * (rollback / 100)));