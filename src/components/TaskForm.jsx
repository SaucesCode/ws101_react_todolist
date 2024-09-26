import "./TaskForm.css";
import Tag from "./Tag";
import { useState } from "react";

function TaskForm({ settaskDisplay }) {
  const [task, setTask] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTask((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const selectTag = (tag) => {
    if (task.tags.some((item) => item === tag)) {
      const filterTags = task.tags.filter((item) => item !== tag);
      setTask((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTask((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const checkTag = (tag) => {
    return task.tags.some((item) => item === tag);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.task.trim()) {
      alert("Task cannot be empty!");
      return;
    }

    settaskDisplay((prev) => {
      return [...prev, task];
    });

    setTask({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <>
      <header className="app-header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            value={task.task}
            className="task-input"
            placeholder="Enter your task"
            onChange={handleChange}
            autoComplete="off"
          />

          <div className="task-form-bottom">
            <div>
              <Tag
                tagName="Morning"
                selectTag={selectTag}
                selected={checkTag("Morning")}
              />
              <Tag
                tagName="Afternoon"
                selectTag={selectTag}
                selected={checkTag("Afternoon")}
              />
              <Tag
                tagName="Evening"
                selectTag={selectTag}
                selected={checkTag("Evening")}
              />
              <Tag
                tagName="Anytime"
                selectTag={selectTag}
                selected={checkTag("Anytime")}
              />
            </div>
            <div>
              <select
                className="task-status"
                value={task.status}
                name="status"
                onChange={handleChange}
              >
                <option value="todo">To do</option>
                <option value="doing">Doing</option>
              </select>
              <button type="submit" className="task-submit">
                Add Task
              </button>
            </div>
          </div>
        </form>
      </header>
    </>
  );
}

export default TaskForm;
