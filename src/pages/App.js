import React from "react";
import useRoutes from "hooks/useRoutes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "./style.module.css";

const App = () => {
  const routes = useRoutes();
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
            .map(({ component: Component, path }) => (
              <Route path={path} key={path}>
                {<Component></Component>}
              </Route>
            ))}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
