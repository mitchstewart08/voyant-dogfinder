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
  <div>
  <div class="p-8 w-1/3">
    <div class="bg-white flex items-center rounded-full shadow-xl">
      <input class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search by Dog Name" 
        onChange={e => setInput(e.target.value)}
      />
      <div class="p-4">
        <button class="bg-green-300 text-white rounded-full p-2 hover:bg-green-200 focus:outline-none w-12 h-12 flex items-center justify-center">
          <span class="text-3xl" onClick={filterDog}>🦴</span>
        </button>
        </div>
      </div>
  </div>
  </div>
)
}