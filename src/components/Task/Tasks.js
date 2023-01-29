import TaskItem from "./TaskItem.js";

function Tasks(props) {
  const deleteTask = (data) => {
    const filteredData = props.TaskList.filter((task) => task.id !== data);
    props.onDelete(filteredData);
  };
  return (
    <div>
      {props.TaskList.map((task) => (
        <TaskItem name={task.Task_name} id={task.id} delete={deleteTask} />
      ))}
    </div>
  );
}
export default Tasks;
