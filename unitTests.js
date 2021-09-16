//Code Exercise for ElectroTempo, Inc.
//By: Joshua DeVore

//Tests
let testMsg = 'Unexpected Result: Should return ->'
// empty arrays and improper inputs
console.assert( interval_map.lookup(4) === 0, `${testMsg} 0` )

// console.assert( interval_map.insert(1,'h',5) === console.error('Inputs must be numerical values'),  `${testMsg} console.error('Inputs must be numerical values')`)
// console.assert( interval_map.binaryLookup(90) === 0, `${testMsg} 0` )
// console.assert( interval_map.insert(5,3,true) === console.error('Inputs must be numerical values'),  `${testMsg} console.error('Inputs must be numerical values')`)
// console.assert( interval_map.binaryLookup(4/2) === 0, `${testMsg} 0` )
// console.assert( interval_map.insert('a',3,5) === console.error('Inputs must be numerical values'),  `${testMsg} console.error('Inputs must be numerical values')`)
console.assert( interval_map.lookup(0.987657876576546) === 0, `${testMsg} 0` )

// user error for interval input order is handled by the function
interval_map.insert(7,2,43)
console.assert( interval_map.mapArray[0].intervalLimitOne === 2, `${testMsg} 2` )
console.assert( interval_map.mapArray[0].intervalLimitTwo === 7, `${testMsg} 7` )

console.assert( interval_map.lookup(2) === 43, `${testMsg} 43`)
console.assert( interval_map.lookup(7) === 0, `${testMsg} 0`) //upper thresholds are not in the interval
console.assert( interval_map.lookup(0) === 0, `${testMsg} 0`) // outside defined range, default value

interval_map.insert(-6,4,17)
console.assert( interval_map.lookup(4) === 43, `${testMsg} 43`) // upper limit from new rule is ignored
console.assert( interval_map.lookup(6) === 43, `${testMsg} 43`) // checking rule updates didn't mess with origianl rule
console.assert( interval_map.lookup(0) === 17, `${testMsg} 17`) // updated rule works
console.assert( interval_map.lookup(2) === 17, `${testMsg} 17`) //new rule overwrites old rules
console.assert( interval_map.lookup(-10) === 0, `${testMsg} 0`) // outside the range of all rules
console.assert( interval_map.lookup(7) === 0, `${testMsg} 0`) // upper limit of all rules, default value returned
let randomNumber = 2
interval_map.insert(4,19,11)
interval_map.insert(10,20,6)
interval_map.insert(1,5,7)
console.assert( interval_map.lookup(4) === 7, `${testMsg} 7`) 
console.assert( interval_map.lookup(20) === 0, `${testMsg} 0`) 
console.assert( interval_map.lookup(9) === 11, `${testMsg} 11`)
console.assert( interval_map.lookup(5) === 11, `${testMsg} 11`) 
