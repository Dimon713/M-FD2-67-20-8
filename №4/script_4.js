// function treeSum(array) {
//     let sum = 0;
//     for (i = 0; i < array.length; ++i) {
//         if (Array.isArray(array[i])) {
//             sum += treeSum(array[i]);
//         } else {
//             sum += array[i];
//         }
//     }
//     return sum;
// }
// console.log(treeSum([5, 7, [4, [2], 8, [1, 3], 2],
//     [9, []], 1, 8
// ]));

function treeSum(array) {
    let sum = 0;
    for (let value of array) {
        if (Array.isArray(value)) {
            sum += treeSum(value);
        } else {
            sum += value;
        }
    }
    return sum;
}

console.log(treeSum([5, 7, [4, [2], 8, [1, 3], 2],
    [9, []], 1, 8
]));