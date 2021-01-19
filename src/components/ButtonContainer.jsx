import React , {useState} from 'react';
import AddDogButton from './AddDogButton'
import dogData from '../data/dogs'


export default function ButtonContainer({setDogs, dogs}) { 
  const [input, setInput] = useState('')
  const [previousDogs, setPreviousDogs] = useState(dogs)
  const [isFiltered, setIsFiltered] = useState(false)
  function filterDog(e){
    if(input.length){
      setIsFiltered(true)
      setPreviousDogs(dogs)
      let filteredDogs = dogs.filter((el) => {
        return el.name.toLowerCase().includes(input.toLowerCase())
      })      
      setDogs(filteredDogs)
    } else {   
      setDogs(previousDogs)
    }
    }

   function resetSearch(){
     setIsFiltered(false)
     setInput("");
     setDogs(previousDogs)
   }
  
  return (
  <div className="flex flex-wrap justify-between md:flex-nowrap">
  <div class=" md:w-1/3 pb-4 w-full" id="searchBox">
    <div className="flex items-center bg-white rounded-full shadow-xl">
      <input className="w-full px-6 py-4 leading-tight text-gray-700 rounded-l-full focus:outline-none" id="search" type="text" placeholder="Search by Dog Name" 
        onChange={e => setInput(e.target.value)}
      />
      <div className="p-4">
        <button className="flex items-center justify-center w-12 h-12 p-2 text-white bg-green-300 rounded-full hover:bg-green-200 focus:outline-none">
          {!isFiltered ? <span className="text-3xl" onClick={filterDog}>🦴</span> : <span className="text-lg primary-font" onClick={resetSearch}>Back</span>}
        </button>
        </div>
      </div>
  </div>
  <div className="py-4 align-middle w-1/8" id="buttons">
    <button className="px-6 py-2 mr-5 font-bold text-white bg-red-400 border border-red-100 rounded-lg" onClick={()=>setDogs(dogData)}>
      Reset Dogs
    </button>
    <AddDogButton dogs={dogs} setDogs={setDogs}/>
    
  </div>
  </div>
)
}