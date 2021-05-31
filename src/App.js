import React, {useState,useEffect} from "react";
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import TodoItem from './TodoItem'
import FormTodo from './FormTodo'

function App() {
  const [todos, setTodos] = useState([
    {
      text: "This is a sample todo",
      key: Date.now(),
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [{ text },...todos ];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const deleteAll = index => {
    const newTodos = [...todos];
    newTodos.splice(index, todos.length);
    setTodos(newTodos);
  };

  useEffect(() => {
    setTodos(JSON.parse(window.localStorage.getItem('todos')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div>
      <div className="container">
        <h1 className="text-center mb-4">TASK Manager</h1>
        <Button onClick={deleteAll} variant="outline-danger" className="custom_delete_button">Delete all tasks</Button>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card className="custom_card">
              <Card.Body >
                <TodoItem
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
