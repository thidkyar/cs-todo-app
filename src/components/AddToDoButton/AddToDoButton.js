import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import Form from "../Form/Form";

import './AddToDoButton.css'
const AddToDoButton = () => {
  const [show, setShow] = useState(false);

  //handle display of form modal
  const handleShow = () => setShow(true);

    return (
        <>
        <Button onClick={handleShow} className="add-todo">
            <FaPlus className="add-icon"/>
        </Button>
        <Form show={show} setShow={setShow}/>
        </>
    )
}

export default AddToDoButton
