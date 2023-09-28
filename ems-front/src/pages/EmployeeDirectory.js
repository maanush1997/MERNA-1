import { useQuery } from "@apollo/client";
import { GET_ALL_EMPLOYEES_QUERY } from "../gql/queries";
import EmployeeTable from "../components/EmployeeTable";
import { useState } from "react";
import EmployeeCreate from "../components/EmployeeCreate";
import EmployeeSearch from "../components/EmployeeSearch";

export default function EmployeeDirectory() {
  const { loading, data, error } = useQuery(GET_ALL_EMPLOYEES_QUERY);

  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleCloseForm = () => {
    setShowCreateForm(false);
  };

  if (error) {
    return <div>{JSON.stringify(error, null, 2)}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="wrapper">
      <p className="heading">Employee Management System</p>
      {!showCreateForm && (
        <div className="search">
          <EmployeeSearch />

          <button
            onClick={() => {
              setShowCreateForm(true);
            }}
          >
            Create Employee
          </button>
        </div>
      )}

      {showCreateForm ? (
        <EmployeeCreate handleClose={handleCloseForm} />
      ) : (
        <EmployeeTable tableData={data?.getAllEmp} />
      )}
    </div>
  );
}
