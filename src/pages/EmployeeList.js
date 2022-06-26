import React, { useState, useCallback, useEffect } from "react";
import { variables } from "../variables";
import GroupedLists from "../components/GroupedLists";

// this page will list all the rendered files

function EmployeeList() {
  const [enteredinfo, setEnderedInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dataFetcher = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
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
      setEnderedInfo(userinput);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    dataFetcher();
  }, [dataFetcher]);

  let content = <p>Found no chores.</p>;

  if (enteredinfo.length > 0) {
    content = <GroupedLists blockArr={enteredinfo} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  console.log(content);

  return <section>{content}</section>;
}

export default EmployeeList;
