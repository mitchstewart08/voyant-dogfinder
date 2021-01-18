import './App.css';
import DogList from './components/DogList'
import ButtonContainer from './components/ButtonContainer'
import dogsData from './data/dogs'
import {useState} from 'react'

function App() {
  const [dogs, setDogs] = useState(dogsData)
  return (
    <div className="min-h-screen p-4 bg-gradient-to-r from-green-300 to-green-500 App">
      <header className="text-center text-white">
      Dogs of Voyant
      </header>
      <ButtonContainer setDogs={setDogs} dogs={dogs}/>
      <DogList dogs={dogs}/>
    </div>
  );
}

export default App;
