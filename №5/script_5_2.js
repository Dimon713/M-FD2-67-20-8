function qeepEqual(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length) {
        return false
    }

    for (let data in a) {
        let key = data;
        if (key in b && a[key] === b[key]) {
            continue;
        } else if (key in b && typeof a[key] === 'object' && typeof b[key] === 'object' && qeepEqual(a[key], b[key])) {
            continue;
        } else if (key in b && typeof a[key] === 'function' && typeof b[key] === 'function' && a[key].toString() === b[key].toString()) {
            continue
        } else if (key in b && typeof a[key] === 'null' && typeof b[key] === 'null') {
            continue
        } else {
            return false
        }
    }
    return true
}

let x = {
    value: {
        a: 13
    },
    b: 'abc',
    c: (n) => n * 2,
    d: null,
};

let y = {
    value: {
        a: 13
    },
    b: 'abc',
    c: (n) => n * 2,
    d: null,
};

console.log(qeepEqual(x, y));