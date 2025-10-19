import './App.css';
import './AppTheme.css';
import HUD from './components/HUD';
import MissionScreen from './components/MissionScreen';
import ResultsPage from './components/ResultsPage';
import { useStore } from './store';

function App() {
  const finished = useStore((s) => s.finished);
  return (
    <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ textAlign: 'center', padding: '2rem 0 1rem 0' }}>
        <img src="/src/assets/cracked-droplet-animated.svg" alt="Last Drop Logo" style={{ width: 96, height: 96, marginBottom: 16 }} />
        <h1 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '2.5rem', color: '#0ff', margin: 0, letterSpacing: '0.1em', textShadow: '0 0 12px #0ff, 0 0 32px #f0f' }}>LAST DROP</h1>
        <div style={{ color: '#ffb347', fontSize: '1.2rem', margin: '0.5rem 0 0 0', fontWeight: 500, textShadow: '0 0 8px #222' }}>
          Every Drop Counts. Every Mile Matters.
        </div>
      </header>
      <main style={{ flex: 1 }}>
        {!finished ? (
          <>
            <HUD />
            <MissionScreen />
          </>
        ) : (
          <ResultsPage />
        )}
      </main>
      <footer style={{ textAlign: 'center', color: '#888', fontSize: '1rem', padding: '1rem 0 0.5rem 0', letterSpacing: '0.05em' }}>
        © 2025 Elizabeth Johnson — Global Career Accelerator
      </footer>
    </div>
  );
}

export default App;
