let house = {
    walls: 4,
    floors: 'linoleum',
    location: 'on a mountain'
}

const changeFloorsToHardwood = building => {
    // const newBuilding = { ...building }


    const newBuilding = {}
    newBuilding.walls = building.walls
    newBuilding.location = building.location
    newBuilding.floors = 'hardwood'

    return newBuilding
}

house = changeFloorsToHardwood(house)


const obj = {
    a: 1,
    b: {
        c: 2
    }
}

const obj2 = {...obj}