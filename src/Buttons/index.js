import "./style.css"

const Buttons = ({ tasks, hideDone, toggleHideDone, toggleAllDone }) => (

	<span className="buttons">
		{tasks.length > 0 && (
			<>
				<button onClick={toggleHideDone} className="buttons__button">
					{hideDone ? "Pokaż" : "Ukryj"} ukończone
				</button>
				<button
					className="buttons__button"
					onClick={toggleAllDone}
					disabled={tasks.every(({ done }) => done)}>
					Ukończ wszystkie
				</button>
			</>)}
	</span>
);

export default Buttons;