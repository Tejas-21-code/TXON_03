import React, { useState } from "react";
import "./NewTask.css";

function NewTask(props) {
  const [newTask, setNewTask] = useState({ Task_name: "" });
  const changeHandler = (event) => {
    setNewTask({
      id: Math.random(),
      Task_name: event.target.value,
    });
  };
  const submitHandler = () => {
    if (newTask.Task_name !== "") {
      props.addTask(newTask);
    }
    setNewTask({ Task_name: "" });
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      submitHandler();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTask.Task_name}
        onKeyDown={handleKeyPress}
        onChange={changeHandler}
      />
      <button onClick={submitHandler}>Add Task</button>
    </div>
  );
}
export default NewTask;
