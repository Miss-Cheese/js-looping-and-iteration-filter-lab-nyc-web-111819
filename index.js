// Code your solution in this file

function findMatching(drivers, name) {
    return drivers.filter(function (driver) { 
        return name.toUpperCase() === driver.toUpperCase()
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function (driver) { 
        return driver.startsWith(string)
    })
}

function matchName(drivers, name){
    return drivers.filter(function (driver) { 
        return driver.name === name
    })
}