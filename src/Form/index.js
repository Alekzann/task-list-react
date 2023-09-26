import { useState } from 'react';
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    setNewTaskContent("");
    if (newTaskContent.trim() === "") { return }
    addNewTask(newTaskContent.trim())
  };

  return (
    <form onSubmit={onFormSubmit} className="form">
      <input value={newTaskContent}
        className="form__newTask"
        placeholder="Co jest do zrobienia"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button className="form__addTaskButton">Dodaj zadanie</button>
    </form>
  );
}

export default Form;