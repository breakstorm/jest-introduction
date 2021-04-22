function firstTime() {
    console.group('setup')
}

function lastTime() {
    console.groupEnd('setup')
}

function initialize() {
    console.log('initialize')
}

function clear() {
    console.log('clear')
}

// beforeAll(() => {
//     firstTime()
// })
// beforeEach(() => {
//     initialize()
// })
//
// test('setup test 1', () => {
//     expect('1').toMatch('1')
// })
//
// describe('second describe', () => {
//     afterEach(() => {
//         clear()
//     })
//     afterAll(() => {
//         lastTime()
//     })
//     test('setup test 2', () => {
//         expect('2').toMatch('2')
//     })
//     test('setup test 3', () => {
//         expect('3').toMatch('3')
//     })
// })
// test.only(() => console.log('0 - test only'))
beforeAll(() => console.log('1 - beforeAll'))
afterAll(() => console.log('1 - afterAll'))
beforeEach(() => console.log('1 - beforeEach'))
afterEach(() => console.log('1 - afterEach'))
test('', () => console.log('1 - test'))

describe('before after order test', () => {
    beforeAll(() => console.log('2 - beforeAll'))
    afterAll(() => console.log('2 - afterAll'))
    beforeEach(() => console.log('2 - beforeEach'))
    afterEach(() => console.log('2 - afterEach'))
    test('', () => console.log('2 - test'))
})
