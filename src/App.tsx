import './App.css';
import './AppTheme.css';
import HUD from './components/HUD';
import MissionScreen from './components/MissionScreen';
import ResultsPage from './components/ResultsPage';
import { useGameStore } from './store';

function App() {
  const finished = useGameStore((s: { finished: boolean }) => s.finished);
  return (
    <div className="app-layout">
      <header className="app-header">
        <img src="/src/assets/cracked-droplet-animated.svg" alt="Last Drop Logo" className="app-logo" />
        <h1 className="app-title">LAST DROP</h1>
        <div className="app-tagline">
          Every Drop Counts. Every Mile Matters.
        </div>
        <img src="/src/assets/runner.svg" alt="Wasteland runner" className="runner-img" />
      </header>
      <main className="app-main">
        {!finished ? (
          <>
            <HUD />
            <MissionScreen />
          </>
        ) : (
          <ResultsPage />
        )}
      </main>
      <footer className="app-footer">
        © 2025 Elizabeth Johnson — Global Career Accelerator
      </footer>
    </div>
  );
}

export default App;
