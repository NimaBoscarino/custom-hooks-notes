let x = 5

// functions return NEW values

const increase = (num) => {
    return num + 1
}

const decrease = (num) => {
    return num - 1
}

console.log(x, 'before')
x = increase(x)
console.log(x, 'after')
x = increase(x)
console.log(x, 'after')
x = increase(x)
console.log(x, 'after')


let value = 5
console.log(increase(value) + decrease(value)) // same
console.log(decrease(value) + increase(value)) // same!


// functional programming