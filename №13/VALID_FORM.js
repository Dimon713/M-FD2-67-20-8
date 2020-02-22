function validDeveloper() {
    if (document.forms.form1.developer.value == '') {
        document.forms.form1.developer.className = 'feedback-input err';
        document.querySelector('.developerErr').textContent = 'Введите ФИО';
        return false;
    } else {
        document.forms.form1.developer.className = 'feedback-input';
        document.querySelector('.developerErr').textContent = '';
        return true;
    }
};

function validSiteName() {
    if (document.forms.form1.sitename.value == "") {
        document.forms.form1.sitename.className = 'feedback-input err';
        document.querySelector('.sitenameErr').textContent = 'Введите название сайта';
        return false;
    } else {
        document.forms.form1.sitename.className = 'feedback-input';
        document.querySelector('.sitenameErr').textContent = '';
        return true;
    }
};

function validUrl() {
    if (document.forms.form1.Url.value.indexOf(".") < 1) {
        document.forms.form1.Url.className = 'feedback-input err';
        document.querySelector('.UrlErr').textContent = 'Введите адрес сайта';
        return false;
    } else {
        document.forms.form1.Url.className = 'feedback-input';
        document.querySelector('.UrlErr').textContent = '';
        return true;
    }
};

function validStart() {
    if (document.forms.form1.start.value == "") {
        document.forms.form1.start.className = 'feedback-input little err';
        document.querySelector('.startErr').textContent = 'Введите дату запуска сайта';
        return false;
    } else {
        document.forms.form1.start.className = 'feedback-input little';
        document.querySelector('.startErr').textContent = '';
        return true;
    }
};

function validVisitors() {
    if (document.forms.form1.visitors.value == "") {
        document.forms.form1.visitors.className = 'feedback-input persons err';
        document.querySelector('.visitorsErr').textContent = 'Введите количество посетителей';
        return false;
    } else {
        document.forms.form1.visitors.className = 'feedback-input persons';
        document.querySelector('.visitorsErr').textContent = '';
        return true;
    }
};

function validEmail() {
    if (document.forms.form1.email.value.indexOf("@") < 1) {
        document.forms.form1.email.className = 'feedback-input err';
        document.querySelector('.emailErr').textContent = 'Введите почту для связи';
        return false;
    } else {
        document.forms.form1.email.className = 'feedback-input';
        document.querySelector('.emailErr').textContent = '';
        return true;
    }
};

function validRubric() {
    if (document.forms.form1.rubric.value === "0") {
        document.forms.form1.rubric.className = 'feedback-input rubric err';
        document.querySelector('.rubricErr').textContent = 'Выберите рубрику';
        return false;
    } else {
        document.forms.form1.rubric.className = 'feedback-input rubric';
        document.querySelector('.rubricErr').textContent = '';
        return true;
    }
};

function validPublic() {
    if (document.forms.form1.radio.value === "") {
        document.querySelector('.radioErr').textContent = 'Выберите поле';
        return false;
    } else {
        document.querySelector('.radioErr').textContent = '';
        return true;
    }
};

function validReviews() {
    if (!document.getElementById("reviews").checked) {
        document.querySelector('.reviewsErr').textContent = 'Разрешите отзывы';
        return false;
    } else {
        document.querySelector('.reviewsErr').textContent = '';
        return true;
    }
};

function validAbout() {
    if (document.forms.form1.about.value === "") {
        document.forms.form1.about.className = 'feedback-textarea err';
        document.querySelector('.aboutErr').textContent = 'Опишите свой сайт';
        return false;
    } else {
        document.forms.form1.about.className = 'feedback-textarea';
        document.querySelector('.aboutErr').textContent = '';
        return true;
    }
};

function validAll() {
    let validArr = [validDeveloper(), validSiteName(), validUrl(), validStart(), validVisitors(), validEmail(), validRubric(), validPublic(), validReviews(), validAbout()];
    let count = 0;
    validArr.forEach((item) => {
        if (!item) {
            count++;
        }
    });
    document.querySelector('.err').focus();
    if (count) {
        event.preventDefault();
    }
}


let form1 = document.forms.form1;
form1.developer.addEventListener('blur', validDeveloper);
form1.sitename.addEventListener('blur', validSiteName);
form1.Url.addEventListener('blur', validUrl);
form1.start.addEventListener('blur', validStart);
form1.visitors.addEventListener('blur', validVisitors);
form1.email.addEventListener('blur', validEmail);
form1.rubric.addEventListener('blur', validRubric);
form1.about.addEventListener('blur', validAbout);
form1.addEventListener('submit', validAll);