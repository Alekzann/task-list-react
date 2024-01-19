import { ButtonsContainer, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleHideDone, setAllDone, selectIsEveryTaskDone, selectAreTasksEmpty, selectHideDone } from "../tasksSlice";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const dispatch = useDispatch();

  return (
    <ButtonsContainer>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </ButtonsContainer>
  );
};

export default Buttons;
