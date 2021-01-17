import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import DogCard from './DogCard'
import dogsData from '../data/dogs'


export default function DogList() {
  const [dogs, setDogs] = useState(dogsData);

  
  return (
    <div class="">
    <div className="flex flex-wrap -mx-4 overflow-hidden">
        {dogs.map((dog) => <DogCard key={dog.name + dog.owner} dog={dog} />)}
    </div>
    </div>
  
  );
}