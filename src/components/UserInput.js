import React, { useRef, useCallback, useState } from "react";
import { variables } from "../variables";
import classes from "../components/Form.module.css";
import GroupedLists from "./GroupedLists";

function UserInput() {
  const [enterdname, setEnteredName] = useState([]);
  const employeeName = useRef();
  const employeeId = useRef();
  const department = useRef();

  //   e.preventdefault();
  const formHandler = (e) => {
    e.preventDefault();
    // this is how we get the user input
    const EmployeeName = employeeName.current.value;
    const EmployeeId = employeeId.current.value;
    const Department = department.current.value;
    // console.log(fname, userAge, userCompany, userEmail);
    // console.log(typeof fname, userAge);

    //sending the collected data to the api

    fetch(
      variables.API_URL + "api/Employee",
      // variables.API_URL + "api/employee",
      // will need to convert the data to json
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        // what data is accepted my sql
        body: JSON.stringify({
          // employeeId: key,
          EmployeeName: EmployeeName,
          EmployeeId: EmployeeId,
          Department: Department,
        }),
      }
    ).then((res) =>
      res.json().then(
        (result) => {
          alert("result");
        },
        (error) => {
          alert("failed");
        }
      )
    );
  };

  const dataFetcher = useCallback(async () => {
    const res = await fetch(variables.API_URL + "api/Employee");
    if (!res.ok) console.log("Something went wrong");
    const data = await res.json();

    const userinput = [];

    for (const Key in data) {
      userinput.push({
        id: Key,
        employeeName: data[Key].EmployeeName,
        employeeId: data[Key].EmployeeId,
        department: data[Key].Department,
      });

      console.log(data);
    }
    setEnteredName(userinput);

    // I shall this data to another component where it is going to wrapped and rendered
    // setEnteredName(userinput.length);
  }, []);

  // clearing the form input
  // not easier with useRef without directly manupliating the DOM
  // How do you clear input value after submit in React?
  // To clear input values after form submit in React:
  // Store the values of the input fields in state variables.
  // Set the onSubmit prop on the form element.
  // When the submit button is clicked, set the state variables to empty string

  // fname.current.value = "";

  let content = <p> Found no employees </p>;

  if (enterdname.length > 0) {
    content = <GroupedLists blockArr={enterdname} />;
  }

  return (
    <div className={classes.form}>
      <section> {content} </section>
      <form className={classes.form} onSubmit={formHandler}>
        <div className={classes.control}>
          <label htmlFor="fname">Employee Name</label>
          <input type="text " ref={employeeName} />

          <label htmlFor="lname">Employee Id</label>
          <input type="text " ref={employeeId} />

          <label htmlFor="department">Department</label>
          <input type="department " ref={department} />
          {/* 
                                        <label htmlFor="company">
                                                Company{" "}
                                        </label>
                                        <input type="text " ref={company} /> */}

          {/* <label htmlFor="email">email</label>
                                        <input type="email " ref={email} /> */}
        </div>
        <div className={classes.action}>
          <button> Submit form </button>
          <button onClick={dataFetcher}> Data fetcher </button>
        </div>
      </form>
    </div>
  );
}

export default UserInput;
