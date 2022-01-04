import React from 'react'
import { useSelector } from 'react-redux'
import ContactCard from './ContactCard'

function ContactList() {
    const lists = useSelector(state => state.ContactReducer.lists)
    return (
      <div className="Contact-Card">
        {lists.map((contact) => (
          <ContactCard contact={contact} key={contact._id}></ContactCard>
        ))}
      </div>
    );
}

export default ContactList
