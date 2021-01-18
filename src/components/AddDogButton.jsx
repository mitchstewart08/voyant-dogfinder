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

const AddDogButton = () => {
  const [show, setShow] = React.useState(false);
  const [newDog, setNewDog] = React.useState({
    name: "",
    breed: "",
    owner: "",
    description: ""
  })
  return (
    <>
      <button className="px-6 py-2 font-bold text-white bg-green-600 border border-green-400 rounded-lg" onClick={() => setShow(!show)}>
        Add Dog
      </button>
      <Modal show={show}>
        <ModalDialog>
          <ModalContent>
            <ModalHead>
              <ModalTitle><span className="text-2xl primary-font">Add A Dog</span></ModalTitle>
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="float-right p-4 ml-auto -mt-4 -mb-4 -mr-4 text-2xl font-bold leading-none text-black bg-transparent border-0 opacity-50 cursor-pointer"
              >
                <span aria-hidden="true">×</span>
              </button>
            </ModalHead>
            <ModalBody>
            <NewDogForm />
            </ModalBody>
            <ModalFooter>
              <Button color="pink" onClick={() => setShow(!show)}>
                Save changes
              </Button>
              <Button color="gray" onClick={() => setShow(!show)}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default AddDogButton;