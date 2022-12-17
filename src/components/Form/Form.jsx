import React from 'react';
import { useState, useEffect } from 'react';
import FormContacts from 'components/FormContacts/FormContacts';
import { FormList } from 'components/FormList/FormList';
import { nanoid } from 'nanoid';
import { Section, SectionContacts, FormFilter } from './Form.styled';

export default function Form() {
  const [contacts, setContacts] = useState(() => {
    const value = JSON.parse(localStorage.getItem('contacts'));
    return value ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = contact => {
    if (isDublicate(contact)) {
      return alert(`${contact.name} -   is already in contacts.`);
    }
    setContacts(prev => {
      const newContact = {
        id: nanoid(),
        ...contact,
      };
      return [...prev, newContact];
    });
  };

  const removeContact = id => {
    setContacts(prev => {
      const newContacts = prev.filter(item => item.id !== id);
      return newContacts;
    });
  };

  const handleChange = e => {
    const { value } = e.target;

    setFilter(value);
  };

  const isDublicate = ({ name, number }) => {
    const result = contacts.find(
      item => item.name === name && item.number === number
    );
    return result;
  };

  const getFilterContacts = () => {
    if (!filter) {
      return contacts;
    }

    const normalListedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name, number }) => {
      const normalaizerName = name.toLocaleLowerCase();
      const normalaizerNumber = number.toLocaleLowerCase();
      const result =
        normalaizerName.includes(normalListedFilter) ||
        normalaizerNumber.includes(normalListedFilter);
      return result;
    });
    return filteredContacts;
  };

  return (
    <Section>
      <SectionContacts>
        <FormContacts onSubmit={addContacts} />
      </SectionContacts>
      <SectionContacts>
        <FormFilter
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
        <FormList items={getFilterContacts()} removeContact={removeContact} />
      </SectionContacts>
    </Section>
  );
}
