import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoContextProvider from "./contexts/TodoContext";

const App = () => {
  return (
    <TodoContextProvider>
      <div className="App d-flex flex-column align-items-center justify-content-center gap-5">
        <h1>Todo List</h1>
        <h3>Planning to do something today?</h3>
        <TodoForm />
        <TodoList />
      </div>
    </TodoContextProvider>
  );
};

export default App;
