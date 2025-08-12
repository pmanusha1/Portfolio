import React, { useRef, useState } from 'react'
import './NavBar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {

  const [menu, setMenu] = useState("home");

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0"
  }

  const closeMenu = () => {
    menuRef.current.style.right="-350px"
  }

  return (
    <div className='navbar'>
        <h1 className='title'><span>Portfolio</span></h1>
        <FontAwesomeIcon icon={faBars} className='nav-mob-open' onClick={openMenu} />
        <ul ref={menuRef} className='nav-menu'>
            <FontAwesomeIcon icon={faXmark} className='nav-mob-close' onClick={closeMenu} />
            <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("home")}>About</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#certification'><p onClick={() => setMenu("home")}>Certification</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#project'><p onClick={() => setMenu("home")}>Projects</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("home")}>Contact</p></AnchorLink></li>
        </ul>
        <div className='nav-connect'>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <span>Connect with me</span>
          </AnchorLink>
        </div>
    </div>
  )
}

export default NavBar