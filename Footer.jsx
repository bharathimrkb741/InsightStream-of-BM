import React from 'react'
import '../styles/Footer.css'
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const navigate = useNavigate();

  return (
    <footer>

        <div className='footer'>
            <ul>
              <li onClick={()=> navigate("/category/")}>📰 General</li>
              <li onClick={()=> navigate("/category/Technology")}>💻 Technology</li>
              <li onClick={()=> navigate("/category/Science")}>🔬 Science</li>
            </ul>
            <ul>
              <li onClick={()=> navigate("/category/Lifestyle")}>🎨 Lifestyle</li>
              <li onClick={()=> navigate("/category/Health")}>🩺 Health</li>
              <li onClick={()=> navigate("/category/Fitness")}>💪 Fitness</li>
            </ul>
            <ul>
              <li onClick={()=> navigate("/category/Business")}>💼 Business</li>
              <li onClick={()=> navigate("/category/Stock Markets")}>📈 Stock Markets</li>
              <li onClick={()=> navigate("/category/Exchanges")}>💱 Exchanges</li>
            </ul>
            <ul>
              <li onClick={()=> navigate("/category/Geo-Politics")}>🌍 Geo-Politics</li>
              <li onClick={()=> navigate("/category/Wars")}>⚔️ Wars</li>
              <li onClick={()=> navigate("/category/Current-Affairs")}>📰 Current Affairs</li>
            </ul>
        </div>
        <hr />
        <p>⚖️ NEXORA NEWSLINE - &copy; 2023 - All rights reserved</p>
    </footer>
  )
}

export default Footer
