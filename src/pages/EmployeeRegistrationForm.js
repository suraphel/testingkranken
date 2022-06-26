import React, { useRef } from "react";
import classes from "../components/Form.module.css";

function EmployeeRegistrationForm(props) {
  const employeeName = useRef("");
  const employeeId = useRef("");
  const department = useRef("");

  //   e.preventdefault();
  const formHandler = (event) => {
    event.preventDefault();
    // this is how we get the user input
    const EmployeeName = employeeName.current.value;
    const EmployeeId = employeeId.current.value;
    const Department = department.current.value;
    console.log(EmployeeName, EmployeeId, Department);

    const dataObject = {
      EmployeeName,
      EmployeeId,
      Department,
    };
    props.onEmployeeRegistrationForm(dataObject);
  };
  employeeName("");

  return (
    <div className={classes.form}>
      {/* <section> {content} </section> */}
      <form onSubmit={formHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="fname">Employee Name</label>
          <input type="text " ref={employeeName} />

          <label htmlFor="lname">Employee Id</label>
          <input type="text " ref={employeeId} />

          <label htmlFor="department">Department</label>
          <input type="department " ref={department} />
        </div>
        <div className={classes.action}>
          <button> Add Employee </button>
        </div>
      </form>
    </div>
  );
}

export default EmployeeRegistrationForm;

/*    //     fetch(
    //       variables.API_URL + "api/Employee",
    //       // variables.API_URL + "api/employee",
    //       // will need to convert the data to json
    //       {
    //         method: "POST",
    //         headers: {
    //           Accept: "application/json",
    //           "Content-Type": "application/json",
    //         },

    //         // what data is accepted my sql
    //         body: JSON.stringify({
    //           // employeeId: key,
    //           EmployeeName: EmployeeName,
    //           EmployeeId: EmployeeId,
    //           Department: Department,
    //         }),
    //       }
    //     ).then((res) =>
    //       res.json().then(
    //         (result) => {
    //           alert("result");
    //         },
    //         (error) => {
    //           alert("failed");
    //         }
    //       )
    //     );
    //   };

    */
