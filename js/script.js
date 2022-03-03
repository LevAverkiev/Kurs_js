'use strict';

const title = document.getElementsByTagName('h1')[0],
    buttonPlus = document.querySelector('.screen-btn'),
    otherItemsPercent = document.querySelectorAll('.other-items.percent'),
    otherItemsNumber = document.querySelectorAll('.other-items.number '),

    inputRange = document.querySelector('.rollback input'),
    inputRangeValue = document.querySelector('.rollback .range-value'),

    startBtn = document.getElementById('start'),
    resetBtn = document.getElementById('reset'),

    total = document.getElementsByClassName('total-input')[0],
    totalCount = document.getElementsByClassName('total-input')[1],
    totalCountOther = document.getElementsByClassName('total-input')[2],
    fullTotalCount = document.getElementsByClassName('total-input')[3],
    totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen')


const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    allCount: 0,
    servicePersentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    init: function () {
        appData.addTitle()

        startBtn.addEventListener('click', appData.allCountScreens)
        buttonPlus.addEventListener('click', appData.addScreenBlock)
        inputRange.addEventListener('input', appData.addRollback)

        screens.forEach((screen) => {
            appData.addScreenEvents(screen);
        });
    },
    addTitle: function () {
        document.title = title.textContent
    },
    allCountScreens: function () {
        if (appData.addScreens() !== true) {
            alert('Не выбран тип или количество экранов')
        } else appData.start();
    },
    start: function () {
        appData.addScreens()
        appData.addServices()
        appData.addPrices()
        appData.showResult()
    },
    showResult: function () {
        total.value = appData.screenPrice
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
        fullTotalCount.value = appData.fullPrice
        totalCount.value = appData.allCount
    },
    addRollback: function () {
        appData.rollback = +inputRange.value;
        inputRangeValue.textContent = appData.rollback + "%";
    },
    addScreens: function () {
        appData.screens.length = 0
        screens = document.querySelectorAll('.screen')

        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent

            appData.screens.push({
                id: index,
                name: selectName,
                count: +input.value,
                price: +select.value * +input.value
            })
        })

        if (appData.screens.find(item => item.price === 0)) {
            return false;
        } else {
            return true;
        }

    },
    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value
            }

        })

        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value
            }

        })
    },
    addScreenBlock: function () {
        const lastIndex = screens.length - 1;
        const cloneScreen = screens[lastIndex].cloneNode(true);
        const input = cloneScreen.querySelector("input");

        appData.addScreenEvents(cloneScreen);
        screens[lastIndex].after(cloneScreen);
        screens = document.querySelectorAll(".screen");
        input.value = '';
    },
    addScreenEvents: function (screen) {
        const select = screen.querySelector("select");
        const input = screen.querySelector("input");

        select.addEventListener("change", () => {
            select.style.borderColor = "";
            select.style.color = "";
        });

        input.addEventListener("input", () => {
            input.style.borderColor = "";
            input.style.color = "";
        });
    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price
        }

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key]
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
        }

        appData.screens.forEach(function (item) {
            appData.allCount += +item.count;
        })

        appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent

        appData.servicePersentPrice = +appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
        totalCountRollback.value = appData.servicePersentPrice
    },
    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePersentPrice);
        console.log(appData.screens);
    }
}

appData.init();