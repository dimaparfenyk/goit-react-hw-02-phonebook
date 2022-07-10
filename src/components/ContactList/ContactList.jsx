import React from "react";
// import { nanoid } from 'nanoid'

const ContactList = ({ contacts, onDeleteContact }) => (
                <ul>
            {contacts.map(({ id, name, number }) => 
                <li key={id}>
                    <p>{name}: {number}</p>
                    <button onClick={() => onDeleteContact(id)}>Удалить</button>
                </li>
            )}
                </ul>
        );

export default ContactList; 