import React, { useState } from 'react';
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMicrophone, faBell, faUser, faRegistered, faEnvelope, faBook, faGear } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <nav className='Navbar'>
      <div className="logo">
        <h3>Grupverse</h3>
      </div>
      <div className="contains">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href=" ">About Us</a></li>
          <li><a href=" ">Contact Us</a></li>
          <li><a href=" ">Help</a></li>
        </ul>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
        <FontAwesomeIcon icon={faSearch} /> {/* Search icon */}
        <FontAwesomeIcon icon={faMicrophone} className='icons-nav' /> {/* Voice assistance icon */}
        <FontAwesomeIcon icon={faBell} className='icons-nav' />
        <div className="profile-icon icons-nav" onClick={toggleProfileDropdown}>
          <FontAwesomeIcon icon={faUser} /> {/* Profile icon */}
          {isProfileDropdownOpen && (
            <div className="dropdown-content">
              <a href=" ">
                <FontAwesomeIcon icon={faUser} /> Login
              </a>
              <a href=" ">
                <FontAwesomeIcon icon={faRegistered} /> Register
              </a>
              <a href=" ">
                <FontAwesomeIcon icon={faEnvelope} /> Terms & Condition
              </a>
              <a href=" ">
                <FontAwesomeIcon icon={faBook} /> Privacy Policy
              </a>
              <a href=" ">
                <FontAwesomeIcon icon={faGear} /> Settings
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
