const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Employee {
    id: ID
    firstName: String
    lastName: String
    age: Int
    dateOfJoining: String
    title: String
    department: String
    empType: String
    currentStatus: Boolean
  }
  type Query {
    hello: String
    getAllEmp: [Employee]
  }
  input empInput {
    id: ID
    firstName: String
    lastName: String
    age: Int
    dateOfJoining: String
    title: String
    department: String
    empType: String
    currentStatus: Boolean
  }
  type Mutation {
    createEmp(post: empInput): Employee
  }
`;

module.exports = typeDefs;
