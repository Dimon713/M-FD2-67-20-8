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

HashStorageFunc.prototype.getCapital = function(key) {
    return [key, this._dataBase[key]];
}

HashStorageFunc.prototype.deleteAll = function() {
    return this._dataBase = {};
}

function Country() {
    HashStorageFunc.apply(this, arguments);
}

Country.prototype = Object.create(HashStorageFunc.prototype);

Country.prototype.getKeys = function() {
    HashStorageFunc.prototype.getKeys.call(this);
    let n = 0;
    for (let key in this._dataBase) {
        n++;
    }
    return Object.keys(this._dataBase).concat(n);
}

let country = new Country();

country.addValue('Германия', 'Берлин', );
country.addValue('Беларусь', 'Минск', );
country.addValue('Россия', 'Москва', );