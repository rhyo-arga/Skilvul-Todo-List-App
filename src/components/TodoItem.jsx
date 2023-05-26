/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

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
    if (title.trim() !== '') {
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
      <li>
        {isEditing ? (
          <>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={handleSaveEdit}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </>
        ) : (
          <>
            <span>{todo.title}</span>
            <AiFillEdit onClick={handleEdit}/> 
            <AiFillDelete onClick={handleDelete}/>

          </>
        )}
      </li>
    </>
    
  );
};

export default TodoItem;
