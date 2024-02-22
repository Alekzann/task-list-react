import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));
  const taskContent = task ? task.content : "Nie znalieziono zadania 🥲";
  const taskDone = task ? task.done : false;

  return (
    <>
      <Header title="Szczegóły zadania" />
      <Section
        title={taskContent}
        body={
          <>
            <strong>Ukończono:</strong> {taskDone ? "Tak" : "Nie"}
          </>
        }
      />
    </>
  );
}

export default TaskPage;
