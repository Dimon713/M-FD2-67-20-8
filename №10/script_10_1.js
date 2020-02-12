function HashStorageFunc() {
    this._dataBase = {};
}

HashStorageFunc.prototype.addValue = function(key, value) {
    this._dataBase[key] = value;
}

HashStorageFunc.prototype.getValue = function(key) {
    return this._dataBase[key];
}

HashStorageFunc.prototype.deleteValue = function(key) {
    if (key in this._dataBase) {
        delete this._dataBase[key]
        return true;
    } else {
        return false;
    }
}

HashStorageFunc.prototype.getKeys = function() {
    return Object.keys(this._dataBase);
}



function AddClassA() {
    HashStorageFunc.apply(this, arguments);
}

AddClassA.prototype = Object.create(HashStorageFunc.prototype);

AddClassA.prototype.getKeys = function() {
    HashStorageFunc.prototype.getKeys.call(this);
    let n = 0;
    for (let key in this._dataBase) {
        n++;
    }
    return Object.keys(this._dataBase).concat(n);
}

AddClassA.prototype.getCapital = function(key) {
    return [key, this._dataBase[key]];
}

AddClassA.prototype.deleteAll = function() {
    return this._dataBase = {};
}

let country = new AddClassA();

country.addValue('Германия', 'Берлин', );
country.addValue('Беларусь', 'Минск', );
country.addValue('Россия', 'Москва', );

function AddClassB() {
    HashStorageFunc.apply(this, arguments);
}

AddClassB.prototype = Object.create(HashStorageFunc.prototype);

AddClassB.prototype.getPieses = function() {
    let n = 0;
    for (let key in this._dataBase) {
        n++;
    }
    return n;
}

AddClassB.prototype.getKeys = function(value) {
    HashStorageFunc.prototype.getKeys.call(this);
    let n = 0;
    for (let key in this._dataBase) {
        if (this._dataBase[key] === value) {
            n++;
        }
    }
    return n;
}

let students = new AddClassB();

students.addValue('Иванов', 'М', );
students.addValue('Петров', 'М', );
students.addValue('Козлов', 'М', );
students.addValue('Петрова', 'Ж', );
students.addValue('Сидорова', 'Ж', );