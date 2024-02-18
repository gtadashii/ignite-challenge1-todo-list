import clipboardIcon from "/clipboard.svg";

import styles from "./Empty.module.css";

export function Empty() {
  return (
    <div className={styles.emptyCointainer}>
      <img src={clipboardIcon} />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
