import { useState, useRef } from 'react';
import { FormStyle, Input, Button } from "./styled.js";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setNewTaskContent("");
    if (newTaskContent.trim() === "") { return }
    addNewTask(newTaskContent.trim())
  };

  return (
    <FormStyle onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        placeholder="Co jest do zrobienia"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button
        onClick={focusInput}>
        Dodaj zadanie
      </Button>
    </FormStyle>
  );
};

export default Form;