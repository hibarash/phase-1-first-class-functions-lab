// Code your solution in this file!

const returnFirstTwoDrivers = (drivers) => {

 return(drivers.slice(0,2))
}
const returnLastTwoDrivers = (drivers) => {
    return(drivers.slice(2))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(x) {
    return function (integer) {
        return integer * x
    }   
}
function fareDoubler(y){
    const double = createFareMultiplier (2) (y)
    return double
}
function fareTripler (z) {
    const triple = createFareMultiplier (z)(3)
    return triple
}
function selectDifferentDrivers (arrayOfDrivers, driversToReturn) {
   return driversToReturn (arrayOfDrivers)
}