import React from 'react';

const Form = ({ newTaskInput, setNewTaskInput, handleSubmit }) => {
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="new task"
          value={newTaskInput}
          onChange={(event) => {
            setNewTaskInput(event.target.value);
          }}
        />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
};

export default Form;
