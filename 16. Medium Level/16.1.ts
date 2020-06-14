function swap1([a, b]: number[]) {
    a = a - b;
    b = a + b;
    a = b - a;

    return [a, b]
}

function swap2([a, b]: number[]) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;

    return [a, b]
}

function swap3([a, b]: number[]) {
    [b, a] = [a, b]

    return [a, b]
}

console.log(swap1([1, 2]))
console.log(swap2([1, 2]))
console.log(swap3([1, 2]))