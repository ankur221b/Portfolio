import { slide as Menu } from 'react-burger-menu';

function Nav(){
    return (
        <Menu>
          <a className="menu-item" href="#home">
            Home
          </a>
          <a className="menu-item" href="#about">
            About
          </a>
          <a className="menu-item" href="#skills">
            Skills
          </a>
          <a className="menu-item" href="#projects">
            Projects
          </a>
          <a className="menu-item" href="#contacts">
            Contacts
          </a>
        </Menu>
      );
}

export default Nav;