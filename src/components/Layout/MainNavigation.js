import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link to="/testpage">
        <div className={classes.logo}>Test page</div>
      </Link>

      <nav>
        <ul>
          <Link to="/form">
            <li> Registration Form </li>
          </Link>
          <Link to="/list">
            <li>Employees </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
