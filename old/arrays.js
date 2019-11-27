let pizzas = [
    'pepperoni',
    'cheese',
    'BBQ Chicken',
    'Veggie',
    'Margherita',
    'Anchovies!!!! 🐟'
]

const addPizza = (array, pizza) => {
    // make a new array that is IDENTICAL
    const newPizzas = [
        ...array,
        pizza
    ]
    // loop, spread

    return newPizzas
}

const newPizzas = addPizza(pizzas, 'Pineapple')
// pizzas.push('Pineapple') // directly mutates the array
console.log(pizzas)
console.log(newPizzas)
