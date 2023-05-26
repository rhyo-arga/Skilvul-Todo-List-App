/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoItem = ({ todo }) => {
  const { editTodo, deleteTodo } = useContext(TodoContext);

  const handleEdit = () => {
    const newTitle = prompt('Enter a new title', todo.title);
    if (newTitle && newTitle.trim() !== '') {
      editTodo({
        ...todo,
        title: newTitle,
      });
    }
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <>
      <li>
        <span>{todo.title}</span>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </li>
    </>
  );
};

export default TodoItem;
