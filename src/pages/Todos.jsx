import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../features/todos/todoSlice";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/todoList";
import GitHubCorner from "../components/GithubCorner";

export default function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.items);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div id="app">
      {/* HEADER */}
      <div id="header">
        <div className="flexrow-container">
          <div className="standard-theme theme-selector" />
          <div className="light-theme theme-selector" />
          <div className="darker-theme theme-selector" />
        </div>
        <h1 id="title">
          Just do it.
          <div id="border" />
        </h1>
      </div>

      {/* ADD TODO FORM */}
      <AddTodoForm />

      {/* GITHUB CORNER */}
      <GitHubCorner url="https://github.com/lordwill1/todo-list" />

      {/* TODO LIST */}
      <div id="myUnOrdList">
        <ul className="todo-list">
          <TodoList todos={todos} />
        </ul>
      </div>

      {/* OPTIONAL: Footer or version info */}
      <div className="version">
        <p>
          <span id="datetime" />
        </p>
      </div>
    </div>
  );
}
