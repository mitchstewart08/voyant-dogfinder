import React , {useState} from 'react';
import ReactDOM from 'react-dom';


export default function ButtonContainer({setDogs, dogs}) { 
  const [input, setInput] = useState('')
  const [previousDogs, setPreviousDogs] = useState(dogs)
  const [isFiltered, setIsFiltered] = useState(false)
  function filterDog(e){
    
    input.length ? setIsFiltered(true) : setIsFiltered(false)
    if(input.length){
      setPreviousDogs(dogs)
      console.log(previousDogs)
      let filteredDogs = dogs.filter((el) => {
        return el.name.toLowerCase().includes(input.toLowerCase())
      })
      console.log('filteredDogs ', filteredDogs);
      
      setDogs(filteredDogs)
    } else {   
      setDogs(previousDogs)
    }
    }
  
  return (
  <div className="flex justify-between">
  <div class=" w-1/3 pb-4" id="searchBox">
    <div className="flex items-center bg-white rounded-full shadow-xl">
      <input className="w-full px-6 py-4 leading-tight text-gray-700 rounded-l-full focus:outline-none" id="search" type="text" placeholder="Search by Dog Name" 
        onChange={e => setInput(e.target.value)}
      />
      <div className="p-4">
        <button className="flex items-center justify-center w-12 h-12 p-2 text-white bg-green-300 rounded-full hover:bg-green-200 focus:outline-none">
          <span className="text-3xl" onClick={filterDog}>🦴</span>
        </button>
        </div>
      </div>
  </div>
  <div className="align-middle w-1/8" id="buttons">
  <button className="px-6 py-2 mr-5 font-bold text-white bg-red-400 border border-red-100 rounded-lg">
      Reset Dogs
    </button>
  <button className="px-6 py-2 font-bold text-white bg-green-600 border border-green-400 rounded-lg">
  Add Dog
</button>
    
  </div>
  </div>
)
}