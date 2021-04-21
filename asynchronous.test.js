// import axios from "axios";
const API_ENDPOINT = "https://jsonplaceholder.typicode.com"

function fetchAll (cb) {
    return axios.get(`${API_ENDPOINT}/users`)
    .then(response => cb(response.data))
}
function fetchTest (cb) {
    return fetch(`${API_ENDPOINT}/users`)
        .then(data => data.json())
        .then(data => cb(data))
}

function fetchOne (id) {
    return axios.get(`${API_ENDPOINT}/users/${id}`)
        .then(response => response.data)
}

test('callback patter', (done) => {
    function callback(data) {
        console.log('callback', data)
        try {
            expect(data).toBe('test')
            done()
        } catch (error) {
            done(error)
        }
    }

    // fetchAll(callback)
    fetchTest(callback)
})