let title = 'My Project';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 95;
let rollback = 51;
let fullPrice = 100000000;
let adaptive = true;

title = prompt('Как называется наш проект?');
console.log('Мой проект называется: ' + title);

screens = prompt('Какие типы экранов нужно разработать?(простые, сложные, интерактивные)');
console.log('Нужно разработать ' + screens + ' типы экранов');

screenPrice = +prompt('Сколько будет стоить данная работа?');
console.log('Данная работа будет стоит ' + screenPrice + ' рублей');

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = prompt('Сколько это будет стоить?');
console.log('Дополнительный тип услуги: ' + service1 + '. Это будет стоить: ' + servicePrice1 +
    '. Дополнительный тип услуги: ' + service2 + '. Это будет стоить ' + servicePrice2 + '.');

fullPrice = parseFloat(screenPrice) + parseFloat(servicePrice1) + parseFloat(servicePrice2);
console.log('Итоговая стоимость работы: ' + fullPrice);

let servicePercentPrice = Math.ceil(fullPrice - 100);
console.log('Итоговая стоимость проекта: ' + servicePercentPrice);



if (fullPrice >= 30000) {
    console.log('Даем скидку в 10%');
} else if (fullPrice >= 15000 && fullPrice < 30000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice > 0 && fullPrice < 15000) {
    console.log('Скидка не предусмотрена');
} else {
    console.log('Что-то пошло не так');
}