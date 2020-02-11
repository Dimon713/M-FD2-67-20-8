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

class Students extends HashStorageFunc {
    constructor() {
        super();
    }

    getKeys(value) {
        let n = 0;
        for (let key in this._dataBase) {
            if (this._dataBase[key] === value) {
                n++;
            }
        }
        return n;
    }
}

let students = new Students();

students.addValue('Иванов', 'М', );
students.addValue('Петров', 'М', );
students.addValue('Козлов', 'М', );
students.addValue('Петрова', 'Ж', );
students.addValue('Сидорова', 'Ж', );