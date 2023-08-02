// Code your solution in this file!
function returnFirstTwoDrivers(array){
    const returnValue = array.slice(0,2)
    return returnValue
}
function returnLastTwoDrivers(array){
    const returnValue = array.slice(-2)
    return returnValue
}
let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
function createFareMultiplier(_multiplier){
    return function multiplierFunction(_multiplied){
        return _multiplied * _multiplier
    }
}
const fareDoubler = x => {
    const doubler = createFareMultiplier(2)
    const returnValue = doubler(x)
    return returnValue
}
const fareTripler = x => {
    const tripler = createFareMultiplier(3)
    const returnValue = tripler(x)
    return returnValue
}
function selectDifferentDrivers(arrayOfDrivers,func){
    return func(arrayOfDrivers)
}