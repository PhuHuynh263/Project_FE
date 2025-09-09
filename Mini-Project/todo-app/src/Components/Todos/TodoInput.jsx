import { useDispatch } from "react-redux";
import { createTodo } from "../../actions/todos";
import { useRef } from "react";
import { IoMdAdd } from "react-icons/io";
function TodoInput() {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.elements.content.value !== "") {
            dispatch(createTodo(e.target.elements.content.value));
            inputRef.current.value = "";
            inputRef.current.focus();
        }
    }

    return (
        <>
            <div className="todo__input">
                <form onSubmit={handleSubmit}>
                    <label>Enter your task</label>
                    <input ref={inputRef} type="text" name="content" />
                    <button className="todo__btn--submit" type="submit"><IoMdAdd /></button>
                </form>
            </div>
        </>
    );
}

export default TodoInput;