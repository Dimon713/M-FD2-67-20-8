function uniArray(array) {
    result = [array[0]];
    for (let i = 1; i < array.length; i++) {
        let n = 0; //counter
        for (let j = 0; j < result.length; j++) {
            if (array[i] === result[j]) {
                n++;
                break;
            }
        }
        if (!n) {
            result[result.length] = array[i];
        }
    }
    return result;
}
console.log(uniArray([1, 1, 2, 3, 5, 5, 5, 6]));