class Users {
    static all() {
        return new Promise((res) => {
            setTimeout(() => res('test'), 300)
        })
    }
}
        /*setTimeout(() => {
            return 'test'
        }, 300)*/

module.exports = Users