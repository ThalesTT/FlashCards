import styles from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <a href='' className={styles.logoLink}>
        FlashCards
      </a>
      <span>Flasj</span>
    </div>
  );
}
