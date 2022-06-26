import React from "react";
import EmployeeRegistrationForm from "./pages/EmployeeRegistrationForm";
import { variables } from "./variables";

function DataUploader() {
  async function upLoader(dataObject) {
    const res = await fetch(variables.API_URL + "api/Employee", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObject),
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
  }
  return (
    <React.Fragment>
      <section>
        <EmployeeRegistrationForm onEmployeeRegistrationForm={upLoader} />
      </section>
    </React.Fragment>
  );
}
export default DataUploader;
