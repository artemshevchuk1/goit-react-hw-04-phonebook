import React from 'react';
import PropTypes from 'prop-types';
import { Ul, Li, Button } from './FormList.styled';

export default function FormList({ items, removeContact }) {
  const elements = items.map(({ name, number, id }) => {
    return (
      <Li key={id}>
        Name:{name} Number:{number}
        <Button onClick={() => removeContact(id)}>Delete</Button>
      </Li>
    );
  });
  return <Ul>{elements}</Ul>;
}

FormList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};