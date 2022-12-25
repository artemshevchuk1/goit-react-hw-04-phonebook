// import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Forms, Input, Label, Button } from './FormContacts.styled';

export default function FormContacts({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid();
  const numberId = nanoid();

  const hendelnputChandge = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const hendelnputSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <Forms onSubmit={hendelnputSubmit}>
      <Label htmlFor={nameId}>
        Name
        <Input
          id={nameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={hendelnputChandge}
        />
      </Label>
      <Label htmlFor={numberId}>
        Number
        <Input
          id={numberId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={hendelnputChandge}
        />
      </Label>

      <Button type="submit">Add Contact</Button>
    </Forms>
  );
}
