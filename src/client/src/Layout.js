import React, { useState } from 'react';
import Aside from './Aside';
import Main from './Main';


function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [currentScreen, setScreen] = useState('Home');


  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  const handlePickScreen = (value) => {
    setScreen(value);
  };

  return (
    <div className={'app'}>
      <Aside
        image={false}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handlePickScreen = {handlePickScreen}
      />
      <Main
        image={false}
        toggled={toggled}
        collapsed={collapsed}
        currentScreen={currentScreen}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      />
    </div>
  );
}

export default Layout;
