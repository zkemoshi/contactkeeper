import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import ContactContext from '../../context/contact/contactContext';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();

    //eslint-disable-next-line
  }, []);
  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        {contacts.length !== 0 && <ContactFilter />}
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
