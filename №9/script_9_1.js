function HashStorageFunc() {
    this._dataBase = {};

    this.addValue = function(key, value) {
        this._dataBase[key] = value;
    }

    this.getValue = function(key) {
        return this._dataBase[key];
    }

    this.deleteValue = function(key) {
        if (key in this._dataBase) {
            delete this._dataBase[key];
            return true;
        } else {
            return false;
        }
    }

    this.getKeys = function() {
        return Object.keys(this._dataBase);
    }
}

function Country() {
    HashStorageFunc.call(this);

    this.geInfo = function(key) {
        console.log(`Страна: ${key}. Столица - ${this._dataBase[key]}`);
    }

    let parentEnable = this.getKeys;
    this.getKeys = function() {
        parentEnable.call(this);
        console.log(`Выберите страну из списка: ${Object.keys(this._dataBase)}.`);
    }

}

let country = new Country();

country.addValue('Германия', 'Берлин', );
country.addValue('Беларусь', 'Минск', );
country.addValue('Россия', 'Москва', );


function Students() {
    HashStorageFunc.call(this);

    this.getInfo = function(key) {
        console.log(`Студент: ${key}. Пол - ${this._dataBase[key]}`);
    }

    this.getPiecesGenger = function(value) {
        let n = 0;
        for (let key in this._dataBase) {
            if (this._dataBase[key] === value) {
                n++;
            }
        }
        if (value === 'Ж') {
            console.log(`Количество девушек: ${n}`);
        } else {
            console.log(`Количество парней: ${n}`);
        }
    }

    let parentEnable = this.getKeys;
    this.getKeys = function() {
        parentEnable.call(this);
        let n = 0;
        for (let key in this._dataBase) {
            n++;
        }
        console.log(`Общий список группы: ${Object.keys(this._dataBase)}.
Количество людей в группе ${n}`);
    }
}

let students = new Students();

students.addValue('Иванов', 'М', );
students.addValue('Петров', 'М', );
students.addValue('Козлов', 'М', );
students.addValue('Петрова', 'Ж', );
students.addValue('Сидорова', 'Ж', );