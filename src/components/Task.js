import React from 'react';

//Icons (using react-icons)
import { FaTrash } from 'react-icons/fa';

const Task = ({ handleCheck, handleRemove, tasks }) => (
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
        <FaTrash />
      </div>
    ))}
  </div>
);

export default Task;
