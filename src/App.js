import './App.css';
import DogList from './components/DogList'
import ButtonContainer from './components/ButtonContainer'

function App() {
  return (
    <div className="bg-gradient-to-r from-green-300 to-green-500 App">
      <header className="text-center text-white">
      Dogs of Voyant
      </header>
      <ButtonContainer />
      <DogList />
    </div>
  );
}

export default App;
