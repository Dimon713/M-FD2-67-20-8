let inRange = (min, max) => {
    return element => element >= min && element <= max;
}

let arr = [3, 5, 7, 9, 0];
let newArr = arr.filter(inRange(2, 7));
console.log(newArr);


console.log(['1', '15'].map(parseInt));
console.log(['1', '15'].map(element => parseInt(element)));