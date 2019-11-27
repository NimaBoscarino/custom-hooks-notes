let arr = [1, 2, 3, 4]

const putHahaInIndex2 = (array) => {
    // let newArray = JSON.parse(JSON.stringify(array))
    let newArray = _.cloneDeep(array)
    newArray[2] = 'hahaha lmao'

    // newArray should be the same as array
    // but with the changes requested

    return newArray
}

console.log(arr)

const newArr = putHahaInIndex2(arr)

console.log(arr)
console.log(newArr)

// If I have both, I can take a look at the differences