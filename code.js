//Code Exercise for ElectroTempo, Inc.
//By: Joshua DeVore
//interval_map container class and related functions

// Helper to Sorting Function
const merge = ( leftArray, rightArray ) => {
    const outputArr = []
    let leftIndex = 0
    let rightIndex = 0

    while ( leftIndex < leftArray.length && rightIndex < rightArray.length ) {
        const leftSortingValue = Object.values( leftArray[leftIndex] )[0]
        const rightSortingValue = Object.values( rightArray[rightIndex] )[0]

        if (leftSortingValue < rightSortingValue) {
            outputArr.push( leftArray[leftIndex] )
            leftIndex++
        } else {
            outputArr.push( rightArray[rightIndex] )
            rightIndex++
        }
    }
    return [...outputArr, ...leftArray.slice( leftIndex ), ...rightArray.slice( rightIndex )]
}

// Sorting Function
const mergeSort = array => {
    if ( array.length <= 1 ) {
        return array
    }

    const midIndex = Math.floor( array.length / 2 )
    const leftArr = array.slice( 0, midIndex )
    const rightArr = array.slice( midIndex )

    return merge(
        mergeSort( leftArr ),
        mergeSort( rightArr )
    )
}

// Searching Function
const binarySearch = ( array, element ) => {
    //Guard to save some processing
    if ( array.length === 0 ) {
        return undefined
    }

    let n = array.length
    let startIndex = 0
    let endIndex = n - 1
    let possibleAnswersArray = []
    
    while ( startIndex <= endIndex ) {

        let midIndex = Math.floor(( startIndex + endIndex ) / 2 )
        let lowerRangeLimit = Object.values(array[midIndex])[0]
        let upperRangeLimit = Object.values(array[midIndex])[1]

        if ( lowerRangeLimit <= element &&  upperRangeLimit > element) {

            possibleAnswersArray.push( array[midIndex] )
            let leftArray = array.slice( 0, midIndex )
            let rightArray = array.slice( midIndex + 1 )
            
            for ( let i = leftArray.length - 1; i >= 0; i-- ) {
                let leftArrayLowerRangeLimit = Object.values(leftArray[i])[0]
                let leftArrayUpperRangeLimit = Object.values(leftArray[i])[1]

                if ( leftArrayLowerRangeLimit <= element &&  leftArrayUpperRangeLimit > element ) {
                    
                    possibleAnswersArray.push( leftArray[i] )
                }
            }
            for ( let i = 0; i < rightArray.length; i++ ) {
                let rightArrayLowerRangeLimit = Object.values(rightArray[i])[0]
                let rightArrayUpperRangeLimit = Object.values(rightArray[i])[1]

                if ( rightArrayLowerRangeLimit <= element &&  rightArrayUpperRangeLimit > element ) {

                    possibleAnswersArray.push( rightArray[i] )
                }
            }
            let latestIntervalDefinition = possibleAnswersArray[0]

            for ( let i = 0; i < possibleAnswersArray.length; i++ ) {
                if ( possibleAnswersArray[i].index > latestIntervalDefinition.index ) {
                    latestIntervalDefinition = possibleAnswersArray[i]
                }
            }
                return latestIntervalDefinition.returnedValue

        } else if ( lowerRangeLimit > element ) {
            endIndex = midIndex - 1
        } else {
            startIndex = midIndex + 1
        }
    }
}

const interval_map = {
    mapArray: [],
    value: 0,
    inputIndex: 0,
    insert: function (intervalLimitOne, intervalLimitTwo, returnedValue) {

        let placeHolder = null
        index = this.inputIndex
        let msg = 'Inputs must be numerical values'

        if (typeof intervalLimitOne !== 'number' || typeof intervalLimitTwo !== 'number' || typeof returnedValue !== 'number') {
            console.error(msg)

        } else if (intervalLimitOne > intervalLimitTwo) {

            placeHolder = intervalLimitOne
            intervalLimitOne = intervalLimitTwo
            intervalLimitTwo = placeHolder

            this.mapArray.push( {intervalLimitOne, intervalLimitTwo, returnedValue, index} )
            this.inputIndex++

        } else {
            this.mapArray.push( {intervalLimitOne, intervalLimitTwo, returnedValue, index} )
            this.inputIndex++
        }
    },
    // Linear Search
    // lookup: function (k) {
    //     this.value = 0
    //     for( let i = this.mapArray.length - 1; i >= 0; i-- ) {
    //         if (k >= this.mapArray[i].intervalLimitOne && k < this.mapArray[i].intervalLimitTwo) {
    //             this.value = this.mapArray[i].returnedValue
    //             break
    //         } else {
    //             continue
    //         }
    //     }
    //     return this.value
    // },
    // Binary Search
    lookup: function (inputValue) {
        this.value = 0
        let sortedMapArray = mergeSort( this.mapArray )
        if ( binarySearch(sortedMapArray, inputValue) === undefined ) {
            console.log(this.value)
            return this.value
        } else {
            this.value = binarySearch(sortedMapArray, inputValue)
            console.log(this.value)
            return this.value
        }
    },
}