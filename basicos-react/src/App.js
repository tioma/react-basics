import React from 'react';
import LogoComponent from './components/LogoComponent';
import InputText from './components/InputText';

import './App.scss';

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
