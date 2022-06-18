import React from 'react';
import Switch from 'react-switch';
import { FaHeart, FaBars } from 'react-icons/fa';
import reactLogo from './assets/logo.svg';
import Clock from './Clock';



const Main = ({
  collapsed,
  handleToggleSidebar,
  handleCollapsedChange,
  currentScreen
}) => {
  return (
    <main>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <header>
        <h1>
          <img width={80} src={reactLogo} alt="react logo" /> {'Welcome' }

        </h1>
        <h4>
          {currentScreen}
        </h4>
        <p>{'description' }</p>
        <div className="social-badges">
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="GitHub stars"
              src="https://img.shields.io/github/stars/kakhavai/kian-wiki?style=social"
            />
          </a>
          <a
            href="https://github.com/kian-wiki/react-pro-sidebar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="GitHub forks"
              src="https://img.shields.io/github/forks/kakhavai/kian-wiki?style=social"
            />
          </a>
        </div>
      </header>
      <div className="block ">
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleCollapsedChange}
          checked={collapsed}
          onColor="#219de9"
          offColor="#bbbbbb"
        />
        <span> {'collapsed' }</span>
      </div>

      <footer>
        <Clock/>
      </footer>
    </main>
  );
};

export default Main;
