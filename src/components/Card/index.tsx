import { useState } from 'react';
import styles from './styles.module.css';

export function Card() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  console.log(isFlipped);
  return (
    <div className={styles.card} onClick={handleClick}>
      <div
        className={`${styles['card-inner']} ${isFlipped ? styles['is-flipped'] : ''}`}
      >
        <div className={styles['card-front']}>
          <p className={styles['card-text']}>Pergunta</p>
        </div>
        <div className={styles['card-back']}>
          <p className={styles['card-text']}>RESPOSTA</p>
        </div>
      </div>
    </div>
  );
}
