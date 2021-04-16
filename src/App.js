import React, { Component } from 'react';
import { Route } from 'react-router';
import CreateContact from './CreateContact';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI'; 
class App extends Component {
  state = {
    contacts : []
  }

  componentDidMount(){
    ContactsAPI.getAll().then((contacts) => {
      this.setState({contacts})
    })
  }

  removeContact = (contact) => {
    ContactsAPI.remove(contact).then(() => {
      this.setState((prevState) => ({
        contacts : prevState.contacts.filter(c => c.id !== contact.id)
      }))
    })
  }

  createContact = (contact) => {
    ContactsAPI.create(contact).then(contact => {
      this.setState((prevState) => ({
        contacts : prevState.contacts.concat([contact])
      }))
    })
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <ListContacts contacts={this.state.contacts} 
                        onDeleteButtonClicked={this.removeContact}/>
        )}/>     

        <Route path='/create' render={({history}) => (
          <CreateContact onCreateContact={(contact) => {
            this.createContact(contact);
            history.push('/');
          }} />
        )} />
      </div>
    );
  }
}

export default App;
