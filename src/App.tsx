import './App.css';
import Header from './components/Layout/Header/Header';
import Navbar from './components/Layout/Navbar/Navbar';
import Router from './utils/router';

function App() {
  return (
    <div className="app-container">
      <Header />

      <main className="content">
        <Router />
      </main>

      <Navbar />
    </div>
  );
}

export default App;
