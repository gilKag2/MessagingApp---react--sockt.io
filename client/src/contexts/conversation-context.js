import React, { useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ConversationContext = React.createContext();

const useConversations = () => {
    return useContext(ConversationContext);
};

const ConversationsProvider = ({ children }) => {

    const [ conversations, setConversations ] = useLocalStorage('conversations', []);

    const createConversation = (recipients) => {
        setConversations(prevConversations => {
            return [ ...prevConversations, { recipients, messages: [] } ];
        });
    };

    return (
        <ConversationContext.Provider value={{ conversations, createConversation }}>
            {children}
        </ConversationContext.Provider>
    );
};

export { ConversationsProvider, useConversations };