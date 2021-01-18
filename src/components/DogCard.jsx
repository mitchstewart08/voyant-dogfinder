import React , {useState} from 'react';
import ReactDOM from 'react-dom';


export default function DogCard({dog}) { 
  return (
    <div className="w-1/3 p-4 min-w-min">
      <div className="flex justify-between w-11/12 p-4 mx-auto text-justify bg-white border-2 border-green-100 border-solid rounded-lg">
        <div className="">
        <p className="mb-2"><span className="text-lg font-bold primary-font">Name: </span>{dog.name}</p>
        <p className="mb-2"><span className="text-lg font-bold primary-font">Breed: </span>{dog.breed}</p>
        <p className="mb-2"><span className="text-lg font-bold primary-font"> Owner: </span>{dog.owner}</p>
        <p className="mb-2"><span className="text-lg font-bold primary-font">Size: </span>{dog.size}</p>
        <p className="mb-2"><span className="text-lg font-bold primary-font">Description: </span>{dog.description}</p>
        </div>
        
        <div className="w-1/12"><button className="p-2 text-gray-500 rounded-sm hover:bg-gray-200">Edit</button></div>

      </div>
      </div>
      
  );
}