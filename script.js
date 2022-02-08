// "Загадывание случайного числа от 1 до 100"

let numRandom = Math.ceil(Math.random() * 100)

function isNum(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

function userGuessNumber() {
    let numUser = prompt('Угадай число от 1 до 100')

    if (numUser === null) {
        return alert('Игра окончена')
    }

    if (isNum(numUser)) {
        numUser = +numUser

        if (numUser > numRandom) {
            alert('Загаданное число меньше')
        } else if (numUser < numRandom) {
            alert('Загаданное число больше')
        } else if (numUser === numRandom) {
            alert('Поздравляю, Вы угадали!!!')
            return numUser;
        }
    } else {
        alert('Введи число!')
    }
    return userGuessNumber()
}

console.log(userGuessNumber())