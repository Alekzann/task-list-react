import "./style.css"

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="section__list">
    {tasks.map(task => (
      <li key={task.id}
        className={`section__item ${hideDone && task.done ? " section__item--hidden" : ""}`}
      >
        <button
          className="section__buttonDone"
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔" : ""}
        </button>
        <span className={`${task.done ? "section__item--done" : ""}`}>
          {task.content}
        </span>
        <button onClick={() => removeTask(task.id)}
          className="section__buttonRemove">🗑️</button>
      </li>
    ))}
  </ul>
);

export default Tasks;