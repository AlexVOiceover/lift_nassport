import viteLogo from '/vite.svg'
import './App.css'
import TilesGrid from './components/ui/TilesGrid'
import words from "./data/data.json"; // Import JSON data

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <TilesGrid items = {words}/>
      </div>
   
    </>
  )
}

export default App
