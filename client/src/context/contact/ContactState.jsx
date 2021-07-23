import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

// INITIAL STATE
const ContactState = (props) => {
  const InitialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '111-111-111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Sara Moris',
        email: 'sara@gmail.com',
        phone: '222-111-111',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Peter Rambo',
        email: 'peter@gmail.com',
        phone: '333-111-111',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, InitialState);

  //Add Contacts
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  //Set Current Contact
  const setCurrent = (id) => {
    dispatch({ type: SET_CURRENT, payload: id });
  };
  //Clear Current Contact

  //Update Contact

  //Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact,
        setCurrent,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
