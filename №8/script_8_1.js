function HashStorageFunc() {
    this.dataBase = {};

    this.addValue = function(key, value) {
        this.dataBase[key] = value;
    }

    this.getValue = function(key) {
        return this.dataBase[key];
    }

    this.deleteValue = function(key) {
        if (this.dataBase[key]) {
            delete this.dataBase[key];
            return true;
        } else {
            return false
        }
    }

    this.getKeys = function() {
        return Object.keys(this.dataBase);
    }
}

let drinkStorage = new HashStorageFunc();
drinkStorage.addValue('Водка', {
    'алкогольный': 'алкогольный',
    'состав': 'вода и этиловый спирт.',
});
drinkStorage.addValue('Пиво', {
    'алкогольный': 'алкогольный',
    'состав': 'вода питьевая, солод пивоваренный ячменный, хмель.',
});
drinkStorage.addValue('Квас', {
    'алкогольный': 'безалкогольный',
    'состав': 'вода, сахар, концентрат квасного сусла, тритикале продовольственная, солод ржаной ферментированный, солод ржаной неферментированный, вода.',
});