import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../features/todos/todoSlice";

export default function TodoItem ({ todo }) {
    const dispatch = useDispatch()

    const toggleComplete = () => {
    if (todo.id > 200) {
        // fake ID → update Redux only
        dispatch(updateTodo({
        ...todo,
        completed: !todo.completed
        }));
    } else {
        // real ID → call API thunk
        dispatch(updateTodo({
        ...todo,
        completed: !todo.completed
        }));
    }
    };

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
    }

    return (
        <li>
            <input type="checkbox" checked={todo.completed} onChange={toggleComplete} />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                {todo.title}
            </span>

            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}