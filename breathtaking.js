let number = 5

// passes a copy of it
const increase = (x) => {
    return x + 1 // Just return a new value
}

const decrease = x => x - 1 

// console.log(increase(number)) // 6
// console.log(number) // ? 5
// number = increaseNumber(number) // reassign the number to a new number
// console.log(increase(number)) // 6

// 6 ---> 7
// 6 ---> 7

let num = 6
console.log(increase(num) + decrease(num))
console.log(decrease(num) + increase(num))

/*
Every time you call increase,
pass a number in. You will receive
that number increase by 1.
*/