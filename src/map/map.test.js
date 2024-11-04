'use strict'

import { expect } from 'chai'
import map from './map'

it('map should be a function', () => {
    expect(map).to.be.a('function')
})

it('map([1, 2], (item) => item) should be a [1, 2]', () => {
    expect(map([1, 2], (item) => item)).to.be.deep.equal([1, 2])
})

it('map([3, 4], (item) => item) should be a [3, 4]', () => {
    expect(map([3, 4], (item) => item)).to.be.deep.equal([3, 4])
})

it('map([1, 2], (item) => item + 1) should be a [2, 3]', () => {
    expect(map([1, 2], (item) => item + 1)).to.be.deep.equal([2, 3])
})

it('map([4, 6], (item) => item + 1) should be a [5, 7]', () => {
    expect(map([4, 6], (item) => item + 1)).to.be.deep.equal([5, 7])
})

it('map([1, 2], (item, index) => index) should be a [0, 1]', () => {
    expect(map([1, 2], (item, index) => index)).to.be.deep.equal([0, 1])
})

it('map([1, 2], (item, index, array) => array) should be a [[1, 2], [1, 2]]', () => {
    expect(map([1, 2], (item, index, array) => array)).to.be.deep.equal([[1, 2], [1, 2]])
})

it('map() should return []', () => {
    expect(map()).to.be.deep.equal([])
})

it('map([1, 2]) should return [1, 2]', () => {
    expect(map([1, 2])).to.be.deep.equal([1, 2])
})

it('map([1, 2], "abc") should throw an error with message "func is not a function"', () => {
    let error

    try {
        map([1, 2], "abc")
    } catch (e) {
        error = e
    }

    expect(error.message).to.be.equal('func is not a function')
})