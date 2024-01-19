import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../tasksSlice";
import { ButtonStyled } from "../ButtonsStilization/styled";

export const ButtonExamples = () => {
  const dispatch = useDispatch();
  return (
    <>
      <ButtonStyled onClick={() => dispatch(fetchExampleTasks())}>
        {" "}
        Pobierz przykładowe zadania
      </ButtonStyled>
    </>
  );
};
