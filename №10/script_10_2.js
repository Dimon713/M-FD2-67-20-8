class HashStorageFunc {
    constructor() {
        this._dataBase = {};
    }

    addValue(key, value) {
        this._dataBase[key] = value;
    }

    getValue(key) {
        return this._dataBase[key];
    }

    deleteValue(key) {
        if (key in this._dataBase) {
            delete this._dataBase[key];
            return true;
        } else {
            return false;
        }
    }

    getKeys() {
        return Object.keys(this._dataBase);
    }
}

class AddClassA extends HashStorageFunc {
    constructor() {
        super();
    }

    getKeys(value) {
        super.getKeys(value);
        let n = 0;
        for (let key in this._dataBase) {
            if (this._dataBase[key] === value) {
                n++;
            }
        }
        return n;
    }

    getCapital = function(key) {
        return [key, this._dataBase[key]];
    }

    deleteAll() {
        return this._dataBase = {};
    }
}

let country = new AddClassA();

country.addValue('Германия', 'Берлин', );
country.addValue('Беларусь', 'Минск', );
country.addValue('Россия', 'Москва', );


class AddClassB extends HashStorageFunc {
    constructor() {
        super();
    }

    getKeys(value) {
        super.getKeys(value);
        let n = 0;
        for (let key in this._dataBase) {
            if (this._dataBase[key] === value) {
                n++;
            }
        }
        return n;
    }

    getPieses() {
        let n = 0;
        for (let key in this._dataBase) {
            n++;
        }
        return n;
    }

    deleteAll() {
        return this._dataBase = {};
    }
}

let students = new AddClassB();

students.addValue('Иванов', 'М', );
students.addValue('Петров', 'М', );
students.addValue('Козлов', 'М', );
students.addValue('Петрова', 'Ж', );
students.addValue('Сидорова', 'Ж', );