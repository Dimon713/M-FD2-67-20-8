function qeepEqual(a, b) {
    let an = 0;
    let bn = 0;
    for (let akey in a) {
        an++;
    }
    for (let bkey in b) {
        bn++;
    }
    if (an !== bn) {
        return false
    }


    for (let key in a) {
        key = key;
        if (key in b && a[key] === b[key]) {
            continue;
        } else if (key in b && typeof a[key] === 'object' && typeof b[key] === 'object' && qeepEqual(a[key], b[key]))
            continue;
        else {
            return false
        }
    }
    return true
}

let x = {
    value: {
        a: 13
    },
    b: 'abc'
};

let y = {
    value: {
        a: 13
    },
    b: 'abc'
};

console.log(qeepEqual(x, y));