import React , {useState} from 'react';
import ReactDOM from 'react-dom';


export default function ButtonContainer() { 
  return (
  <div>
  <div class="p-8 w-1/4">
    <div class="bg-white flex items-center rounded-full shadow-xl">
      <input class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search by Dog Name" />
      <div class="p-4">
        <button class="bg-green-300 text-white rounded-full p-2 hover:bg-green-200 focus:outline-none w-12 h-12 flex items-center justify-center">
          <span class="text-3xl">🦴</span>
        </button>
        </div>
      </div>
  </div>
  </div>
)
}