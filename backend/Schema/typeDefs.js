const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Empyolee {
        id:ID
        firstName:String
        lastName:String
        age:Int
        dateOfJoining:String
        title:String
        department:String
        empType:String
        currentStatus:Boolean
    }
  type Query {
    hello: String

    getAllEmp:[Empyolee]
  }
  input empInput {
    id:ID
        firstName:String
        lastName:String
        age:Int
        dateOfJoining:String
        title:String
        department:String
        empType:String
        currentStatus:Boolean
  }
  type Mutation {
    createEmp(post:empInput ) :Empyolee
  }
`;

module.exports = typeDefs 