import React from "react";
import { variables } from "../variables";

function DataUploader() {
  async function toDbHandler(companyDataObject) {
    const responce = await fetch(
      variables.API_URL + "api/emaployee",

      {
        method: "POST",
        body: JSON.stringify(companyDataObject),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!responce.ok) {
      throw new Error("Error");
    }
    if (responce.ok) {
      <p>Registration successfull</p>;
    }
    const data = await responce.json();
    // the responce from the server
    console.log(data);
  }
  return (
    <React.Fragment>
      <section>
        <AddCompaniesForm onAddcompaniesform={toDbHandler} />
      </section>
    </React.Fragment>
  );
}

export default DataUploader;
