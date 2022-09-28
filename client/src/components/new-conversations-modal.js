import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useContacts } from '../contexts/contacts-context';
import { useConversations } from '../contexts/conversation-context';


const NewConversationModal = ({ closeModal }) => {

    const { contacts } = useContacts();
    const { createConversation } = useConversations();

    const [ selectedContactIds, setSelectedContactIds ] = useState([]);

    const handleCheckboxChange = (contactId) => {
        setSelectedContactIds(prevSelectedContactIds => {
            if (prevSelectedContactIds.includes(contactId))
                return prevSelectedContactIds.filter(prevId => prevId !== contactId);

            return [ ...prevSelectedContactIds, contactId ];
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        createConversation(selectedContactIds);

        closeModal();
    };


    return (
        <>
            <Modal.Header closeButton>Create Conversation</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {contacts.map(contact => (
                        <Form.Group controlId={contact.id} key={contact.id}>
                            <Form.Check
                                type='checkbox'
                                value={selectedContactIds.includes(contact.id)}
                                label={contact.name}
                                onChange={() => handleCheckboxChange(contact.id)} />
                        </Form.Group>
                    ))}
                    <Button type='submit'>Create</Button>
                </Form>
            </Modal.Body>
        </>
    );
};

export default NewConversationModal;