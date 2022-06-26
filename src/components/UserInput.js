import React, { useRef } from "react";
import { variables } from "../variables";
import classes from "../components/Form.module.css";

function UserInput() {
  const employeeName = useRef();
  const employeeId = useRef();
  const department = useRef();

  //   e.preventdefault();
  const formHandler = (e) => {
    e.preventDefault();
    const EmployeeName = employeeName.current.value;
    const EmployeeId = employeeId.current.value;
    const Department = department.current.value;

    fetch(variables.API_URL + "api/Employee", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        EmployeeName: EmployeeName,
        EmployeeId: EmployeeId,
        Department: Department,
      }),
    }).then((res) =>
      res.json().then(
        (result) => {
          alert(result);
        },
        (error) => {
          alert("failed");
        }
      )
    );
  };

  // employeeName.current.value = "";

  return (
    <div className={classes.form}>
      <form className={classes.form} onSubmit={formHandler}>
        <div className={classes.control}>
          <label htmlFor="fname">Employee Name</label>
          <input type="text " ref={employeeName} />

          <label htmlFor="lname">Employee Id</label>
          <input type="text " ref={employeeId} />

          <label htmlFor="department">Department</label>
          <input type="department " ref={department} />
        </div>
        <div className={classes.action}>
          <button> Submit form </button>
        </div>
      </form>
    </div>
  );
}

export default UserInput;
