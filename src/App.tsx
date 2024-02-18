import "./global.css";
import { Header } from "./components/Header";
import styles from "./App.module.css";
import { AddTaskInput } from "./components/AddTaskInput";
import { AddTaskButton } from "./components/AddTaskButton";
import { PlusCircle } from "@phosphor-icons/react";
import { ListHeader } from "./components/List/ListHeader";
import { TaskItem } from "./components/List/TaskItem";
import { Empty } from "./components/List/Empty";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export interface Task {
  id: string;
  description: string;
  finished: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState("");

  function handleTaskCreation() {
    if (!inputValue) return;

    const newTask: Task = {
      id: uuid(),
      description: inputValue,
      finished: false,
    };

    setTasks([...tasks, newTask]);

    setInputValue("");
  }

  function handleTaskDeletion(id: string) {
    console.log("Deletando tarefa", id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function changeTaskStatus(id: string, status: boolean) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.finished = status;
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  return (
    <main>
      <Header />
      <div className={styles.mainArea}>
        <div className={styles.newTaskInfo}>
          <AddTaskInput
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <AddTaskButton onClick={handleTaskCreation}>
            Criar
            <PlusCircle size={16} color="#F2F2F2" weight="bold" />
          </AddTaskButton>
        </div>
        <div className={styles.taskList}>
          <ListHeader
            taskCounter={tasks.length}
            finishedTasksCounter={tasks.filter((task) => task.finished).length}
          />

          {tasks.length > 0 ? (
            <div className={styles.task}>
              {tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  taskData={task}
                  removeTask={handleTaskDeletion}
                  setTaskStatus={changeTaskStatus}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
