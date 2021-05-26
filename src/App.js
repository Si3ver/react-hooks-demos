import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";
import Counter from "./01/Counter";

const routes = [
  ["01 Counter", Counter],
];

export default function App() {
  return (
    <Router>
      <div className="app">
        <ul className="sider">
          {routes.map(([label]) => (
            <li>
              <Link to={`/${label.replace(" ", "/")}`}>{label}</Link>
            </li>
          ))}
        </ul>
        <div className="page-container">
          <Switch>
            {routes.map(([label, Component]) => (
              <Route path={`/${label.replace(" ", "/")}`}>
                <Component />
              </Route>
            ))}
            <Route path="/" exact>
              <h1>Welcome to React Hooks</h1>
            </Route>
            <Route path="*">Page not found.</Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
