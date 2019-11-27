const obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4
    }
}

const changeBTo5 = (object) => {
    let newObject = { ...object }
    newObject.b = 5

    return object
}


const num = 5
num++



