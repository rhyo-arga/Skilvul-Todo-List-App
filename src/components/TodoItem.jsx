/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const TodoItem = ({ todo }) => {
  const { editTodo, deleteTodo } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setTitle(todo.title);
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    if (title.trim() !== "") {
      editTodo({
        ...todo,
        title: title.trim(),
      });
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <>
      {isEditing ? (
        <>
          <div className="d-flex align-items-center justify-content-center w-100">
            <div className="border border-dark d-flex align-items-center justify-content-between gap-5 w-50">
              <div className="form-check d-flex align-items-center justify-content-between gap-4">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <div className="d-flex align-items-center justify-content-between gap-5">
                  <button onClick={handleSaveEdit}>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="d-flex align-items-center justify-content-center w-100">
          <div className="border border-dark d-flex align-items-center justify-content-between gap-5 w-50">
            <div className="form-check d-flex align-items-center justify-content-between gap-4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <span id="title">{todo.title}</span>
              </label>
            </div>
            <div className="d-flex align-items-center justify-content-between gap-5">
              <AiFillEdit onClick={handleEdit} />
              <AiFillDelete onClick={handleDelete} />
            </div>
          </div>
        </div>
      )}
      <br />
    </>
  );
};

export default TodoItem;
