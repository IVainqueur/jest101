const { default: axios } = require("axios")

const otherFunctions = {
    createUser: (fname, lname) => {
        return {
            firstname: fname,
            lastname: lname
        }
    },
    fetchUser: async ()=>{
       let result = (await axios.get('https://jsonplaceholder.typicode.com/users/1')).data
       return result
    }
}

module.exports = otherFunctions