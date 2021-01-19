import './App.css';
import DogList from './components/DogList'
import ButtonContainer from './components/ButtonContainer'
import dogsData from './data/dogs'
import {useState} from 'react'
import {ReactComponent as Logo} from './assets/logo.svg';

function App() {
  const [dogs, setDogs] = useState(dogsData)
  return (
    <div className="min-h-screen p-4 bg-gradient-to-r from-green-300 to-green-500 App">
      <div className="flex items-center w-1/3 mx-auto mb-8 text-white ">
      <Logo className="w-20 h-20 mr-4 focus:outline-none" /> <span className="text-4xl md:text-6xl primary-font">Dogs of Voyant</span>
      </div>
      <ButtonContainer setDogs={setDogs} dogs={dogs}/>
      <DogList dogs={dogs} setDogs={setDogs}/>
    </div>
  );
}

export default App;
