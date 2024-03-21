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
        <a>Sign in</a>
        <button type='button'>Sign up</button>
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
                <a>Sign in</a>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar