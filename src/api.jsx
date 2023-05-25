import axios from 'axios';

const API_BASE_URL = 'https://64619827185dd9877e3f46e3.mockapi.io/coba';

export const getTodos = () => {
  return axios.get(`${API_BASE_URL}/todo`);
};

export const addTodo = (todo) => {
  return axios.post(`${API_BASE_URL}/todo`, todo);
};

export const editTodo = (todo) => {
  return axios.put(`${API_BASE_URL}/todo/${todo.id}`, todo);
};

export const deleteTodo = (todoId) => {
  return axios.delete(`${API_BASE_URL}/todo/${todoId}`);
};
