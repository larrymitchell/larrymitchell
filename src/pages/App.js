import React from "react";
import routes from "config/routes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "./style.module.css";

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <nav className={styles.nav}>
          {routes
            .filter(({ isNavBar = true }) => isNavBar)
            .map(({ name, path, isExternal }) => {
              if (isExternal) {
                return (
                  <li className={styles.link}>
                    <a href={path}>{name}</a>
                  </li>
                );
              } else {
                return (
                  <li className={styles.link}>
                    <Link to={path}>{name}</Link>
                  </li>
                );
              }
            })}
        </nav>
        <Switch>
          {routes
            .filter(({ isExternal = false }) => !isExternal)
            .map(({ component, path }) => (
              <Route path={path}>{component}</Route>
            ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
