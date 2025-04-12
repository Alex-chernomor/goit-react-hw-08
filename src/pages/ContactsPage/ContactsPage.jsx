import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import {selectError,selectLoading} from '../../redux/contacts/selectors';

export default function ContactsPage() {
      const dispatch = useDispatch();
      const isLoading = useSelector(selectLoading);
      const isError = useSelector(selectError);
      
      useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);
    
  return (
<div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {isError}</p>}
</div>
  )
}
