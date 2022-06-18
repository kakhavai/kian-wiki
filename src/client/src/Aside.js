import React from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import {FaInstagramSquare, FaTwitterSquare, FaGithubSquare, FaGithub, FaLinkedin, FaChess, FaSquare, FaHome} from 'react-icons/fa';
import { IoDocument } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { GoGraph } from "react-icons/go";
import sidebarBg from './assets/bg2.jpg';
import profileImage from './assets/me.jpg'



const Aside = ({ image, collapsed, toggled, handleToggleSidebar, handlePickScreen }) => {
  return (
    <ProSidebar
      image={image ? sidebarBg : false}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarContent style={{borderBottomWidth: '0px'}}>
      <div style = {{textAlign: 'center'}}>
        <img src = {profileImage} className='profile-picture'/>
      </div>
      
      
        <div
          style={{
            paddingTop: '1vh',
            paddingBottom: '1vh',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '0px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            textAlign: 'center'
          }}
        >
          {'Kian Akhavain' }
        </div>
        <div style = {{textAlign: 'center', width:'100%'}}>
          <div
            style={{
              width: '100%',
              position: 'relative',
              display: 'inline-block',
              color: 'inherit'
            }}
          >
            <a href = "https://www.instagram.com/kian.ahk" className="clickable-icon" target="_blank"><FaInstagramSquare className='sidebar-icon' /></a>
            <a href = "https://twitter.com/kakhavain" className="clickable-icon" target="_blank"><FaTwitterSquare className='sidebar-icon'/></a>
            <a href = "https://github.com/kakhavai" className="clickable-icon" target="_blank"><FaGithubSquare className='sidebar-icon' /></a>
            <a href = "https://www.linkedin.com/in/kakhavain/" className="clickable-icon" target="_blank"><FaLinkedin className='sidebar-icon'/></a>
            <a href = "https://www.chess.com/stats/live/rapid/llunchbox" className="clickable-icon" target="_blank"><div className='stacked-icon-parent'><FaChess className='stacked-icon-fg sidebar-icon'/> <FaSquare className='stacked-icon-bg sidebar-icon'/></div></a>
          </div>
        </div>
      {/* </SidebarHeader > */}

      {/* <SidebarContent> */}
        <Menu iconShape="round" onClick={() => handlePickScreen('Education')}>
          <MenuItem
            icon={<FaHome />}
          >
            {'Education' }
          </MenuItem>
        </Menu>
        <Menu iconShape="round" onClick={() => handlePickScreen('Experience')}>
          <MenuItem
            icon={<IoDocument />}
          >
            {'Experience' }
          </MenuItem>
        </Menu>
        <Menu iconShape="round" onClick={() => handlePickScreen('Stocks')}>
          <MenuItem
            icon={<GoGraph />}
          >
            {'Stock Analytics' }
          </MenuItem>
        </Menu>
        <Menu iconShape="round" onClick={() => handlePickScreen('Contact')}>
          <MenuItem
            icon={<IoMdMail />}
          >
            {'Contact' }
          </MenuItem>
        </Menu>
          {/* <MenuItem icon={<FaGem />}> {'components' } </MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title={'withSuffix' }
            icon={<FaRegLaughWink />}
          >
            <MenuItem>{'submenu' } 1</MenuItem>
            <MenuItem>{'submenu' } 2</MenuItem>
            <MenuItem>{'submenu' } 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title={'withPrefix' }
            icon={<FaHeart />}
          >
            <MenuItem>{'submenu' } 1</MenuItem>
            <MenuItem>{'submenu' } 2</MenuItem>
            <MenuItem>{'submenu' } 3</MenuItem>
          </SubMenu>
          <SubMenu title={'multiLevel' } icon={<FaList />}>
            <MenuItem>{'submenu' } 1 </MenuItem>
            <MenuItem>{'submenu' } 2 </MenuItem>
            <SubMenu title={`${'submenu' } 3`}>
              <MenuItem>{'submenu' } 3.1 </MenuItem>
              <MenuItem>{'submenu' } 3.2 </MenuItem>
              <SubMenu title={`${'submenu' } 3.3`}>
                <MenuItem>{'submenu' } 3.3.1 </MenuItem>
                <MenuItem>{'submenu' } 3.3.2 </MenuItem>
                <MenuItem>{'submenu' } 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu> */}
        {/* </Menu> */}
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/kakhavai/kian-wiki/"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub style = {{color:'white'}} />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', color: 'white' }}>
              {'viewSource' }
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
