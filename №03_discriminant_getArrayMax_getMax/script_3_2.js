function getArrayMax(array) {
    let maxArray = array[0];
    for (i = 1; i <= array.length; i++) {
        if (maxArray < array[i]) {
            maxArray = array[i];
        }
    }
    return maxArray;
}

console.log(getArrayMax([12, 4, 7, 5, 2, 10, 44, 55, 53, 88]));


function getMax() {
    let max = arguments[0];
    for (i = 1; i <= arguments.length; i++) {
        if (max < arguments[i]) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(getMax(50, 5, 7, 8, 9, 49));