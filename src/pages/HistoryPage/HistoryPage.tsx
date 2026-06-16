import './style.css';
import { useState } from 'react';

import WashCard from '../../components/WashCard/WashCard';

import type { Wash } from '../../interfaces/Washes';
import { WashService } from '../../services/WashService';
import { useQuery } from '@tanstack/react-query';

function HistoryPage() {
  const [search, setSearch] = useState('');
  const { data: washes, isLoading } = useQuery({
    queryKey: ['washes'],
    queryFn: WashService.getAll,
    select: (data) => {
      return data.sort((a, b) => {
        return a.timestamps.exit.localeCompare(b.timestamps.exit);
      });
    },
  });

  if (isLoading) return <p>Carregando...</p>;

  const washSearch = washes?.filter((wash: any) => {
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
      {washSearch?.map((wash: Wash) => (
        <WashCard key={wash.id} wash={wash} />
      ))}
    </section>
  );
}

export default HistoryPage;
