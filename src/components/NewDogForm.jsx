import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form";

export default function NewDogForm({newDog, setNewDog, setDogs, dogs}) { 
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full">
      <label for="name" className="text-2xl primary-font">Name:</label>
      <input name="name" defaultValue="Scout" ref={register} className="mb-8 border-2 border-gray-200 border-solid"/>

      <label for="breed" className="text-2xl primary-font">Breed:</label>
      <input name="breed" defaultValue="Corgi" ref={register} className="mb-8 border-2 border-gray-200 border-solid"/>

      <label for="owner" className="text-2xl primary-font">Owner:</label>
      <input name="owner" defaultValue="Mitch" ref={register} className="mb-8 border-2 border-gray-200 border-solid"/>
      
      <label for="description" className="text-2xl primary-font">Description:</label>
      <textarea name="description" defaultValue="Likes to eat expensive shoes" ref={register} className="border-2 border-gray-200 border-solid"/>
    </form>
  );
}