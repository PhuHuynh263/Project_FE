import { useSelector } from "react-redux";
import { ImCheckboxChecked } from "react-icons/im";
import { FaX } from "react-icons/fa6";
import { ImCheckboxUnchecked } from "react-icons/im";
import { useDispatch } from "react-redux";
import { completedTodo, deleteTodo, unCompletedTodo } from "../../actions/todos";
function TodoList() {
    const todoList = useSelector(state => state.todosReducer);
    const dispatch = useDispatch();
    const handleCompleted = (id) => {
        dispatch(completedTodo(id));
    }

    const handleUnCompleted = (id) => {
        dispatch(unCompletedTodo(id));
    }

    const handleDeleted = (id) => {
        dispatch(deleteTodo(id));
    }

    return (
        <>
            <div className="todo__list">
                {todoList.map(item => {
                    return (<>
                        <li className="todo__item" key={item.id}>
                            <span className={"todo__content " + (item.completed && " todo__content--completed")}>{item.content}</span>
                            {item.completed ?
                                (<button className="todo__btn todo__btn--checked" onClick={() => handleUnCompleted(item.id)}><ImCheckboxChecked /></button>)
                                :
                                (<button className="todo__btn todo__btn--checked" onClick={() => handleCompleted(item.id)}><ImCheckboxUnchecked /></button>)
                            }
                            <button className="todo__btn todo__btn--deleted" onClick={() => handleDeleted(item.id)}><FaX /></button>
                        </li>
                    </>)
                })}
            </div>
        </>
    )
}
export default TodoList;