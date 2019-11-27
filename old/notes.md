# WEEK 7 DAY 3

## Immutable Data Patterns and Custom Hooks

HAHA PUN INTENDED HOOK INTO IT LOL

Front end framework


Three parts
===========

Act 1: Review

React: building UI really really quickly

useEffect - data fetching with react

components

what happens when applications have lots of state?


What is a component?

- a function that returns JSX
    - JSX: shorthand for React to create DOM elements

- a visual building block
    - repeated parameterized visual elements
    - behavioural elements
    - reusable components
    - composable


Why did we move to functional components?

- How do we test this stuff?


Ruby on Rails: building web apps really really quickly



Act 2: Immutable Data Patterns

```js

let x = 10

const increaseX = () => {
    x = x + 1
    return x
}

const decreaseX = () => {
    x = x - 1
    return x 
}

console.log(increaseX()) // okay...
console.log(decreaseX()) // neat!


// Depending on which of the following lines is toggled in, you get different values!!
console.log(decreaseX() + increaseX())
// console.log(increaseX() + decreaseX()) // This is so confusing!
```

### Objects as Immutable Values

```js
let albums = { /* some stuff in here */ }

const albumToAdd = (title, year, description) => {

    return {
        title,
        year,
        description
    }
}

// Someone needs to do the work to replace the albums with an object that has all the old values AND the new value
albums = {
    ...albums,
    albumToAdd('College Dropout', 2004, 'Game changer')
}

```

Act 3: Hooks

We did a couple demos to look at this, mostly through playing with React-Use (a neat NPM package).