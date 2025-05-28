import React, { useState } from 'react';
import './NewTaskForm.css';

function NewTaskForm({ addTask }) {
  const [text, setText] = useState('');
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTask(text);
    setText('');
  };


  return (
    <form onSubmit={onSubmitHandler}>
      <input
        placeholder="Что нужно сделать"
        className="form-control search-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}

export default NewTaskForm;
