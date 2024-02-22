import TasksPage from "./features/tasks/TasksPage/index.js";
import TaskPage from "./features/tasks/TaskPage/index.js";
import AuthorPage from "./features/author/AuthorPage.js";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./Navigation/index.js";
import Container from "./common/Container/styled.js";

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Container>
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
      </Container>
    </HashRouter>
  );
};

export default App;
