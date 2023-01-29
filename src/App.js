import React, { useState } from "react";
import Tasks from "./components/Task/Tasks.js";
import NewTask from "./components/NewTask/NewTask.js";
import "./App.css";

const TaskList = [];

function App() {
  const [list, setList] = useState(TaskList);
  const [isEmpty, setIsEmpty] = useState(true);

  const deleteHandler = (data) => {
    setList(data);
    if (list.length === 1) {
      setIsEmpty(true);
    }
  };

  const newTask = (data) => {
    setList((previous) => [...previous, data]);
    if (list.length >= 0) {
      setIsEmpty(false);
    }
  };

  return (
    <div className="App">
      <header>To Do List</header>
      <br />
      <NewTask addTask={newTask}></NewTask>
      {isEmpty && <p>No Task Found......</p>}
      {!isEmpty && <Tasks TaskList={list} onDelete={deleteHandler} />}
    </div>
  );
}

export default App;
