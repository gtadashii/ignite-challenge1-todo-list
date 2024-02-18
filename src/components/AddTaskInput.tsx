import styles from "./AddTaskInput.module.css";

export function AddTaskInput() {
  return (
    <input className={styles.bar} placeholder="Adicione uma nova tarefa" />
  );
}
