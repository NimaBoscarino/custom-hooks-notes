let x = 5

const increaseX = () => {
    x++
    return x
}

const decreaseX = () => {
    x--
    return x
}

// in + dec ->
// 9??? 5-1 -> 4           4+1 -> 5       4 + 5
// console.log(decreaseX() + increaseX())

//   input ---> f ---> output
//              |
//               ---> side effects

console.log(decreaseX())
console.log(decreaseX())
console.log(decreaseX())
console.log(decreaseX())
console.log(decreaseX())
console.log(decreaseX())
console.log(decreaseX())
console.log(decreaseX())


// console.log(increaseX() + increaseX())
