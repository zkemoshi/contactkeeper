import React, { useContext, useState } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFrom = () => {
  const contactContext = useContext(ContactContext);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  const { name, email, phone, type } = contact;

  const handleSubmit = (e) => {
    e.preventDefault();

    contactContext.addContact(contact);
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal',
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-primary'>Add Contact</h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={(e) => setContact({ ...contact, name: e.target.value })}
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={(e) => setContact({ ...contact, email: e.target.value })}
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
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
          value='Add Contact'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};
export default ContactFrom;
