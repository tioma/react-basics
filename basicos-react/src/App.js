import React from 'react';
import LogoComponent from './components/LogoComponent';
import InputText from './components/InputText';

import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <LogoComponent />
      </header>
        <InputText />
    </div>
  );
}

export default App;
