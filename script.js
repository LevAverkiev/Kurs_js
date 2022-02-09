// "Загадывание случайного числа от 1 до 100"

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

let numRandom = Math.ceil(Math.random() * 100)

const start = function () {
    const game = function () {
        let numUser = prompt('Угадай число от 1 до 100')

        if (numUser === null) {
            alert('Игра окончена!');
            return;
        }
        if (isNumber(numUser)) {

            numUser = +numUser

            if (numUser > numRandom) {
                alert('Загаданное число меньше');
                game();
            } else if (numUser < numRandom) {
                alert('Загаданное число больше');
                game();
            } else {
                alert('Поздравляю, Вы угадали!!!')
            }
        } else {
            alert('Введите число');
            game();
        }

    };
    game();
};
start();