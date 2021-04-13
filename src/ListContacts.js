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
        return (
            <div className='list-contacts'>
                {JSON.stringify(this.state.query)}
                <div className='list-contacts-top'>
                    <input className='search-contacts'
                            placeholder='Search Contacts'
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                            ></input>
                </div>
                <ol className='contact-list'>
                {this.props.contacts.map((contact) => (
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
                        <button    onClick={() => this.props.onDeleteButtonClicked(contact)}
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