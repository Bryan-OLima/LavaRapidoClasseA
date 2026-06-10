import { useState } from 'react';

import WashCard from '../../components/WashCard/WashCard';
import { MOCK_WASHES } from '../../mocks/washes';

import './style.css';

function HomePage() {
  const [list, setList] = useState(MOCK_WASHES);
  const handleRemoveWash = (id: string) => {
    setList((p) => p.filter((wash) => wash.id !== id));
  };

  const washList = list.map((wash) => (
    <WashCard
      key={wash.id}
      id={wash.id}
      car={wash.car.model}
      plate={wash.car.plate}
      client={wash.client.name}
      value={wash.service.value}
      exit={wash.timestamps.exit}
      notes={`${wash.service.os}. ${wash.service.obs}`}
      onRemove={handleRemoveWash}
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
