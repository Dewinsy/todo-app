import React from 'react'
import { Button} from 'react-bootstrap';
import { AiFillDelete } from "react-icons/ai";

function TodoItem({ todo, index, markTodo, removeTodo }) {
    return (
      <div className="todo" >
        <span>{todo.text}</span>
        <div>
          <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
          <Button variant="outline-danger" onClick={() => removeTodo(index)}><AiFillDelete /></Button>
          
        </div>
      </div>
    );
  }

  export default TodoItem;

  