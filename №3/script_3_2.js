function getArrayMax(array) {
    let maxArray = array[0];
    for (i = 1; i <= array.length; i++) {
        if (maxArray < array[i]) {
            maxArray = array[i];
        }
    }
    return maxArray;
}

let data = [12, 4, 7, 5, 2, 10, 444, 55, 53, 78];
console.log(getArrayMax(data));


function getMax(a) {
    let max = arguments[0];
    for (i = 1; i <= arguments.length; i++) {
        if (max < arguments[i]) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(getMax(50, 5, 7, 8, 9, 49));