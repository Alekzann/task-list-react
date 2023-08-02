import "./style.css"

const Tasks = ({tasks, hideDoneTasks}) => (
  <ul className="section__list">
    { tasks.map(task => (
      <li key={task.id}
        className={`section__item ${hideDoneTasks && task.done ? " section__item--hidden" : ""}`}
      >
        <button className="section__buttonDone"> 
		 		{task.done ? "✔" : ""}
			</button>
       		<span className={`${task.done ? "section__item--done" : ""}`}> 
		 		{task.content} 
			</span>
			<button className="section__buttonRemove">🗑️
			</button>
      </li>
    ))}
  </ul>
);

export default Tasks;