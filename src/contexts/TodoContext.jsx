/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from 'react';
import todoReducer from '../reducers/todoReducers';
import { getTodos, addTodo, editTodo, deleteTodo } from '../api';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await getTodos();
        dispatch({ type: 'SET_TODOS', payload: response.data });
      } catch (error) {
        console.log('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  const addTodoItem = async (title) => {
    try {
      const response = await addTodo({
        title,
        isDone: false,
      });
      dispatch({ type: 'ADD_TODO', payload: response.data });
    } catch (error) {
      console.log('Error adding todo:', error);
    }
  };

  const editTodoItem = async (todo) => {
    try {
      const response = await editTodo({
        id: todo.id,
        title: todo.title,
        isDone: todo.isDone,
      });
      dispatch({ type: 'EDIT_TODO', payload: response.data });
    } catch (error) {
      console.log('Error editing todo:', error);
    }
  };

  const deleteTodoItem = async (todoId) => {
    try {
      await deleteTodo(todoId);
      dispatch({ type: 'DELETE_TODO', payload: todoId });
    } catch (error) {
      console.log('Error deleting todo:', error);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo: addTodoItem,
        editTodo: editTodoItem,
        deleteTodo: deleteTodoItem,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
