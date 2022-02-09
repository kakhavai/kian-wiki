import React, { useState } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
import LikeButton from './LikeButton.js'
import Sidebar from './Sidebar'
import { useIntl } from 'react-intl';
import { IntlProvider } from 'react-intl';







function App() {

  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);
  
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  const [locale, setLocale] = useState('en');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <LikeButton />
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


      </header>
      <IntlProvider locale={locale}>
          <Sidebar 
              image={image}
              collapsed={collapsed}
              rtl={rtl}
              toggled={toggled}
              handleToggleSidebar={handleToggleSidebar}
          />
      </IntlProvider>

    </div>
  );
}

export default App;
