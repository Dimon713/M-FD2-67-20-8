function solveEquation(a, b, c) {
    let result = [];
    let D = b ** 2 - 4 * a * c;

    if (!a) {
        return result;
    } else if (D > 0) {
        result[4] = ((-b + D ** 0.5) / (2 * a)).toFixed(3);
        result[5] = ((-b - D ** 0.5) / (2 * a)).toFixed(3);
    } else if (D < 0) {
        result[4] = undefined;
    } else {
        result[4] = -b / (2 * a);
    }
    result[0] = D;
    result[1] = a;
    result[2] = b;
    result[3] = c;
    return result;
}

function doFormatting(dataFormatting) {
    if (!arguments.length) {
        console.log('Число "а" не может быть равно 0. Измените число "а" и попробуйте заново')
    } else if (arguments[5]) {
        console.log(`Уравнение: ${arguments[1]}x2+${arguments[2]}x+${arguments[3]}=0
Дискриминант квадратного уравнения D=${arguments[0]}
Так как дискриминант больше нуля то, квадратное уравнение имеет два корня:
x1=${arguments[4]}
x2=${arguments[5]}`);
    } else if (arguments[4]) {
        console.log(`Уравнение: ${arguments[1]}x2+${arguments[2]}x+${arguments[3]}=0
Дискриминант квадратного уравнения D=${arguments[0]}
Так как дискриминант равень нулю то, квадратное уравнение имеет один корень: 
x=${arguments[4]}`);
    } else {
        console.log(`Уравнение: ${arguments[1]}x2+${arguments[2]}x+${arguments[3]}=0
Дискриминант квадратного уравнения D=${arguments[0]}
Так как дискриминант меньше нуля то, уравнение не имеет корней`);
    }
}

let a = Number(prompt('Введите значение а'));
let b = Number(prompt('Введите значение b'));
let c = Number(prompt('Введите значение c'));

doFormatting(...solveEquation(a, b, c));