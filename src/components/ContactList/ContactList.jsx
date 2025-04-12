import { useSelector } from 'react-redux';
import Contact from "../Contact/Contact";
import css from './ContactList.module.css';
import { selectFilteredContacts  } from '../../redux/filters/slice';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { Toaster, toast } from 'react-hot-toast';
import ModalWindow from '../ModalWindow/ModalWindow';
import { useState } from 'react';

export default function ContactList(){
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [contactId, setContactId]= useState(null);

  const handleDelete = () => {dispatch(deleteContact(contactId))
    .unwrap()
    .then(toast.error("Contact deleted"));
    setModalOpen(false);
  }

  const handleOpenModal = () =>{
    setModalOpen(true);
    setContactId(returnId);
  }
  const returnId = (id) =>{
    setContactId(id)
  }
  const handleCancelDelete = ()=>{   
    setModalOpen(false);
  }

  const contacts = useSelector(selectFilteredContacts );

    return (
    <div>
     {modalOpen && <ModalWindow confirmDelete={handleDelete} cancelDelete = {handleCancelDelete}/>}
      <ul className={css.contactLst}>      
       {
              contacts.map((contact)=>{
              return <Contact       
              id = {contact.id}
              key={contact.id}
              name={contact.name}
              number={contact.number}
              openModal = {handleOpenModal}
              returnId = {returnId}
              />
              }) 
        }
    </ul>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    </div>
  )
}