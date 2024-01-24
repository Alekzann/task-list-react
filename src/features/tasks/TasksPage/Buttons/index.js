import { ButtonStyled, ButtonsContainer } from "../ButtonsStilization/styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleHideDone, setAllDone, selectIsEveryTaskDone, selectAreTasksEmpty, selectHideDone } from "../../tasksSlice";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const dispatch = useDispatch();

  return (
    <ButtonsContainer>
      {!areTasksEmpty && (
        <>
          <ButtonStyled onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </ButtonStyled>
          <ButtonStyled
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </ButtonStyled>
        </>
      )}
    </ButtonsContainer>
  );
};

export default Buttons;
