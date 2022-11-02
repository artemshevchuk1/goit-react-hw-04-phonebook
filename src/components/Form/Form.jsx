import React from 'react';
// import { Component } from 'react';
import FormContacts from 'components/FormContacts/FormContacts';
import FormList from 'components/FormList/FormList';
import { nanoid } from 'nanoid';
import { Section, SectionContacts, FormFilter } from './Form.styled';

export default function Form() {
  const [contacts, setContacts] = useState([]);
  const [contacts, setContacts] = useState('');

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
        <FormList items={contacts} removeContact={removeContact} />
      </SectionContacts>
    </Section>
  );
}

export class Form extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContacts = contact => {
    if (this.isDublicate(contact)) {
      return alert(`${contact.name} -   is already in contacts.`);
    }
    this.setState(prev => {
      const newContact = {
        id: nanoid(),
        ...contact,
      };
      return {
        contacts: [...prev.contacts, newContact],
      };
    });
  };

  removeContact = id => {
    this.setState(prev => {
      const newContacts = prev.contacts.filter(item => item.id !== id);
      return {
        contacts: newContacts,
      };
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  isDublicate({ name, number }) {
    const { contacts } = this.state;
    const result = contacts.find(
      item => item.name === name && item.number === number
    );
    return result;
  }

  getFilterContacts() {
    const { contacts, filter } = this.state;

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
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parselContacts = JSON.parse(contacts);

    if (parselContacts) {
      this.setState({ contacts: parselContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { addContacts, handleChange, removeContact } = this;
    const { filter } = this.state;
    const contacts = this.getFilterContacts();
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
          <FormList items={contacts} removeContact={removeContact} />
        </SectionContacts>
      </Section>
    );
  }
}
