'use strict';
const title = document.getElementsByTagName('h1'),
    handlerBtn = document.getElementsByClassName('.handler_btn'),
    screenBtn = document.querySelector('.screen-btn'),
    otherItemsPercent = document.querySelectorAll('.other-items.percent'),
    otherItemsNumber = document.querySelectorAll('.other-items.number '),
    typeRange = document.querySelector('.rollback  input[type="range"]'),
    spanRangeValue = document.querySelector('.rollback  span'),
    totalInput = document.getElementsByClassName('total-input');

let screen = document.querySelectorAll('.screen');


const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePersentPrice: 0,
    services: {},
    start: function () {
        appData.asking()
        appData.addPrices()
        appData.getFullPrice()
        appData.getServicePercentPrice()
        appData.getTitle()
        appData.logger()
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num) && num != ' '
    },
    isString: function (str) {
        return isNaN(parseFloat(str) && !isFinite(str)) && str != ' '
    },
    asking: function () {

        do {
            appData.title = prompt('Как называется ваш проект?')
        } while (!appData.isString(appData.title));

        for (let i = 0; i < 2; i++) {
            let name
            let price = 0

            do {
                name = prompt('Какие типы экранов нужно разработать?')
            } while (!appData.isString(name))

            do {
                price = prompt('Сколько будет стоить данная работа?')
            } while (!appData.isNumber(price))

            appData.screens.push({
                id: i,
                name: name,
                price: price
            })

        }

        for (let i = 0; i < 2; i++) {
            let name
            let price = 0

            do {
                name = prompt('Какой дополнительный тип услуги нужен?')
            } while (!appData.isString(name))

            do {
                price = prompt('Сколько это будет стоить?')
            } while (!appData.isNumber(price))

            appData.services[name] = +price
        }

        appData.adaptive = confirm('Нужен ли адаптив на сайте?')
    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price
        }

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key]
        }
    },
    getFullPrice: function () {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices
    },
    getServicePercentPrice: function () {
        appData.servicePersentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },
    getTitle: function () {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
    },
    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return 'Даем скидку в 10%'
        } else if (price >= 15000 && price < 30000) {
            return 'Даем скидку в 5%'
        } else if (price >= 0 && price < 15000) {
            return 'Скидка не предусмотрена'
        } else {
            return 'Что-то пошло не так'
        }
    },
    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePersentPrice);
        console.log(appData.screens);
    }
}

appData.start();

console.log(spanRangeValue);