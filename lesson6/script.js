// do {
//     login = prompt('Login')
//     password = prompt('password')
// } while (login !== 'admin' || password !== 'admin')


// do {
//     login = prompt('Login')
// } while (login !== 'admin')
//
// do {
//     password = prompt('password')
// } while (password !== 'admin')


let money = 10;
let bid = 2;
let isContinue = null;
do {
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    let tryUser = 1;
    while (tryUser <= 3) {
        let userNumber = parseInt(prompt(`Вгадай від 1 до 4, спроба: ${tryUser}`));
        if (userNumber === randomNumber) {
            if (tryUser === 1) {
                money += 5;
            } else if (tryUser === 2) {
                money += 3;
            } else {
                money += 1;
            }
            break;
        } else {
            tryUser++;
        }
    }
    money -= bid;
    isContinue = prompt(`граємо далі? (y/n) Баланс: ${money}`);
} while (isContinue !== 'n');
alert(`Ваш кінцевий баланс ${money}`);

