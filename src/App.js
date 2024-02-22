import TasksPage from "./features/tasks/TasksPage/index.js";
import TaskPage from "./features/tasks/TaskPage/index.js";
import AuthorPage from "./features/author/AuthorPage.js";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./Navigation/index.js";
import Container from "./common/Container/styled.js";
import { toAuthor, toTask, toTasks } from "./routes.js";

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Container>
        <Switch>
          <Route path={toTask()}>
            <TaskPage />
          </Route>
          <Route path={toTasks()}>
            <TasksPage />
          </Route>
          <Route path={toAuthor()}>
            <AuthorPage />
          </Route>
          <Route path="/">
            <Redirect to= {toTasks()}/>
          </Route>
        </Switch>
      </Container>
    </HashRouter>
  );
};

export default App;
