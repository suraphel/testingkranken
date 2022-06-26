import classes from "../PresentationBlock/Block.module.css";
const Block = (props) => {
  return (
    <li className={classes.block}>
      {/* // font of the rendered page title */}
      <p>Employee Name : {props.employeeName}</p>

      <p>EmployeeId : {props.employeeId}</p>
      <p>
        Department:
        {props.department}
      </p>
    </li>
  );
};

export default Block;
