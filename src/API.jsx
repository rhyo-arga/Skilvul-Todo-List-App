import axios from 'axios';

const API_BASE_URL = 'https://api.mockapi.io/v1';

export const getTodos = () => {
  return axios.get(`${API_BASE_URL}/todos`);
};

export const addTodo = (todo) => {
  return axios.post(`${API_BASE_URL}/todos`, todo);
};

export const editTodo = (todo) => {
  return axios.put(`${API_BASE_URL}/todos/${todo.id}`, todo);
};

export const deleteTodo = (todoId) => {
  return axios.delete(`${API_BASE_URL}/todos/${todoId}`);
};
