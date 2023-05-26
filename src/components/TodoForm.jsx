import { useState, useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <form className='w-100 d-flex align-items-center justify-content-center gap-5' onSubmit={handleSubmit}>
      <input className='w-50' required
        type="text"
        placeholder="Type your plan here..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className='btn btn-primary'>Add</button>
    </form>
  );
};

export default TodoForm;
