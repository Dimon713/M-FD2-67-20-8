let userSurname = prompt('Введите Вашу Фамилию')
let userName = prompt('Введите Ваше Имя');
let userFatherName = prompt('Введите Ваше Отчество');

let userBirthdayYear;
do {
    userBirthdayYear = prompt('Введите год своего рождения');
    if (isNaN(userBirthdayYear)) {
        alert("Неверный тип ввода данных. Пожалуйста, введите год своего рождения заново.");
    } else if (!userBirthdayYear) {
        alert("Пожалуйста, введите год своего рождения.");
    }
} while (isNaN(userBirthdayYear) || !userBirthdayYear);

let userBirthdayMonth;
do {
    userBirthdayMonth = prompt('Введите месяц своего рождения');
    if (isNaN(userBirthdayMonth)) {
        alert("Неверный тип ввода данных. Пожалуйста, введите год своего рождения заново.");
    } else if (!userBirthdayMonth) {
        alert("Пожалуйста, введите год своего рождения.");
    }
} while (isNaN(userBirthdayMonth) || !userBirthdayMonth);

let userGender = prompt('Введите Ваш пол');
let userChildren = prompt('Сколько у Вас детей?');

let nowYear = 2020;
let nowMonth = 1;
let userFullYear = nowYear - Number(userBirthdayYear) - 1;
let userFullMonth = 12 - Number(userBirthdayMonth) + nowMonth;

if (userFullMonth >= 12) {
    userFullYear += 1;
    userFullMonth -= 12;
}

let user18;
user18 = userFullYear >= 18 ? 'совершеннолетний' : 'несовершеннолетний';

if (userChildren === 0) {
    userChildren = 'нет'
}

let result = `Вы ${userSurname} ${userName} ${userFatherName}
Вам ${userFullYear} лет и ${userFullMonth} месяцев
Ваш пол ${userGender}
Вы ${user18}
У Вас ${userChildren} детей`;

console.log(result);