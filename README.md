# Week 7 Day 3 - Immutable Data Patterns and Custom Hooks

[Today's lecture recording is available on YouTube.](https://www.youtube.com/watch?v=wFYMjnnbVoo)

[Today's notes are available on Github.](https://github.com/NimaBoscarino/custom-hooks-notes) The notes we wrote in class are in the `notes.md` file.

Today's example demos were:

- [Kanye album list with useState](https://codesandbox.io/s/spring-field-tp4hx)
- [useVoice](https://codesandbox.io/s/hopeful-ramanujan-91vd1)
- [making our own useMousePosition hook](https://codesandbox.io/s/damp-cookies-w4pm0)

Useful links:

- [react-use](https://github.com/streamich/react-use)
- [useHooks](https://usehooks.com)
- [general hooks reference](https://reactjs.org/docs/hooks-reference.html)
- [React for VR](https://facebook.github.io/react-360/)
- [making your own useKeyPress hook](https://usehooks.com/useKeyPress/)

This lecture was in two parts!

## The Plan for Today

### Part 1: Immutable Data Patterns

- What does immutability mean?
- Why do we care?
    - Let's see an example where mutability goes wrong
    - Testing immutable functions

### Part 2: Custom Hooks

- What are hooks? Review!
- A brief tour of built-in hooks
- Hooks safari! Take a look online for some community hooks
- Let's make our own
    - useMousePosition

## Actual Notes

### Immutable Data Patterns

> From Wikipedia

"In computing, a persistent data structure is a data structure that always preserves the previous version of itself when it is modified. Such data structures are effectively immutable, as their operations do not (visibly) update the structure in-place, but instead always yield a new updated structure."

In other words...

- Don’t mutate data, and if you have to – create a clone and mutate it.
- Reuse unchanged parts. Only changed parts should be changed.

#### Benefits of immutability

- Immutable data structure are simpler to construct, test, and use
- Truly immutable values are always thread-safe
- Immutable data is side-effect free (avoids unexpected bugs hard to detect)
- You can quicky compare the previous and the new version

### Custom Hooks

Sometimes we just want to use some code logic without tying it to a particular UI
Custom Hooks allow us to do that.

[NOTE, from the React docs](https://reactjs.org/docs/hooks-custom.html): *Custom Hooks are a convention that naturally follows from the design of Hooks, rather than a React feature.*

*Do two components using the same Hook share state? No. Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.*

Some guidelines:

- Only call Hooks from the top-level of a function component or a custom Hook.
- Cannot be called in React class components, loops, if statement, regular function, in event handlers
- A custom Hook must start with the keyword "use"
- a custom Hook can call other custom or built-in Hooks.
