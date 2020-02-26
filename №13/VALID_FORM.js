let form1 = document.forms.form1;
let developerName = form1.developerName;
let siteName = form1.siteName;
let Url = form1.Url;
let start = form1.start;
let visitors = form1.visitors;
let email = form1.email;
let rubric = form1.rubric;
let public = form1.public;
let reviews = form1.reviews;
let about = form1.about;

let allMessage = {
    developerName: [
        'developerErr', 'Введите ФИО', '',
    ],
    siteName: [
        'sitenameErr', 'Введите название сайта', '',
    ],
    Url: [
        'UrlErr', 'Введите адрес сайта', '',
    ],
    start: [
        'startErr', 'Введите дату запуска сайта', '',
    ],
    visitors: [
        'visitorsErr', 'Введите количество посетителей', '',
    ],
    email: [
        'emailErr', 'Введите почту для связи', '',
    ],
    rubric: [
        'rubricErr', 'Выберите рубрику', '',
    ],
    public: [
        'publicErr', 'Выберите поле', '',
    ],
    reviews: [
        'reviewsErr', 'Разрешите отзывы', ' ',
    ],
    about: [
        'aboutErr', 'Опишите свой сайт', '',
    ],
}

form1.oninput = (event) => validate(event.target);
form1.addEventListener('change', validate.bind(null, public));
form1.addEventListener('submit', validateAll);

function validate(field) {

    if (field === public && !field.value) { //radio
        document.querySelector(`.${allMessage['public'][0]}`).textContent = `${allMessage['public'][1]}`;
        return false;
    } else if (field === public && field.value) {
        document.querySelector(`.${allMessage['public'][0]}`).textContent = `${allMessage['public'][2]}`;
        return true;
    }

    switch (field.type) {
        case 'email':
            if (field.value.indexOf('@') === -1 || field.value.indexOf('.') === -1) {
                field.classList.add('err');
                errMessage(field, 1);
                return false;
            } else {
                field.classList.remove('err');
                errMessage(field, 2);
                return true;
            }
        case 'text':
        case 'date':
        case 'number':
        case 'textarea':
            if (!field.value) {
                field.classList.add('err');
                errMessage(field, 1);
                return false;
            } else {
                field.classList.remove('err');
                errMessage(field, 2)
                return true;
            }
        case 'checkbox':
            if (!field.checked) {
                errMessage(field, 1);
                return false;
            } else {
                errMessage(field, 2);
                return true;
            }
        case 'select-one':
            if (field.value === "0") {
                field.classList.add('err');
                errMessage(field, 1);
                return false;
            } else {
                field.classList.remove('err');
                errMessage(field, 2);
                return true;
            }
    }
};

function errMessage(field, number) {
    document.querySelector(`.${allMessage[`${field.id}`][0]}`).textContent = `${allMessage[`${field.id}`][number]}`;
}

function validateAll() {
    let allField = [developerName, siteName, Url, start, visitors, email, rubric, public, reviews, about];
    let count = 0;
    allField.forEach(item => {
        if (!validate(item)) {
            count++;
        }
    });
    document.querySelector('.err').focus();
    if (count) {
        event.preventDefault();
    }
}