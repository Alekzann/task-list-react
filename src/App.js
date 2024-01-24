import TasksPage from "./features/tasks/TasksPage/index.js";
import TaskPage from "./features/tasks/TaskPage/index.js";
import AuthorPage from "./features/author/AuthorPage.js";
import {
  HashRouter,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min.js";

const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <NavLink to="/zadania">Zadania</NavLink >
        </li>
        <li>
          <NavLink to="/author">Author</NavLink >
        </li>
      </ul>
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/author">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App;
