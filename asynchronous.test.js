function fetchCallback(cb) {
    return setTimeout(cb('peanut butter'), 1000)
}

function fetchPromise(id) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(id)
        }, 1000)
    })
}

test('callback pattern', (done) => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter')
            done()
        } catch (error) {
            done(error)
        }
    }

    // fetchAll(callback)
    fetchCallback(callback)
})

test('promise pattern', () => {
    // console.log('resolve ' + user)
    return fetchPromise(2).then((user) => {
        expect(user).toEqual(3)
    })
})