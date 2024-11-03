'use strict'

const map = (arr = [], func = (item) => item) => {
    let newArr = []
    if(typeof func !== 'function') throw new TypeError('func is not a function')
    for(let i = 0; i < arr.length; i++){
        newArr.push(func(arr[i], i, arr))
    }
    return newArr
}

export default map