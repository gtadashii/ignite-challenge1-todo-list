import { Check, Trash } from "@phosphor-icons/react";
import { Task } from "../../App";
import styles from "./TaskItem.module.css";

export function TaskItem(data: Task) {
  const checkboxCheckedClassname = data.finished
    ? styles["checkbox-checked"]
    : styles["checkbox-unchecked"];
  const paragraphCheckedClassname = data.finished
    ? styles["paragraph-checked"]
    : "";

  return (
    <div className={styles.item}>
      <div>
        <label htmlFor="checkbox">
          <input readOnly type="checkbox" checked={data.finished} />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {data.finished && <Check size={12} />}
          </span>

          <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
            {data.description}
          </p>
        </label>
      </div>

      <button>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  );
}
