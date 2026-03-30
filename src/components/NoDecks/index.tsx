import styles from './styles.module.css';

export function NoDecks() {
  return (
    <div className={styles.noDecks}>
      <h2>Nenhum baralho encontrado</h2>
      <p>Adicione um baralho ou importe no aba importar/exportar</p>
    </div>
  );
}
