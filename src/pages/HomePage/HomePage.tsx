import { useState } from 'react';

import WashCard from '../../components/WashCard/WashCard';
import { MOCK_WASHES } from '../../mocks/washes';

import './style.css';

function HomePage() {
  const [list, setList] = useState(MOCK_WASHES);
  const [search, setSearch] = useState('');
  // const handleRemoveWash = (id: string) => {
  //   setList((p) => p.filter((wash) => wash.id !== id));
  // };

  const washSearch = list.filter((wash) => {
    return wash.car.plate
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase());
  });

  return (
    <section className="page-section">
      <input
        type="text"
        className="searchbar"
        placeholder="Buscar por Placa"
        onChange={(e) => setSearch(e.target.value)}
      />
      {washSearch.map((wash) => (
        <WashCard
          key={wash.id}
          id={wash.id}
          car={wash.car.model}
          plate={wash.car.plate}
          client={wash.client.name}
          value={wash.service.value}
          exit={wash.timestamps.exit}
          notes={`${wash.service.os}. ${wash.service.obs}`}
          // onRemove={handleRemoveWash}
        />
      ))}
    </section>
  );
}

export default HomePage;
