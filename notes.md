## W7D3: 

Thoughts on React?

It's cool
I love it

Storybook keeps crashing! It's supposed to reload but it doesn't. 
Server keeps crashing.

Day 1: Components (tooling: storybook) (Props, useState)
Day 2: data fetching, useEffect
Day 3: useX

Today's lecture is...

## Custom Hooks + Immutable Data Patterns

- Immutable Data Patterns

A pattern to development. (Paradigm)

```js
let x = 0

const increaseX = () => {
    x = x + 1
    console.log(x)
}

increaseX()
```


```js
const Counter = () => {
    const [num, setNum] = useState(0)

    const increaseNum = () => {
        // num = num + 1
        setNum(num + 1) // receives a NEW value
    }

    // retrunm <button><h1>
}

```


### Special React stuff + Custom Hooks