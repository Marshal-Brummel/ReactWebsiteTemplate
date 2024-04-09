import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/St. Patrick Curriculum.png';
import './navbar.css';

const Menu = () => (
  <>
  <ul>
    <li>
      <a href='/'>Home</a>
    </li>
    <li>
      <a href='/content'>Content</a>
    </li>
    <li>
      <a href='/skills'>Skills</a>
    </li>
    <li>
      <a href='/pedagogy'>Pedagogy</a>
    </li>
    <li>
      <a href='/admin'>Admin</a>
    </li>
    <li>
      <a href='/editor'>Editor</a>
    </li>
  </ul>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='template__navbar'>
      <div className='template__navbar-links'>
        <div className='template__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='template__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='template__navbar-sign'>
        <a href='/signin'>Sign In</a>
        <a href='/signup'>Sign up</a>
      </div>
      <div className='template__navbar-menu'>
        {toggleMenu 
        ? <RiCloseLine color='white' size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color='white' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='template__navbar-menu_container scale-up-center'>
            <div className='template__navbar-menu_container-links'>
              <Menu />
              <div className='template__navbar-menu_container-links-sign'>
                <a href='/signin'>Sign In</a>
                <a href='/signup'>Sign up</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar