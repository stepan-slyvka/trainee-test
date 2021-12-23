import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";

import Home from "../../pages/Home";
import Table from "../../pages/Table/Table";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/home"
              element={<Home />}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/table"
              element={<Table />}
            >
              Table
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
