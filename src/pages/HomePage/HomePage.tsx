import WashCard from '../../components/WashCard/WashCard';
import './style.css';
import { MOCK_WASHES } from '../../mocks/washes';
import { useState } from 'react';

function HomePage() {
  const [list, setList] = useState(MOCK_WASHES);

  const washList = list.map((wash) => (
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
