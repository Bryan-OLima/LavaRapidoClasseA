import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import AgendaPage from '../pages/AgendaPage/AgendaPage';
import FinancePage from '../pages/FinancePage/FinancePage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/agenda" element={<AgendaPage />} />
      <Route path="/finance" element={<FinancePage />} />
    </Routes>
  );
}

export default Router;
