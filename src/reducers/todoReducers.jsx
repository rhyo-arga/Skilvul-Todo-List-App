const todoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, action.payload];
      case 'EDIT_TODO':
        return state.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        );
      case 'DELETE_TODO':
        return state.filter((todo) => todo.id !== action.payload);
      case 'SET_TODOS':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default todoReducer;  