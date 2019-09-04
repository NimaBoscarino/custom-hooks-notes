## Immutable stuff:

List of albums:

- be able to add albums to the list:
    - Title, cover, year
- be able to remove albums from the list
- maybe even be able to edit albums in the list
- see history changes (immutable)

Build the above as a plain JavaScript script

- Do it with a mutable pattern first
    - i.e. pushing values to an array, popping
- Then do with immutable patterns, and show how that can be tested (not with mocha, just by hand)

Take that idea, and bring it into React with a small demo

"I miss the old Kanye"

## HOOKS

NOTE: *Custom Hooks are a convention that naturally follows from the design of Hooks, rather than a React feature.*

```js
useDarkMode() // https://usehooks.com/useDarkMode/
```

```js
useKanyeQuote() // from Kanye.REST
useYeezy(kanye) // plays relevant Kanye audio snippet whenever the kanye value changes
```

```js
onKeyPress() // for a couple different components... could be a soundboard
```

```js
useFadeAnimation(visible) // possible?
```