import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import FinancePage from '../pages/FinancePage/FinancePage';
import HistoryPage from '../pages/HistoryPage/HistoryPage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/finance" element={<FinancePage />} />
    </Routes>
  );
}

export default Router;
