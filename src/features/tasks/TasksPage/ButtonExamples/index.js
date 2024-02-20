import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectIsLoading } from "../../tasksSlice";
import { ButtonStyled } from "../ButtonsStilization/styled";

export const ButtonExamples = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <ButtonStyled
        disabled={isLoading}
        onClick={() => dispatch(fetchExampleTasks())}
      >
        {isLoading === true ? "Ładowanie..." : "Pobierz przykładowe zadania"}
      </ButtonStyled>
    </>
  );
};
