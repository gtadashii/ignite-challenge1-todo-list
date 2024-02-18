import styles from "./ListHeader.module.css";

export function ListHeader() {
  return (
    <header className={styles.container}>
      <aside>
        <p>Tasks criadas</p>
        <span>{0}</span>
      </aside>

      <aside>
        <p>Concluídas</p>
        <span>{0}</span>
      </aside>
    </header>
  );
}
