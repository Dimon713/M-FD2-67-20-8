function qeepEqual(a, b) {
    if (a === b) return true;

    if (Object.keys(a).length !== Object.keys(b).length) {
        return false
    }

    for (let data in a) {
        let key = data;
        if (key in b && typeof a[key] === typeof b[key] && a[key] === b[key]) {
            continue;
        } else if (typeof a[key] === 'object' && typeof b[key] === 'object' && qeepEqual(a[key], b[key])) {
            continue;
        } else {
            return false
        }
    }
    return true
}



let x = {
    value: {
        a: undefined,
    },
    b: 'abc',
    c: bbb(2),
    d: null,
    e: [1, 2, [1, 2]],
};

let y = {
    value: {
        a: undefined,
    },
    b: 'abc',
    c: bbb(2),
    d: null,
    e: [1, 2, [1, 2]],
};

console.log(qeepEqual(x, y));
console.log(qeepEqual([1, 2, [1, 2]], [1, 2, [1, 2, 3]]));



function bbb(x) {

    return x
}