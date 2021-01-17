import './App.css';
import DogList from './components/DogList'

function App() {
  return (
    <div className="bg-gray-100 App">
      <header className="p-5">
      Dogs of Voyant
      </header>
      <DogList />
    </div>
  );
}

export default App;
