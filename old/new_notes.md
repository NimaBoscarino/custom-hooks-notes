# Week 7 Day 3

1. Review on React
- clear up any issues

What is React?
- library (for showing things)
- UI (front end)
- to create DOM elements

React build UI for the web

What makes up react?
- components

Component is a visual + behavioural building block for UI

inputs -----> function -----> outputs
custom data ----> logic -----> picture
                    ^
                    |
                    |
                    |
                state (memory)
                
2. Immutable Data Patterns

Immutable: can't be changed
Data: information
Pattern: our approach to using (some sort of repetition)

```js
let food = 'potato'
console.log(food) // potato
food = 'pizza'
console.log(food) // pizza
```

```js
let x = 1

const increaseX = () => {
    x++
    return x
}

const decreaseX = () => {
    x--
    return x
}

console.log(increaseX()) // 2
console.log(decreaseX()) // 1

// x is 1
// console.log(increaseX() + decreaseX()) // 3

// console.log(Number + Number)
// console.log(Number + Number)
console.log(decreaseX() + increaseX()) // 1
// 0 + 1

```




```js
const increase = (x) => {
    return x + 1
}

const decrease = (x) => {
    return x - 1
}

console.log(increase(1)) // 2
console.log(increase(4)) // 5
console.log(decrease(1)) // 0

// x is 1
console.log(increaseX() + decreaseX()) // 2
// 2 + 0

// console.log(Number + Number)
// console.log(Number + Number)
console.log(decreaseX() + increaseX()) // 2
// 0 + 2

```


```js
let counter = 1

const increase = (x) => {
    return x + 1
}

counter = increase(counter) // 2
```


```js
let friends = ['tim', 'betty', 'cthulhu']

let newFriends = friends.slice(0, friends.length - 1)

console.log('old friends', friends)
console.log('new friends', newFriends)
```



- Not React!

3. React Hooks, making your own!