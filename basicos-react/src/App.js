import React from 'react';
import LogoComponent from './components/LogoComponent';
import InputTextContainer from './components/InputText/container';

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
        <InputTextContainer />
      </div>
    </CountryContext.Provider>
  );
}

export default App;
