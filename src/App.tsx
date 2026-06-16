import './App.css';
import Header from './components/Layout/Header/Header';
import Navbar from './components/Layout/Navbar/Navbar';
import Router from './utils/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <Header />

        <main className="content">
          <Router />
        </main>

        <Navbar />
      </div>
    </QueryClientProvider>
  );
}

export default App;
