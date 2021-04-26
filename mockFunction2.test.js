/*function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index])
    }
}

const mockCallback = jest.fn(x => 42 + x)
forEach([0, 1], mockCallback)

test('mock-functions', () => {
    console.log(mockCallback.mock)
    expect(mockCallback.mock.calls.length).toBe(2)
    expect(mockCallback.mock.calls[0][0]).toBe(0)
    expect(mockCallback.mock.calls[1][0]).toBe(1)
    expect(mockCallback.mock.results[0].value).toBe(42)
})*/

/*
const myMock = jest.fn();
myMock()
myMock()
myMock()
const a = new myMock();

const b = {};
const bound = myMock.bind(b);
bound()

console.log('myMock test')
console.log(myMock.mock)
console.log(myMock.mock.instances)

test('mock property', () => {
    // expect()
})*/

test('mock return value', () => {
    const myMockReturn = jest.fn()
    myMockReturn.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true)
    console.log(myMockReturn(), myMockReturn(), myMockReturn(), myMockReturn())
})

const Users = require('./users2')
jest.mock('./users2')

test('mocking module', () => {
    const foo = 'bar'
    Users.all.mockResolvedValue(foo)

    return Users.all().then(result => {
        console.log('module', result)
        expect(result).toBe('test')
    })
})