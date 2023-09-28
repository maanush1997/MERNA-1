import { useMutation } from "@apollo/client";
import { CREATE_EMPLOYEE_MUTATION } from "../gql/mutations";
import { GET_ALL_EMPLOYEES_QUERY } from "../gql/queries";

const TITLE_OPTIONS = ["Employee", "Manager", "Director", "VP"];
const DEPARTMENT_OPTIONS = ["IT", "Marketing", "HR", "Engineering"];
const EMPLOYMENT_TYPE = ["FullTime", "PartTime", "Contract", "Seasonal"];

export default function EmployeeCreate({ handleClose }) {
  const [createEmployee] = useMutation(CREATE_EMPLOYEE_MUTATION, {
    refetchQueries: [GET_ALL_EMPLOYEES_QUERY, "getAllEmp"],
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const elements = event.target?.elements;

    const requestBody = {
      post: {
        age: parseInt(elements.age.value),
        currentStatus: true,
        dateOfJoining: elements.dateOfJoining?.value,
        department: elements.department?.value,
        empType: elements.employeeType?.value,
        firstName: elements.firstName?.value,
        lastName: elements.lastName?.value,
        title: elements.title.value,
      },
    };

    createEmployee({ variables: requestBody })
      .then((res) => {
        handleClose();
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  return (
    <form onSubmit={handleSubmit} id="employeeForm">
      <div>
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" width="100%" required autoComplete="off" />
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" required autoComplete="off" />
      </div>
      <div>
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" min="18" max="50" required autoComplete="off" />
      </div>
      <div>
        <label for="dateOfJoining">Date of Joining:</label>
        <input type="date" id="dateOfJoining" name="dateOfJoining" required autoComplete="off" />
      </div>
      <div>
        <label for="title">Title:</label>
        <select id="title" name="title" required autoComplete="off">
          {TITLE_OPTIONS.map((title) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label for="department">Department:</label>
        <select id="department" name="department" required autoComplete="off">
          {DEPARTMENT_OPTIONS.map((department) => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label for="employeeType">Employee Type:</label>
        <select id="employeeType" name="employeeType" required>
          {EMPLOYMENT_TYPE.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="search">
        <button type="button" onClick={handleClose}>
          Close Form
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
