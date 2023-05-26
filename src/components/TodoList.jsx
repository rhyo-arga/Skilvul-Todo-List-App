import { useContext, useEffect } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoItem from './TodoItem';
import axios from 'axios';

const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContext);

  useEffect(() => {
    const fetchTodos = async () => {
      await axios.get('https://64619827185dd9877e3f46e3.mockapi.io/coba/todo')
      .then(result => {setTodos(result.data)})
    };
    fetchTodos();
  }, [])

  return (
    <>
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo}/>
        ))}
      </ul>
    </div>
    </>
  );
};

export default TodoList;
