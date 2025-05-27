import React from 'react';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className='header'>
            <div className="header-left">
                <h1 className='logo'><span style={{color:'#05eefa'}}>Health</span>care</h1>
            </div>
            <div className="header-middle">
                <input className='search-bar' type='text' placeholder='Search...' disabled />
                <span className='icon'>
                <FontAwesomeIcon icon={faBell} size="lg" />
                </span>
            </div>
            <div className="header-right">
                    <div className="user-profile">
                        <span>👩‍⚕️</span>
                    </div>
                <button className='add-btn'>+</button>
            </div>
        </header>
    )
}

export default Header;