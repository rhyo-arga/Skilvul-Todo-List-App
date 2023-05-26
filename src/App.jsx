import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoContextProvider from "./contexts/TodoContext";

const App = () => {
  return (
    <TodoContextProvider>
      <div className="App">
        <h1>Todo List</h1>
        <h2></h2>
        <TodoForm />
        <TodoList />
      </div>
    </TodoContextProvider>
  );
};

export default App;
