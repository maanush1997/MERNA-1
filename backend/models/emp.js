const mongoose = require("mongoose");

const Employee = mongoose.model(
    "Employee",
    new mongoose.Schema({
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        dateOfJoining: {
            type: Date,
        },
        title: {
            type: String,
            required: true,
        },
        department: {
            type: String
        },
        empType: {
            type: String
        },
        currentStatus: {
            type: Boolean,
            default: 1,
        },
    }),
)
module.exports = Employee