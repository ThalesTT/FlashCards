import styles from './styles.module.css';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a href='' className={styles.menuLink}>
        Baralhos
      </a>
      <a href='' className={styles.menuLink}>
        Adicionar
      </a>
      <a href='' className={styles.menuLink}>
        Importar/Exportar
      </a>
      <a href='' className={styles.menuLink}>
        💡
      </a>
    </nav>
  );
}
