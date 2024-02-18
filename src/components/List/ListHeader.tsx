import styles from "./ListHeader.module.css";

export interface ListHeaderProps {
  taskCounter: number;
  finishedTasksCounter: number;
}

export function ListHeader({
  taskCounter,
  finishedTasksCounter,
}: ListHeaderProps) {
  return (
    <header className={styles.container}>
      <aside>
        <p>Tasks criadas</p>
        <span>{taskCounter}</span>
      </aside>

      <aside>
        <p>Concluídas</p>
        <span>
          {taskCounter === 0
            ? taskCounter
            : `${finishedTasksCounter} de ${taskCounter}`}
        </span>
      </aside>
    </header>
  );
}
