import WashCard from '../../components/WashCard/WashCard';
import './style.css';
import { MOCK_WASHES } from '../../mocks/washes';

function HomePage() {
  const washList = MOCK_WASHES.map((wash) => (
    <WashCard
      car={wash.car.model}
      plate={wash.car.plate}
      client={wash.client.name}
      entry={wash.timestamps.entry}
      exit={wash.timestamps.exit}
      obs={`${wash.service.os}. ${wash.service.obs}`}
    />
  ));
  return (
    <section className="page-section">
      <input type="text" className="searchbar" placeholder="Buscar por Placa" />
      {washList}
    </section>
  );
}

export default HomePage;

//wash recebe NOME DO CARRO, PLACA, ENTRADA, SAIDA, SERVIÇO, OBS, NOME DO CLIENTE, OS
//  <WashCard
//         car={wash.veiculo.modelo}
//         plate={wash.veiculo.placa}
//         client={wash.cliente.nome}
//         entry={wash.timestamps.entrada}
//         exit={wash.timestamps.saida}
//         obs={`${wash.servico.os}. ${wash.servico.observacao}`}
//       />
