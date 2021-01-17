import React , {useState} from 'react';
import ReactDOM from 'react-dom';


export default function DogCard({dog}) { 
  return (
    <div className="w-1/3 p-4 min-w-min">
      <div className="w-5/6 p-4 mx-auto text-justify bg-white border-2 border-gray-200 border-solid rounded-lg">
        <p><span>Name: </span>{dog.name}</p>
        <p><span>Breed: </span>{dog.breed}</p>
        <p><span>Owner: </span>{dog.owner}</p>
        <p><span>Size: </span>{dog.size}</p>
        <p><span>Description: </span>{dog.description}</p>
      </div>
    </div>
  );
}