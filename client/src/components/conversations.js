import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { useConversations } from '../contexts/ConversationProvider';

const Conversations = () => {
    const { conversations, selectConversationIndex } = useConversations();

    return (
        <ListGroup variant='flush'>
            {conversations.map((conversation, index) => (
                <ListGroupItem
                    style={{ cursor: 'pointer' }}
                    key={index}
                    active={conversation.selected}
                    onClick={() => selectConversationIndex(index)}
                >
                    {conversation.recipients.map(r => r.name).join(', ')}
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

export default Conversations;