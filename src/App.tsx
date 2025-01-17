import './App.css'
import TilesGrid from './components/ui/TilesGrid'
import words from "./data/data.json"; // Import JSON data

function App() {

  return (
    <>
      <div>
        <TilesGrid items = {words}/>
      </div>
   
    </>
  )
}

export default App
