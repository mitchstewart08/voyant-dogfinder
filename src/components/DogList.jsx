import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import DogCard from './DogCard'



export default function DogList({dogs, setDogs}) {

  
  return (
    <div class="">
    <div className="flex flex-wrap -mx-4 overflow-hidden">
        {dogs.map((dog) => <DogCard key={dog.name + dog.owner} dog={dog} dogs={dogs} setDogs={setDogs}/>)}
    </div>
    </div>
  
  );
}