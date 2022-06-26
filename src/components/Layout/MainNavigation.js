import classes from "./MainNavigation.module.css";
import { Link, NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link to="/testpage">
        <div className={classes.logo}>Test page</div>
      </Link>

      <nav>
        <ul>
          <NavLink s to="/homepage">
            Employee registration
          </NavLink>
          <NavLink to="/">
            <li>Employee List</li>
          </NavLink>
          <NavLink to="/UserInput">
            <li>Employee registration form</li>
          </NavLink>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
