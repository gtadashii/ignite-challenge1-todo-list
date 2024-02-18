import "./global.css";
import { Header } from "./components/Header";
import styles from "./App.module.css";
import { AddTaskInput } from "./components/AddTaskInput";
import { AddTaskButton } from "./components/AddTaskButton";
import { PlusCircle } from "@phosphor-icons/react";

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
      </div>
    </main>
  );
}

export default App;
