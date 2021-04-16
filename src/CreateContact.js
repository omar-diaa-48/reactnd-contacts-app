import serialize from 'form-serialize';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageInput from './utils/ImageInput';

class CreateContact extends Component {
   handleSubmit = (e) => {
        e.preventDefault();
        const values = serialize(e.target, {hash:true});
        if(this.props.onCreateContact){
            this.props.onCreateContact(values);
        }
    }
    render(){
        return(
            <div>
                <Link className='close-create-contact' to='/'>List of contacts</Link>
            
                <form onSubmit={this.handleSubmit}
                    className='create-contact-form'>

                    <ImageInput className='create-contact-avatar-input'
                                name='avatarURL'
                                maxHeight={64}
                                />

                    <div className='create-contact-details'>
                        <input type='text' name='name' placeholder='Name' />
                        <input type='text' name='handle' placeholder='Handle'/>
                        <button>Add Contact</button>
                    </div>

                </form>
            </div>        
        )
    }
}

export default CreateContact;