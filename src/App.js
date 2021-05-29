import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";
import Counter from "./01/Counter";
import UserList from "./01/UserList";
import HocWithWindowSize from "./02/HocWindowSize";
import HooksWithWindowSize from "./02/HooksWindowSize";
import UseEffect from "./03/UseEffect";
import CusHookInClassComp from "./03/CusHookInClassComp";

const routes = [
  ["01 Counter", Counter],
  ["01 UserList", UserList],
  ["02 HOC", HocWithWindowSize],
  ["02 Hooks", HooksWithWindowSize],
  ["03 UseEffect", UseEffect],
  ["03 WindowSize", CusHookInClassComp],
];

export default function App() {
  return (
    <Router>
      <div className="app">
        <ul className="sider">
          {routes.map(([label]) => (
            <li key={label}>
              <Link to={`/${label.replace(" ", "/")}`}>{label}</Link>
            </li>
          ))}
        </ul>
        <div className="page-container">
          <Switch>
            {routes.map(([label, Component]) => (
              <Route path={`/${label.replace(" ", "/")}`} key={label}>
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
