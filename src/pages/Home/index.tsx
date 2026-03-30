import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { NoDecks } from '../../components/NoDecks';
import styles from './styles.module.css';

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <NoDecks />
      </Container>
    </>
  );
}
