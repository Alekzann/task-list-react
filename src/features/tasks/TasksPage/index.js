import Form from "./Form/index.js";
import TaskList from "./TaskList/index.js";
import Buttons from "./Buttons/index.js";
import Section from "../../../common/Section/index.js";
import Header from "../../../common/Header/index.js";

import { ButtonExamples } from "./ButtonExamples/index.js";
import Search from "./Search/index.js";

function TasksPage() {
  return (
    <>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<ButtonExamples />}
      />
      <Section title="Wyszukiwarka" body={<Search />} />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </>
  );
}

export default TasksPage;
