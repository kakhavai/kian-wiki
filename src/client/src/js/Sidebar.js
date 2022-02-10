import React from 'react';
import { useIntl } from 'react-intl';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';

import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';

const Sidebar = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {

  return (
    <ProSidebar
      image={image}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {'sidebarTitle'}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">{'new'}</span>}
          >
            {'dashboard' }
          </MenuItem>
          <MenuItem icon={<FaGem />}> {'components'}</MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title={'withSuffix' }
            icon={<FaRegLaughWink />}
          >
            <MenuItem>submen 1</MenuItem>
            <MenuItem>submen 2</MenuItem>
            <MenuItem>submen 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title={'withPrefix'}
            icon={<FaHeart />}
          >
            <MenuItem>submen 1</MenuItem>
            <MenuItem>submen 2</MenuItem>
            <MenuItem>submen 3</MenuItem>
          </SubMenu>
          <SubMenu title={'multiLevel'} icon={<FaList />}>
            <MenuItem>submen 1 </MenuItem>
            <MenuItem>submen 2 </MenuItem>
            <SubMenu title={`$submen 3`}>
              <MenuItem>submen 3.1 </MenuItem>
              <MenuItem>submen 3.2 </MenuItem>
              <SubMenu title={`$submen 3.3`}>
                <MenuItem>submen 3.3.1 </MenuItem>
                <MenuItem>submen 3.3.2 </MenuItem>
                <MenuItem>submen 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              {'viewSource' }
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;