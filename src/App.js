import TasksPage from "./features/tasks/TasksPage/index.js";
import TaskPage from "./features/tasks/TaskPage/index.js";
import AuthorPage from "./features/author/AuthorPage.js";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { ListWrapper, StyledNavLink, Ul } from "./styled.js";
import { List } from "./styled.js";

const App = () => (
  <HashRouter>
    <nav>
      <Ul>
        <ListWrapper>
          <List>
            <StyledNavLink to="/zadania">Zadania</StyledNavLink>
          </List>
          <List>
            <StyledNavLink to="/author">O autorze</StyledNavLink>
          </List>
        </ListWrapper>
      </Ul>

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
