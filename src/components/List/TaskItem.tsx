import { Check, Trash } from "@phosphor-icons/react";
import { Task } from "../../App";
import styles from "./TaskItem.module.css";

export interface TaskItemProps {
  taskData: Task;
  removeTask: (id: string) => void;
}

export function TaskItem({ taskData, removeTask }: TaskItemProps) {
  function handleRemoveTask() {
    removeTask(taskData.id);
  }

  const checkboxCheckedClassname = taskData.finished
    ? styles["checkbox-checked"]
    : styles["checkbox-unchecked"];
  const paragraphCheckedClassname = taskData.finished
    ? styles["paragraph-checked"]
    : "";

  return (
    <div className={styles.item}>
      <div>
        <label htmlFor="checkbox">
          <input readOnly type="checkbox" checked={taskData.finished} />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {taskData.finished && <Check size={12} />}
          </span>

          <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
            {taskData.description}
          </p>
        </label>
      </div>

      <button onClick={handleRemoveTask}>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  );
}
