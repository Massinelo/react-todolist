import React from 'react';

//Icons (using react-icons)
import { FaTrash } from 'react-icons/fa';

const Task = ({ handleCheck, handleRemove, tasks }) => (
  <div className="taskContainer">
    {tasks.map((task, index) => (
      <div key={index} className="task">
        <div>
          <input
            type="checkbox"
            checked={task.isDone}
            className="checkbox"
            onChange={() => {
              handleCheck(index);
            }}
          />
          <span className={task.isDone ? 'done' : ''}>{task.title}</span>
        </div>
        <FaTrash
          className="trashIcon"
          onClick={() => {
            handleRemove(index);
          }}
        />
      </div>
    ))}
  </div>
);

export default Task;
