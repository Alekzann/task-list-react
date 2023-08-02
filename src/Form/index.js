import "./style.css";

const Form = () => (
    <form className="form js-form">
                    <input className="form__newTask" placeholder="Co jest do zrobienia"/>
                    <button className="form__addTaskButton">Dodaj zadanie</button>
                </form>
);

export default Form;