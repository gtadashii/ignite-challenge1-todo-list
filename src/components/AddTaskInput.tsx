import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./AddTaskInput.module.css";

export function AddTaskInput({
  ...rest
}: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  {
    return (
      <input
        className={styles.bar}
        placeholder="Adicione uma nova tarefa"
        {...rest}
      />
    );
  }
}
