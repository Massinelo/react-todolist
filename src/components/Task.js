import React from 'react';

const Task = ({ handleCheck, handleRemove, tasks }) => {
  return (
    <div className="taskContainer">
      {tasks.map((task, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={() => {
              handleCheck(index);
            }}
          />
          <span className={task.isDone ? 'done' : ''}>{task.title}</span>
          <button
            onClick={() => {
              handleRemove(index);
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Task;
