import { Component } from 'react';
import { Main } from './App.Styled';
import {Form} from 'components/Form/Form';
export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }
  render() {
    return (
      <Main>
        <Form></Form>
      </Main>
    );
  }
}
