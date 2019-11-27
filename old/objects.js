const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 'Kanye'
}

const addProperty = (object, property, value) => {
    // how to clone an object???
    const newObject = {...object}
    
    newObject[property] = value
    return newObject
}

const newObj = addProperty(obj, 'e', 'Graduation')
console.log(obj)
console.log(newObj)
