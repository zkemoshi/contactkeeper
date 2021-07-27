import React, { useContext, useState, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFrom = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, current, clearCurrent } = contactContext;

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  }, [contactContext, current]);

  const { name, email, phone, type } = contact;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-primary text-center'>
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        required
        onChange={(e) => setContact({ ...contact, name: e.target.value })}
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        required
        onChange={(e) => setContact({ ...contact, email: e.target.value })}
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        required
        minLength='10'
        maxLength='10'
        title='phone number'
        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        onChange={(e) => setContact({ ...contact, type: e.target.value })}
        checked={type === 'personal'}
      />
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        onChange={(e) => setContact({ ...contact, type: e.target.value })}
        checked={type === 'professional'}
      />
      Professional
      <div>
        <input
          type='submit'
          value={current ? 'Update Contact' : 'Add Contact'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};
export default ContactFrom;
