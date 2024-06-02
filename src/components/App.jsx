import { useState, useEffect } from "react";
import {ContactForm} from './ContactForm/contactForm.jsx'
import {Filter} from './Filter/filter.jsx'
import {ContactList} from './ContactList/contactList.jsx'
import './App.css';


export const App = () => {
  const [contacts, setContacts] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filterContact, setFilterContact] = useState('');

  useEffect (()=>{const storedContacts = localStorage.getItem('contacts')
if (storedContacts) {setContacts(JSON.parse(storedContacts))}},[]);

  useEffect (() => {localStorage.setItem('contacts', JSON.stringify(contacts))},[contacts]);

  const inputChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const addContact = (newContact) => {
    const contactExists = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (contactExists) {
      alert(`${newContact.name} is already in the phonebook.`);
    } else {
      setContacts((prevContacts) => [...prevContacts, newContact]);
      setName('');
      setNumber('');
    }
  };

  const filterSearch = (e) =>{
    setFilterContact(e.target.value)
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterContact.toLowerCase())
    );
  };

  const removeContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="appContainer">
      <h1>Phonebook</h1>
      <div>
        <ContactForm name={name} number ={number} onInputChange={inputChange} onNumberChange={handleNumberChange} onAddContacts={addContact} />
      </div>
      <h2>Contacts</h2>
      <div>
      <Filter filterContact={filterContact} onFilterSearch={filterSearch}/>
      </div>
      <div>
        <ContactList contacts={getFilteredContacts()} onRemoveContact={removeContact}/>
      </div>
    </div>
  );
};