import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Login from "./login";
import Dashboard from "./dashboard";
function App() {
  const [ id, setId ] = useLocalStorage('id');

  return (
    id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />
  );
}

export default App;
