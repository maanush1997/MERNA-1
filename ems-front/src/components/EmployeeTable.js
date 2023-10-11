import { formatDate } from "../utils/functions";

const TABLE_HEAD = [
  "Sr No",
  "FirstName",
  "LastName",
  "Age",
  "Date of Joining",
  "Title",
  "Department",
  "Employee Type",
  "CurrentStatus",
];

export default function EmployeeTable({ tableData }) {
  return tableData?.length > 0 ? (
    <table>
      <thead>
        <tr>
          {TABLE_HEAD.map((title) => (
            <td key={title}>{title}</td>
          ))}
        </tr>
      </thead>

      <tbody>
        {tableData?.map((data, idx) => (
          <tr key={data?.id}>
            <td>{idx + 1}</td>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.age}</td>
            <td>{data.dateOfJoining ? formatDate(data.dateOfJoining) : "-"}</td>
            <td>{data.title}</td>
            <td>{data.department}</td>
            <td>{data.empType}</td>
            <td>{data.currentStatus ? "Working" : "Retired"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p>No record found</p>
  );
}
