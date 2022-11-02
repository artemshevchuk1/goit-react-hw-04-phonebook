// import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Forms, Input, Label, Button } from './FormContacts.styled';

const initState = {
  name: '',
  number: '',
};

export default function FormContacts({ onSubmit }) {
  const [state, setState] = useState(initState);

  const nameId = nanoid();
  const numberId = nanoid();

  const hendelnputChandge = e => {
    const { name, value } = e.target;
    setState(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const hendelnputSubmit = e => {
    e.preventDefault();
    const { name, number } = state;
    onSubmit({ name, number });
    setState(initState);
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
          value={state.name}
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
          value={state.number}
          onChange={hendelnputChandge}
        />
      </Label>

      <Button type="submit">Add Contact</Button>
    </Forms>
  );
}

// export default class FormContacts extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

// nameId = nanoid();
// numberId = nanoid();

// hendelnputChandge = e => {
//   const { name, value } = e.target;
//   this.setState({ [name]: value });
// };

// hendelnputSubmit = e => {
//   e.preventDefault();
//   const { name, number } = this.state;
//   this.props.onSubmit({ name, number });
//   this.setState({
//     name: '',
//     number: '',
//   });
// };

//   render() {
//     const { nameId, numberId, hendelnputSubmit, hendelnputChandge } = this;
//     return (
//       <Forms onSubmit={hendelnputSubmit}>
//         <Label htmlFor={nameId}>
//           Name
//           <Input
//             id={nameId}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={this.state.name}
//             onChange={hendelnputChandge}
//           />
//         </Label>
//         <Label htmlFor={numberId}>
//           Number
//           <Input
//             id={numberId}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={this.state.number}
//             onChange={hendelnputChandge}
//           />
//         </Label>

//         <Button type="submit">Add Contact</Button>
//       </Forms>
//     );
//   }
// // }
