import './App.css';
import DogList from './components/DogList'
import ButtonContainer from './components/ButtonContainer'
import dogsData from './data/dogs'
import {useState} from 'react'
import {ReactComponent as Logo} from './assets/noun_dog.svg';

function App() {
  const [dogs, setDogs] = useState(dogsData)
  return (
    <div className="min-h-screen p-4 bg-gradient-to-r from-green-300 to-green-500 App">
      <div className="flex items-center w-1/3 mx-auto mb-8 text-white ">
      <Logo className="w-16 h-16 pt-3 mr-4 text-white bg-white rounded-full focus:outline-none" /> <span className="text-6xl primary-font">Dogs of Voyant</span>
      </div>
      <ButtonContainer setDogs={setDogs} dogs={dogs}/>
      <DogList dogs={dogs}/>
    </div>
  );
}

export default App;
