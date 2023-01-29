import "./TaskItem.css";

function TaskItem(props) {
  const closeTask = () => {
    props.delete(props.id);
  };

  return (
    <div className="task animate pop">
      <p className="taskName">{props.name}</p>
      <button className="btn " onClick={closeTask}>
        &times;
      </button>
    </div>
  );
}

export default TaskItem;
