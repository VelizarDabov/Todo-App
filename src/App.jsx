import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./store/action";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() !== "") {
      dispatch(AddTodoAction({ id: Math.random(), todo }));
      setTodo("");
    }
  };

  const removeHandler = (todoId) => {
    dispatch(RemoveTodoAction(todoId));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo App</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter a Todo"
            style={{
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: "none",
              fontSize: 20,
            }}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            style={{
              padding: 10,
              borderRadius: 20,
              fontSize: 20,
            }}
          >
            Go
          </button>
        </form>
        <ul className="allTodos">
          {console.log(todos)}
          {todos &&
            todos.map((t) => (
              <li key={t.id} className="singleTodo">
                <span className="todoText">{t.todo}</span>
                <button
                  className="deleteBtn"
                  onClick={() => removeHandler(t.id)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;