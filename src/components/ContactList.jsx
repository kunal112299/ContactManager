import React from 'react'

const ContactList = (props)=>{
    console.log(props);
    const renderContactList = props.contacts.map((contact)=>{
        return (
            <div className='flex items-center justify-around  p-3 border border-gray'>
                <div>
                    <div>
                        {contact.name}
                    </div>
                    <div>{contact.email}</div>
                </div>
                <i class="fa-solid fa-trash"></i>
            </div>
        );
    })
    return (
        <div>
            {renderContactList}
        </div>
    );
}

export default ContactList
