import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min.js";
import { List, Item, Content, Button } from "./styled.js";
import {
  selectTasks,
  toggleTaskDone,
  removeTask,
  selectHideDone,
} from "../../tasksSlice.js";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button $toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>
          <Content $done={task.done}>
            <NavLink to={`/zadania/${task.id}`}>{task.content}</NavLink>
          </Content>
          <Button $remove onClick={() => dispatch(removeTask(task.id))}>
            🗑️
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
