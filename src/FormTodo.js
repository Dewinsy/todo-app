import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap';

function FormTodo({ addTodo }) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      // e.preventDefault();
      if (e.keyCode !== 13){
        e.preventDefault()
        if (!value) return;
        addTodo(value);
        setValue("");
      }; //prevent enter key from submitting
    };
  
    return (
      <Form onSubmit={handleSubmit}> 
      <Form.Group>
        <Form.Control 
        type="text" 
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