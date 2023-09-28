import { gql } from "@apollo/client";

export const GET_ALL_EMPLOYEES_QUERY = gql`
  query getAllEmp {
    getAllEmp {
      id
      firstName
      lastName
      age
      dateOfJoining
      title
      department
      empType
      currentStatus
    }
  }
`;
