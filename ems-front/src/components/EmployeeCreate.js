import { CREATE_EMPLOYEE_MUTATION } from "../gql/mutations";
import { GET_ALL_EMPLOYEES_QUERY } from "../gql/queries";
import { Controller, useForm } from "react-hook-form";

const TITLE_OPTIONS = ["Employee", "Manager", "Director", "VP"];
const DEPARTMENT_OPTIONS = ["IT", "Marketing", "HR", "Engineering"];
const EMPLOYMENT_TYPE = ["FullTime", "PartTime", "Contract", "Seasonal"];

export default function EmployeeCreate({ handleClose }) {
  const [createEmployee] = (CREATE_EMPLOYEE_MUTATION, {
    refetchQueries: [GET_ALL_EMPLOYEES_QUERY, "getAllEmp"],
  });

  const onSubmit = (data) => {
    data.age = Number(data?.age)
    const requestBody = {
      post: {
        ...data,
        currentStatus: true,
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

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()


  return (
    <form onSubmit={handleSubmit(onSubmit)} id="employeeForm">
      <div>
        <label>First Name:</label>
        <input type="text" width="100%" {...register("firstName")} autoComplete="off" />
        {errors.firstName && <span className="error-message">This field is required</span>}
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" {...register("lastName", { required: true })} autoComplete="off" />
        {errors.lastName && <span className="error-message">This field is required</span>}
      </div>
      <div>
        <label>Age:</label>

        <Controller
          name="age"
          control={control}
          rules={{
            required: 'This field is required',
            min: {
              value: 20,
              message: 'Age greater than 20',
            },
            max: {
              value: 70,
              message: 'Age smaller than 70',
            },
          }}
          render={({ field }) => (
            <div>
              <input type="number" {...field} />
              {errors.age && <p className="error-message">{errors.age.message}</p>}
            </div>
          )}
        />

      </div>
      <div>
        <label>Date of Joining:</label>
        <input type="date" {...register("dateOfJoining", { required: true })} autoComplete="off" />
        {errors.dateOfJoining && <span className="error-message">This field is required</span>}
      </div>
      <div>
        <label>Title:</label>
        <select {...register("title", { required: true })} autoComplete="off">
          {TITLE_OPTIONS.map((title) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>
        {errors.title && <span className="error-message">This field is required</span>}
      </div>
      <div>
        <label>Department:</label>
        <select  {...register("department", { required: true })} autoComplete="off">
          {DEPARTMENT_OPTIONS.map((department) => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </select>
        {errors.department && <span className="error-message">This field is required</span>}
      </div>
      <div>
        <label>Employee Type:</label>
        <select  {...register("empType", { required: true })}>
          {EMPLOYMENT_TYPE.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.empType && <span className="error-message">This field is required</span>}
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
