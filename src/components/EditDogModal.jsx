import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalDialog,
  ModalFooter,
  ModalHead,
  ModalTitle
} from "@afc-org/react-tailwind";
import NewDogForm from './NewDogForm'
import { useForm } from "react-hook-form";

const AddDogButton = ({dog, dogs, setDogs, show, setShow}) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const [newDog, setNewDog] = React.useState({
    name: dog.name,
    breed: dog.breed,
    owner: dog.owner,
    description: dog.description
  })

  function saveEdit(){
      
    let newDogsArr = dogs.map((el) => {
      if(el.owner == dog.owner && el.name == dog.name){
        return newDog
      }else{
        return el;
      }
    })

    setDogs(newDogsArr);
  }

  function deleteDog(){
    let name = dog.name;
    let newDogsArr = dogs.filter((el) => {
      if(el.owner == dog.owner && el.name == dog.name){
        return
      }else{
        return el;
      }
  
    })
    setDogs(newDogsArr);
  }

  return (
    <>
      <Modal show={show}>
        <ModalDialog>
          <ModalContent>
            <ModalHead>
              <ModalTitle><span className="text-2xl primary-font">Edit A Dog</span></ModalTitle>
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="float-right p-4 ml-auto -mt-4 -mb-4 -mr-4 text-2xl font-bold leading-none text-black bg-transparent border-0 opacity-50 cursor-pointer"
              >
                <span aria-hidden="true">×</span>
              </button>
            </ModalHead>
            <ModalBody>


                  <form className="flex flex-col w-full">
            <label for="name" className="text-2xl primary-font">Name:</label>
            <input name="name" placeholder="Scout" ref={register}  defaultValue={dog.name} className="mb-8 border-2 border-gray-200 border-solid"
              onChange={(e) => {
                setNewDog({...newDog, name: e.target.value})
              }}
            />

            <label for="breed" className="text-2xl primary-font">Breed:</label>
            <input name="breed" placeholder="Corgi" ref={register}  defaultValue={dog.breed}  className="mb-8 border-2 border-gray-200 border-solid"
              onChange={(e) => {
                setNewDog({...newDog, breed: e.target.value})
              }}
            />

            <label for="owner" className="text-2xl primary-font">Owner:</label>
            <input name="owner" placeholder="Mitch" ref={register} defaultValue={dog.owner}  className="mb-8 border-2 border-gray-200 border-solid"
              onChange={(e) => {
                setNewDog({...newDog, owner: e.target.value})
              }}
            />

            <label for="size" className="text-2xl primary-font">Size:</label>
            <input name="size" placeholder="Mitch" ref={register} defaultValue={dog.size}  className="mb-8 border-2 border-gray-200 border-solid"
              onChange={(e) => {
                setNewDog({...newDog, size: e.target.value})
              }}
            />
            
            <label for="description" className="text-2xl primary-font">Description:</label>
            <textarea name="description" placeholder="Likes to eat expensive shoes" ref={register} defaultValue={dog.description}  className="border-2 border-gray-200 border-solid"
              onChange={(e) => {
                setNewDog({...newDog, description: e.target.value})
              }}
            />
          </form>
            
            </ModalBody>
            <ModalFooter>
              <button className="w-24 px-6 py-2 mr-4 font-bold text-white bg-red-600 border border-red-400 rounded-lg"  onClick={deleteDog}>
                Delete
              </button>
              <button className="w-24 px-6 py-2 mr-4 font-bold text-white bg-green-600 border border-green-400 rounded-lg"  onClick={saveEdit}>
                Save
              </button>
              <button className="px-6 py-2 font-bold text-black bg-gray-300 border border-gray-100 rounded-lg" >
                Close
              </button>
            </ModalFooter>
          </ModalContent>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default AddDogButton;