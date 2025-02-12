"use strict";
function fiftyFib() {
    const fibonacci = [0, 1];
    for (let i = 2; i < 50; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci;
}
console.log(fiftyFib());
function numsToStrings(list) {
    return list.map(x => x.toString());
}
console.log(numsToStrings(fiftyFib()));
function numEvenNums(list) {
    return list.filter(x => x % 2 === 0).length;
}
console.log(numEvenNums(fiftyFib()));
