import styles from "./AddTaskButton.module.css";

import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function AddTaskButton({ children, ...rest }: Props) {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
}
