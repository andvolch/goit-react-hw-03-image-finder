import React, { Component } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import dataBaseContacts from '../../data/contacts.json';

import Modal from '../Modal/Modal';

class App extends Component {
  state = {
    contacts: dataBaseContacts,
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const dataContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(dataContacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  deleteContact = contactId => {
    this.setState(prewState => ({
      contacts: prewState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmitHandler = contactic => {
    // console.log(contact);

    const check = this.state.contacts.some(
      contact => contact.name.toLowerCase() === contactic.name.toLowerCase(),
    );

    check
      ? alert(`${contactic.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contactic, ...contacts],
        }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getDisplayContacts = () => {
    const { contacts, filter } = this.state;
    const normalFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalFilter),
    );
  };

  // Передать на onClick для открытия или закрытия//
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { filter, showModal } = this.state;
    const displayContacts = this.getDisplayContacts();

    return (
      <div>
        {showModal && <Modal onClose={this.toggleModal} />}

        <h1>Phonebook</h1>
        <ContactForm submit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter filter={filter} change={this.changeFilter} />
        <ContactList
          contacts={displayContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
