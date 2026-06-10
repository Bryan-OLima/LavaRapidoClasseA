import WashCard from '../../components/WashCard/WashCard';
import './style.css';

function HomePage() {
  return (
    <section className="page-section">
      <input type="text" className="searchbar" placeholder="Buscar por Placa" />
      <WashCard />
      <WashCard />
      <WashCard />
    </section>
  );
}

export default HomePage;

//wash recebe NOME DO CARRO, PLACA, ENTRADA, SAIDA, SERVIÇO, OBS, NOME DO CLIENTE, OS
