import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import EditDogModal from './EditDogModal'


export default function DogCard({dog, setDogs, dogs}) { 
  
  const [show, setShow] = useState(false)
  return (
    <>
    {show ? <EditDogModal dog={dog} setDogs={setDogs} show={show} setShow={setShow} dogs={dogs}/> : ''}
    <div className="w-full py-4 md:w-1/3">
      <div className="flex justify-between w-11/12 p-4 mx-auto overflow-x-hidden overflow-y-scroll text-justify bg-white border-2 border-green-100 border-solid rounded-lg h-60">
        <div className="">
        <p className="mb-2"><span className="text-lg font-bold primary-font">Name: </span>{dog.name}</p>
        <p className="mb-2"><span className="text-lg font-bold primary-font">Breed: </span>{dog.breed}</p>
        <p className="mb-2"><span className="text-lg font-bold primary-font"> Owner: </span>{dog.owner}</p>
        <p className="mb-2"><span className="text-lg font-bold primary-font">Size: </span>{dog.size}</p>
        <p className="mb-2"><span className="text-lg font-bold primary-font">Description: </span>{dog.description}</p>
        </div>
        <div className="w-1/12"><button className="p-2 text-gray-500 rounded-sm hover:bg-gray-200" onClick={()=> setShow(!show)}>Edit</button></div>

      </div>
      </div>
    </>
  );
}