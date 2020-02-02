let calculator = (function(x) {
    let result = 0;
    return {
        add: (x) => (result += x),
        plus: (x) => (result += x),
        minus: (x) => (result -= x),
        multiplay: (x) => (result *= x),
        divide: (x) => (result /= x),
        pow: (a) => (result = result ** a),
        sqrt: () => (result = Math.sqrt(result)),
        remainder: (x) => (result %= x),
        plusMinus: () => (result *= (-1)),
        percent: (x) => (result = (result * x / 100)),
        print: () => console.log(result),
        clear: () => (result = 0),

    }
})();

calculator.clear();
calculator.add(9);
calculator.remainder(5);
calculator.print();
calculator.add(9);
calculator.plusMinus();
calculator.print();
calculator.plusMinus();
calculator.print();
calculator.plusMinus();
calculator.print();