const { default: axios } = require("axios")

const otherFunctions = {
    createUser: (fname, lname) => {
        return {
            firstname: fname,
            lastname: lname
        }
    },
    fetchUser: async ()=>{
        axios.get('')
    }
}

module.exports = otherFunctions