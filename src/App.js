import React, { useState } from 'react';
import './App.css';

//components
import Header from './components/Header';
import Task from './components/Task';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  const [tasks, setTasks] = useState([
    { title: 'première tache!', isDone: false },
    { title: 'deuxième tache!', isDone: false },
  ]);
  const [newTaskInput, setNewTaskInput] = useState('');

  // take the input content to add a new task
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTasks = [...tasks];
    newTasks.push({ title: newTaskInput, isDone: false });
    setTasks(newTasks);
    setNewTaskInput('');
  };

  // change the status of the task (is the task done or not)
  const handleCheck = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isDone = !newTasks[index].isDone;
    setTasks(newTasks);
  };

  // Remove a task from the list
  const handleRemove = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <Header />

      <Task
        handleCheck={handleCheck}
        handleRemove={handleRemove}
        tasks={tasks}
      />
      <Form
        newTaskInput={newTaskInput}
        setNewTaskInput={setNewTaskInput}
        handleSubmit={handleSubmit}
      />
      <Footer />
    </div>
  );
}

export default App;
