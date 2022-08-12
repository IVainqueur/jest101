const { default: axios } = require("axios")

const otherFunctions = {
    createUser: (fname, lname) => {
        return {
            firstname: fname,
            lastname: lname
        }
    },
    fetchUser: async () => {
        try {
            let result = (await axios.get('https://jsonplaceholder.typicode.com/users/1')).data
            return result
        }catch (e){
            return e
        }
    }
}

module.exports = otherFunctions