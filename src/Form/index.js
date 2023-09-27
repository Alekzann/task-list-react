import { useState } from 'react';
import { FormStyle, Input, Button } from "./styled.js";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    setNewTaskContent("");
    if (newTaskContent.trim() === "") { return }
    addNewTask(newTaskContent.trim())
  };

  return (
    <FormStyle onSubmit={onFormSubmit}>
      <Input value={newTaskContent}
        placeholder="Co jest do zrobienia"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>
        Dodaj zadanie
      </Button>
    </FormStyle>
  );
};

export default Form;