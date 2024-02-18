import "./global.css";
import { Header } from "./components/Header";
import styles from "./App.module.css";
import { AddTaskInput } from "./components/AddTaskInput";
import { AddTaskButton } from "./components/AddTaskButton";
import { PlusCircle } from "@phosphor-icons/react";
import { ListHeader } from "./components/List/ListHeader";
import { TaskItem } from "./components/List/TaskItem";
import { Empty } from "./components/List/Empty";

export interface Task {
  id: string;
  description: string;
  finished: boolean;
}

const tasks: Task[] = [
  {
    id: "1",
    description:
      "Preciso ir ao mercado comprar todos os itens para fazer panquecas para o café da manhã",
    finished: false,
  },
  {
    id: "2",
    description:
      "Preciso ir ao mercado comprar todos os itens para fazer panquecas para o café da manhã",
    finished: true,
  },
];

function App() {
  return (
    <main>
      <Header />
      <div className={styles.mainArea}>
        <div className={styles.newTaskInfo}>
          <AddTaskInput />
          <AddTaskButton>
            Criar
            <PlusCircle size={16} color="#F2F2F2" weight="bold" />
          </AddTaskButton>
        </div>
        <div className={styles.taskList}>
          <ListHeader />

          {tasks.length > 0 ? (
            <div className={styles.task}>
              {tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  id={task.id}
                  description={task.description}
                  finished={task.finished}
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
