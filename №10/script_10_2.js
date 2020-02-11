class HashStorageFunc {
    constructor() {
        this._dataBase = {};
    }

    addValue = function(key, value) {
        this._dataBase[key] = value;
    }

    getValue = function(key) {
        return this._dataBase[key];
    }

    deleteValue = function(key) {
        if (key in this._dataBase) {
            delete this._dataBase[key];
            return true;
        } else {
            return false;
        }
    }

    getKeys = function() {
        return Object.keys(this._dataBase);
    }

    getPieses = function() {
        let n = 0;
        for (let key in this._dataBase) {
            n++;
        }
        return n;
    }
    deleteAll = function() {
        return this._dataBase = {};
    }
}

class Students extends HashStorageFunc {
    constructor() {
        super();
    }

    getKeys = function(value) {
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