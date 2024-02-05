import React, { useEffect, useState } from 'react';

import './App.css';
import logo from './logo.svg';

function App() {
  const [response, setResponse] = useState('Local');

  useEffect(() => {
    getData()
  }, []);
  async function getData() {
    const host = process.env.REACT_APP_HOST || "http://localhost:4000"

    const response = await fetch(`${host}/api`);
    const result = await response.json();
    setResponse(result.data);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Displaying the content from {response}
        </p>

      </header>
    </div>
  );
}

export default App;
