import { gql } from "@apollo/client";

export const CREATE_EMPLOYEE_MUTATION = gql`
  mutation CreateEmployee($post: empInput) {
    createEmp(post: $post) {
      age
      currentStatus
      dateOfJoining
      department
      empType
      firstName
      lastName
      id
      title
    }
  }
`;
