let rollback = 10;
let adaptive = true;

let fullPrice;

let title = prompt('Как называется наш проект?');
let screens = prompt('Какие типы экранов нужно разработать?(простые, сложные, интерактивные)');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = prompt('Сколько это будет стоить?');
let servicePercentPrice = Math.ceil(fullPrice - (fullPrice / 100 * rollback));

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return 'Даем скидку в 10%'
    } else if (price >= 15000 && price < 30000) {
        return 'Даем скидку в 5%'
    } else if (price >= 0 && price < 15000) {
        return 'Скидка не предусмотрена'
    } else {
        return 'Что-то пошло не так'
    }
}

//кодинг 4 урока - Функции

let allServicePrices = function getAllServicePrices() {
    return +servicePrice1 + +servicePrice2;
}

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

function getFullPrice() {
    return +screenPrice + +allServicePrices();
}

function getTitle() {
    let titleNoSpace = title.trim();
    return titleNoSpace[0].toUpperCase() + titleNoSpace.substring(1).toLowerCase();
}

const getServicePercentPrices = function () {
    return Math.ceil(fullPrice - (fullPrice / 100 * rollback));
}

fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices()

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log('Разработать типы экранов: ' + screens);
console.log(getRollbackMessage(fullPrice));
console.log('Итоговая стоимость за вычетом процента отката: ' + servicePercentPrice);