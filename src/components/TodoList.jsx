import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, editTodo } = useContext(TodoContext);
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleToggleCompleted = (todo) => {
    editTodo({
      ...todo,
      completed: !todo.completed,
    });
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
    } else {
      return true;
    }
  });

  

  return (
    <>
      <div>
        <button
          onClick={() => handleFilterChange("all")}
          disabled={filter === "all"}
        >
          All
        </button>
        <button
          onClick={() => handleFilterChange("active")}
          disabled={filter === "active"}
        >
          Active
        </button>
        <button
          onClick={() => handleFilterChange("completed")}
          disabled={filter === "completed"}
        >
          Completed
        </button>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            {filteredTodos.map((todo) => (
              <TodoItem 
              key={todo.id} 
              todo={todo} 
              handleToggleCompleted={() => handleToggleCompleted(todo)}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
