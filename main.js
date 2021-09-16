//Code Exercise for ElectroTempo, Inc.
//By: Joshua DeVore
// JS Functionality

let lowerRangeInput = document.getElementById('lowerRange')
let upperRangeInput = document.getElementById('upperRange')
let energyInput = document.getElementById('energy')
let userQueryInput = document.getElementById('queryInput')
let resultsDiv = document.querySelector('.answer')
let resetBtn = document.getElementById('resetBtn')
let userSubmitBtn = document.getElementById('userSubmitBtn')
let querySubmitBtn = document.getElementById('querySubmitBtn')

userSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let intervalLimitOne = Number(lowerRangeInput.value)
    let intervalLimitTwo = Number(upperRangeInput.value)
    let returnedValue = Number(energyInput.value)
    interval_map.insert(intervalLimitOne, intervalLimitTwo, returnedValue)
    console.log(interval_map.mapArray);
    lowerRangeInput.value = ''
    upperRangeInput.value = ''
    energyInput.value =  ''
})

querySubmitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let inputValue = Number(userQueryInput.value)
    let result = interval_map.lookup(inputValue)
    console.log(result);
    resultsDiv.innerHTML = `<p>${result}</p>`
    userQueryInput.value = ''
})

resetBtn.addEventListener('click', (e) => {
    e.preventDefault()
    interval_map.mapArray = []
})

