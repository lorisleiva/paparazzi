export default {
    authenticated: false,
    check () {
        return this.authenticated
    },
    user () {
        const user = {
            name: 'John Doe',
            email: 'john.doe@gmail.com',
        }
        return this.authenticated ? user : null
    }
}