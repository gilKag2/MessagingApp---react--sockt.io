import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Login from "./login";
import Dashboard from "./dashboard";
import { ContactsProvider } from '../contexts/contacts-context';
import { ConversationsProvider } from '../contexts/conversation-context';

function App() {
  const [ id, setId ] = useLocalStorage('id');

  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  );

  return (
    id ? dashboard : <Login onIdSubmit={setId} />
  );
}

export default App;
