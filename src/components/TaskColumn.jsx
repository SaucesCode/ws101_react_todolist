import TaskCard from "./TaskCard";
import "./TaskColumn.css";

function TaskColumn({
  icon,
  title,
  taskDisplay,
  status,
  taskDelete,
  taskDone,
}) {
  return (
    <section className="task-column">
      <h2>
        <img className="task-column-icon" src={icon} alt="doing" />
        {title}
      </h2>
      {taskDisplay.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              taskDelete={taskDelete}
              taskDone={taskDone}
              index={index}
            />
          )
      )}
    </section>
  );
}

export default TaskColumn;
