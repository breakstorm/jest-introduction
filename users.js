const axios = require('axios')

class Users {
    static all() {
        return axios.get('https://localhost:3000/users/')
            .then(resp => resp.data)
    }
}

// export default Users
exports.default = Users