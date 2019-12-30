import React from "react";
import routes from "config/routes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "./style.module.css";

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <h1 className={styles.name}>LAWRENCE MITCHELL</h1>
          {routes
            .filter(({ isNavBar = true }) => isNavBar)
            .map(({ name, path, isExternal }) =>
              isExternal ? (
                <li className={styles.link} key={path}>
                  <a href={path}>{name}</a>
                </li>
              ) : (
                <li className={styles.link} key={path}>
                  <Link to={path}>{name}</Link>
                </li>
              )
            )}
        </nav>
        <Switch>
          {routes
            .filter(({ isExternal = false }) => !isExternal)
            .map(({ component, path }) => (
              <Route path={path} key={path}>
                {component}
              </Route>
            ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
