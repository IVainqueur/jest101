const { default: axios } = require("axios")

const otherFunctions = {
    createUser: (fname, lname) => {
        return {
            firstname: fname,
            lastname: lname
        }
    },
    fetchUser: async ()=>{
       let user = (await axios.get('https://jsonplaceholder.typicode.com/users/1'))
        .then(res => res.data)
    }
}

module.exports = otherFunctions