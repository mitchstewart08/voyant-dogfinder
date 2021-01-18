import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form";

export default function NewDogForm({newDog, setNewDog}) { 
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full">
      <label for="name" className="text-2xl primary-font">Name:</label>
      <input name="name" placeholder="Scout" ref={register} className="mb-8 border-2 border-gray-200 border-solid"
        onChange={(e) => {
          setNewDog({...newDog, name: e.target.value})
        }}
      />

      <label for="breed" className="text-2xl primary-font">Breed:</label>
      <input name="breed" placeholder="Corgi" ref={register} className="mb-8 border-2 border-gray-200 border-solid"
         onChange={(e) => {
          setNewDog({...newDog, breed: e.target.value})
        }}
      />

      <label for="owner" className="text-2xl primary-font">Owner:</label>
      <input name="owner" placeholder="Mitch" ref={register} className="mb-8 border-2 border-gray-200 border-solid"
         onChange={(e) => {
          setNewDog({...newDog, owner: e.target.value})
        }}
      />
      
      <label for="description" className="text-2xl primary-font">Description:</label>
      <textarea name="description" placeholder="Likes to eat expensive shoes" ref={register} className="border-2 border-gray-200 border-solid"
         onChange={(e) => {
          setNewDog({...newDog, description: e.target.value})
        }}
      />
    </form>
  );
}