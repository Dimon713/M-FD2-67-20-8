let userSurname = prompt('Введите Вашу Фамилию');
let userName = prompt('Введите Ваше Имя');
let userFatherName = prompt('Введите Ваше Отчество');
let userBirthdayYear = prompt('Введите год своего рождения');
let userBirthdayMonth = prompt('Введите месяц своего рождения');
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
if (userFullYear >= 18) {
    user18 = 'совершеннолетний'
} else {
    user18 = 'несовершеннолетний'
}

if (userChildren === 0) {
    userChildren = 'нет'
}

let result = `Вы ${userSurname} ${userName} ${userFatherName}
Вам ${userFullYear} лет и ${userFullMonth} месяцев
Ваш пол ${userGender}
Вы ${user18}
У Вас ${userChildren} детей`;

console.log(result);