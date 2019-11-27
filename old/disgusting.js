let x = 5

const increaseX = () => {
    x++
    // console.log(x)
    return x
}

const decreaseX = () => {
    x--
    // console.log(x)
    return x
}

// 10, 11?, 12???, 13?????
// 5 ---> 6
// 5 ---> 6
// console.log(increaseX() + increaseX())

// quiet 12, serious 1, 
// increase to 6
// decrease back to 5
// maybe 11?????? 🧐 🤨
// 5 ---> 4
// 5 ---> 5
console.log(increaseX() + decreaseX())
console.log(decreaseX() + increaseX())

// increaseX() // 6
// decreaseX()
// increaseX() // 7
// increaseX() // 8
// decreaseX()
// increaseX() // 9

// decreaseX()