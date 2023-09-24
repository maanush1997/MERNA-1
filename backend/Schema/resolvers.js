const Employee = require("../models/emp")

const resolvers = {
    Query: {
        hello: () => {
            return "Hello ankit"
        },
        getAllEmp: async () => {
            return await Employee.find();
        }
    }
}

module.exports = resolvers