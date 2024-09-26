import Tag from "./Tag";
import "./TaskCard.css";

function TaskCard({ title, tags, index, taskDelete, taskDone }) {
  return (
    <article className="task-card">
      <p>{title}</p>
      <div className="task-card-bottom">
        <div className="task-card-tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected={true} />
          ))}
        </div>
        <div className="task-card-func">
          <div className="task-delete" onClick={() => taskDelete(index)}>
            <img src="bin.png" alt="delete" />
          </div>
          <div className="task-done" onClick={() => taskDone(index)}>
            <img src="check.png" alt="done" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default TaskCard;
