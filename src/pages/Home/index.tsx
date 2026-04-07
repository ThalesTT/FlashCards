import { Card } from '../../components/Card';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { NoDecks } from '../../components/NoDecks';

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <NoDecks />
      </Container>
      <Card></Card>
    </>
  );
}
