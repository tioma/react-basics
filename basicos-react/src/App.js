import React from 'react';
import LogoComponent from './components/LogoComponent';
import InputText from './components/InputText';

import CountryContext from './Context';

import './App.scss';

const metadata = {
  country: 'AR',
  languaje: 'ES',
};

function App() {
  return (
    <CountryContext.Provider value={metadata}>
      <div className="App">
        <header className="App-header">
          <LogoComponent />
        </header>
        <InputText />
      </div>
    </CountryContext.Provider>
  );
}

export default App;
