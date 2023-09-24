const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Empyolee {
        id:ID
        firstName:String
        lastName:String
        age:Int
        dateOfJoining:date
        title:String
        department:String
        empType:String
        currentStatus:Boolean
    }
  type Query {
    hello: String

    getAllEmp:[Empyolee]
  }
`;

module.exports = typeDefs 