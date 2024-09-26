import { useState } from "react";
import "./App.css";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";

function App() {
  const [taskDisplay, settaskDisplay] = useState([]);

  const taskDone = (taskIndex) => {
    const newTaskDisplay = taskDisplay.map((task, index) => {
      if (index === taskIndex) {
        return { ...task, status: "done" };
      }
      return task;
    });
    settaskDisplay(newTaskDisplay);
  };

  const taskDelete = (taskIndex) => {
    const newTask = taskDisplay.filter((task, index) => index !== taskIndex);
    settaskDisplay(newTask);
  };

  return (
    <div className="App">
      <TaskForm settaskDisplay={settaskDisplay} />
      <main className="app-main">
        <TaskColumn
          title="To do"
          icon="achievement.png"
          taskDisplay={taskDisplay}
          status="todo"
          taskDelete={taskDelete}
          taskDone={taskDone}
        />
        <TaskColumn
          title="Doing"
          icon="star.png"
          taskDisplay={taskDisplay}
          status="doing"
          taskDelete={taskDelete}
          taskDone={taskDone}
        />
        <TaskColumn
          title="Done"
          icon="check-button.png"
          taskDisplay={taskDisplay}
          status="done"
          taskDelete={taskDelete}
          taskDone={taskDone}
        />
      </main>
    </div>
  );
}

export default App;
