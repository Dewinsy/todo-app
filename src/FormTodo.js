import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';

function FormTodo({ addTodo }) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
      if (e.keyCode === 13) return; //prevent enter key from submitting
    };
  
    return (
      <Form onSubmit={handleSubmit}> 
      <Form.Group>
        <Form.Control 
        type="text" 
        key={Date.now()}
        className="input" 
        value={value} 
        onChange={e => setValue(e.target.value)} 
        placeholder="Add a task" />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Add
      </Button>
    </Form>
    );
  }

  export default FormTodo;