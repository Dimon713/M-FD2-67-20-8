let form1 = document.forms.form1;
let developerName = form1.developer;
let siteName = form1.sitename;
let Url = form1.Url;
let start = form1.start;
let visitors = form1.visitors;
let email = form1.email;
let rubric = form1.rubric;
let public = form1.radio;
let reviews = form1.reviews;
let about = form1.about;

developerName.addEventListener('blur', validate.bind(null, developerName));
siteName.addEventListener('blur', validate.bind(null, siteName));
Url.addEventListener('blur', validate.bind(null, Url));
start.addEventListener('blur', validate.bind(null, start));
visitors.addEventListener('blur', validate.bind(null, visitors));
email.addEventListener('blur', validate.bind(null, email));
rubric.addEventListener('blur', validate.bind(null, rubric));
form1.addEventListener('change', validate.bind(null, public));
reviews.addEventListener('blur', validate.bind(null, reviews));
about.addEventListener('blur', validate.bind(null, about));
form1.addEventListener('submit', validateAll);

function validate(field) {

    if (field === public && !field.value) { //radio
        addErrMessage(field);
        return false;
    } else if (field === public && field.value) {
        deleteErrMessage(field);
        return true;
    }

    switch (field.type) {
        case 'text':
        case 'date':
        case 'email':
        case 'number':
        case 'textarea':
            if (!field.value) {
                field.classList.add('err');
                addErrMessage(field);
                return false;
            } else {
                field.classList.remove('err');
                deleteErrMessage(field)
                return true;
            }
        case 'checkbox':
            if (!field.checked) {
                addErrMessage(field);
                return false;
            } else {
                deleteErrMessage(field);
                return true;
            }
        case 'select-one':
            if (field.value === "0") {
                field.classList.add('err');
                addErrMessage(field);
                return false;
            } else {
                field.classList.remove('err');
                deleteErrMessage(field)
                return true;
            }
    }
};

function addErrMessage(field) {

    switch (field) {
        case developerName:
            document.querySelector('.developerErr').textContent = 'Введите ФИО';
            break;
        case siteName:
            document.querySelector('.sitenameErr').textContent = 'Введите название сайта';
            break;
        case Url:
            document.querySelector('.UrlErr').textContent = 'Введите адрес сайта';
            break;
        case start:
            document.querySelector('.startErr').textContent = 'Введите дату запуска сайта';
            break;
        case visitors:
            document.querySelector('.visitorsErr').textContent = 'Введите количество посетителей';
            break;
        case email:
            document.querySelector('.emailErr').textContent = 'Введите почту для связи';
            break;
        case rubric:
            document.querySelector('.rubricErr').textContent = 'Выберите рубрику';
            break;
        case public:
            document.querySelector('.radioErr').textContent = 'Выберите поле';
            break;
        case reviews:
            document.querySelector('.reviewsErr').textContent = 'Разрешите отзывы';
            break;
        case about:
            document.querySelector('.aboutErr').textContent = 'Опишите свой сайт';
            break;
    }
}

function deleteErrMessage(field) {
    switch (field) {
        case developerName:
            document.querySelector('.developerErr').textContent = '';
            break;
        case siteName:
            document.querySelector('.sitenameErr').textContent = '';
            break;
        case Url:
            document.querySelector('.UrlErr').textContent = '';
            break;
        case start:
            document.querySelector('.startErr').textContent = '';
            break;
        case visitors:
            document.querySelector('.visitorsErr').textContent = '';
            break;
        case email:
            document.querySelector('.emailErr').textContent = '';
            break;
        case rubric:
            document.querySelector('.rubricErr').textContent = '';
            break;
        case public:
            document.querySelector('.radioErr').textContent = '';
            break;
        case reviews:
            document.querySelector('.reviewsErr').textContent = '';
            break;
        case about:
            document.querySelector('.aboutErr').textContent = '';
            break;
    }
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





// function addErrMessage(field) {
//     console.log(field);
//     let y = allField[`${field}`][0];
//     document.querySelector(`.${y}`).textContent = 'Введите ФИО ';


// let allField = {
//     developerName: [
//         'developerErr', 'Введите ФИО', '',
//     ],
//     siteName: [
//         'sitenameErr', 'Введите название сайта', '',
//     ],
//     Url: [
//         'UrlErr', 'Введите адрес сайта', '',
//     ],
//     start: [
//         'startErr', 'Введите дату запуска сайта', '',
//     ],
//     visitors: [
//         'startErr', 'Введите количество посетителей', '',
//     ],
//     email: [
//         'emailErr', 'Введите почту для связи', '',
//     ],
//     rubric: [
//         'rubricErr', 'Выберите рубрику', '',
//     ],
//     public: [
//         'radioErr', 'Выберите поле', '',
//     ],
//     reviews: [
//         'radioErr', 'Выберите поле', '',
//     ],
//     about: [
//         'aboutErr', 'Опишите свой сайт', '',
//     ],
// }