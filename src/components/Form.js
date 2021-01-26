import React from 'react';

const Form = ({ newTaskInput, setNewTaskInput, handleSubmit }) => (
  <div className="formContainer">
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="new task"
        className="input"
        value={newTaskInput}
        onChange={(event) => {
          setNewTaskInput(event.target.value);
        }}
      />
      <button type="submit" className="submitButton">
        Add task
      </button>
    </form>
  </div>
);

export default Form;
