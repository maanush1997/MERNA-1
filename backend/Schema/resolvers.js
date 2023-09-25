const Employee = require("../models/emp")

const resolvers = {
    Query: {
        hello: () => {
            return "Hello ankit"
        },
        getAllEmp: async () => {
            return await Employee.find();
        }
    },
    Mutation: {
        createEmp: async (parent, args, context, info) => {
            const { firstName,
                lastName,
                age,
                dateOfJoining,
                title,
                department,
                empType,
                currentStatus } = args.post
            console.log(firstName)
            const emp = new Employee({
                firstName,
                lastName,
                age,
                dateOfJoining,
                title,
                department,
                empType,
                currentStatus
            })
            await emp.save();
            return emp;
        }
    }
}

module.exports = resolvers