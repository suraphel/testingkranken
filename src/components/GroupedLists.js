import React from "react";
import Block from "./PresentationBlock/UnitBlock";
import classes from "../components/unitList.module.css";
function GroupedLists(props) {
  return (
    <ul className={classes["unitlist"]}>
      {props.blockArr.map((unit) => (
        <Block
          key={unit.id}
          employeeName={unit.employeeName}
          employeeId={unit.employeeId}
          department={unit.department}
        />
      ))}
    </ul>
  );
}

export default GroupedLists;
