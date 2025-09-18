import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';

const NavbarComponent = () => {

    const [active, setActive] = useState('Home');
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        if (search) {
            navigate(`/category/${search}`);
            setSearch('');
        }
    }

  return (
    <div className='navbar'>
        {/* Logo */}
        <div className='navbar__logo'>
            <h2 onClick={() => { setActive("Home"); navigate("/") }}>
              ⚖️  NEXORA NEWSLINE
            </h2>
        </div>

        {/* Navigation Links */}
        <div className='navbar__links'>
            <p className={active === 'Home' ? 'active' : ''} onClick={() => { setActive("Home"); navigate("/") }}>
                🏠 Home
            </p>
            <p className={active === 'General' ? 'active' : ''} onClick={() => { setActive("General"); navigate("/category/general") }}>
                📰 General
            </p>
            <p className={active === 'Technology' ? 'active' : ''} onClick={() => { setActive("Technology"); navigate("/category/technology") }}>
                💻 Technology
            </p>
            <p className={active === 'Politics' ? 'active' : ''} onClick={() => { setActive("Politics"); navigate("/category/politics") }}>
                🏛 Politics
            </p>
            <p className={active === 'Health' ? 'active' : ''} onClick={() => { setActive("Health"); navigate("/category/health") }}>
                🩺 Health
            </p>
            <p className={active === 'Art & Culture' ? 'active' : ''} onClick={() => { setActive("Art & Culture"); navigate("/category/art&culture") }}>
                🎨 Art & Culture
            </p>
        </div>

        {/* Search Box */}
        <div className="navbar__search">
            <input
                className='search-input'
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <IoSearch className='search-icon' onClick={handleSearch} />
        </div>
    </div>
  )
}

export default NavbarComponent;
