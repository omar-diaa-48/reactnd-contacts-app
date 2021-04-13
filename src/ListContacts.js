import React, { Component } from 'react';
import propTypes from 'prop-types';

class ListContacts extends Component{
    static propTypes = {
        contacts : propTypes.array.isRequired,
        onDeleteButtonClicked : propTypes.func.isRequired
    }

    state = {
        query : ''
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query : query.trim()
        }))
    }

    render(){
        const { query } = this.state;
        const {contacts, onDeleteButtonClicked} = this.props;
        const filteredContacts = query === ''
        ? contacts
        : contacts.filter(c => c.name.toLowerCase().includes(query.toLowerCase()))

        return (
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input className='search-contacts'
                            placeholder='Search Contacts'
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                            ></input>
                </div>
                <ol className='contact-list'>
                {filteredContacts.map((contact) => (
                    <li key={contact.id} className='contact-list-item'>
                        <div 
                            className='contact-avatar'
                            style={{
                                backgroundImage : `url(${contact.avatarURL})`
                            }}>
                        </div>
                        <div className='contact-details'>
                            <p>{contact.name}</p>
                            <p>@{contact.handle}</p>
                        </div>
                        <button    onClick={() => onDeleteButtonClicked(contact)}
                                    className='contact-remove'>
                            Remove
                        </button>
                    </li>
                ))}   
                </ol>
            </div>
        )
    }
}

export default ListContacts