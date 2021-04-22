function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        console.log('forEach')
        callback(items[index])
    }
}

const mockCallback = jest.fn(x => x + 42)
forEach([0, 1], mockCallback)
// expect(mockCallback.mock.calls.length).toBe(2) // doesn't work test runner

test('mockCallback', () => {
    expect(mockCallback.mock.calls.length).toBe(2)
    console.log(mockCallback.mock)
    console.log(mockCallback.mock.calls)

})

/* mock object
* {
      calls: [ [ 0 ], [ 1 ] ],
      instances: [ undefined, undefined ],
      invocationCallOrder: [ 1, 2 ],
      results: [ { type: 'return', value: 42 }, { type: 'return', value: 43 } ]
    }
* */

const myMock = jest.fn()
console.log(myMock())
myMock.mockReturnValueOnce(1)
.mockReturnValueOnce(2)
.mockReturnValueOnce(2)
.mockReturnValue(3)
console.log(myMock(), myMock(), myMock(), myMock())


const filterTestFn = jest.fn()
filterTestFn.mockReturnValueOnce(true).mockReturnValue(false)
const result = [11, 12].filter(num => filterTestFn(num))
console.log(result)

//mock Implementation vs mock Return value