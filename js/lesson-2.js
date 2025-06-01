// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).


// let styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');

// for (const style of styles) {
//     if (style === 'blues') {
//         style = 'classic';
//     }
// }

// console.log(styles);

// function logItems(array) {
//     for (let i = 1, i < array.length, i++) {
//         console.log('array[i] - array')
//     }
// }


// logItems();


// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві - виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє - виводить повідомлення: "User not found".


// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//     const login = prompt("Введіть логін");
//         if (login === logins[i]) {
//         alert(`Welcome, ${login}!`)
//         } else {
//             alert = "User not found";
// }
// }

// checkLogin(logins);


// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.


// function caclculateAverage() {
//     let totalArg = 0;
//     for (arg of arguments) {
//         if (typeof arg === 'number') {
//             totalArg += arg;
//         }
//     }

//     return argAverage = totalArg / arguments.length;
// }

// caclculateAverage();

// console.log(caclculateAverage(6, 7, 10, 5));



// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].


const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

function getNewArr(arr) {
    let newArr = [];
    for (let i = 0; i < someArr.length - 1; i++) {
        newArr.push(arr[i] + arr[i + 1]);
    }
    return newArr;
}

console.log(getNewArr(someArr));

