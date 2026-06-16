import { useEffect, useState } from 'react';

import WashCard from '../../components/WashCard/WashCard';
import { MOCK_WASHES } from '../../mocks/washes';

import './style.css';
import type { Wash } from '../../interfaces/Washes';

import WashService from '../../services/WashService';

function HomePage() {
  const list = MOCK_WASHES;
  const [search, setSearch] = useState('');
  const [wash, setWash] = useState<Wash[]>([]);

  const service = WashService();
  useEffect(() => {
    const washData = service.getAll();

    if (washData) {
      const washesArray = Object.values(washData) as Wash[];
      setWash(washesArray);
    }
  }, []);

  const washSearch = list.filter((wash: any) => {
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
      {washSearch.map((wash: Wash) => (
        <WashCard key={wash.id} wash={wash} service={service} />
      ))}
    </section>
  );
}

export default HomePage;
