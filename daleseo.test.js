function fetchUser(id, cb) {
    setTimeout(() => {
        console.log("wait 0.1 sec")
        const user = {
            id: id,
            name: `user${id}`,
            email: `${id}@mail.com`
        }
        cb(user)
    }, 100)
}

function fetchPromise(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("wait 0.1 sec.")
            const user = {
                id: id,
                name: `user${id}`,
                email: `${id}@mail.com`
            }
            resolve(user)
        }, 100)
    })
}

test('callback fetchUser', (done) => {
    const id = 1
    fetchUser(id, (user) => {
        expect(user).toEqual({
            id: id,
            name: `user${id}`,
            email: `${id}@mail.com`
        })
        done()
    })
})

test('promise fetchUser', () => {
    const id = 1
    return fetchPromise(id)
        .then((user) => {
            // let id = 2
            expect(user).toEqual({
                id: id,
                name: `user${id}`,
                email: `${id}@mail.com`
            })
        })
})