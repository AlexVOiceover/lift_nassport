import './App.css';
import TilesGrid from './components/ui/TilesGrid';
import SentenceBuilderPage from '../src/pages/SentenceBuilder';
import words from './data/data.json'; // Import JSON data

function App() {
  return (
    <>
      <div>
        <SentenceBuilderPage />
      </div>
    </>
  );
}

export default App;
