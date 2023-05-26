import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useContext(TodoContext);

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
