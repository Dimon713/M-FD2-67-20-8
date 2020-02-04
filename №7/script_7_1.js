let user = {
    name: 'Дмитрий',
    age: 33,
};

function info(gender, status, n) {
    console.log(`Имя: ${this.name} возраст: ${this.age} пол: ${gender} семейный статус: ${status} количество детей ${n}`);
}


function myBind(func, context, ...arg1) {

    return function(...arg2) {
        func.apply(context, arg1.concat(arg2));
    }
}

myBind(info, user, 'мужской', 'женат', 1)();
myBind(info, user, 'мужской')('женат', 1);
myBind(info, user)('мужской', 'женат', 1);


// info.bind(user, 'мужской', 'женат', 1)();