import React from 'react';

import './Header.css';

import { Link } from 'react-router-dom';

const Header = () => (
  <header className = "header">
    <ul className = "ul">
      <li className = "li"><Link to = '/small' className = "link">SMALL DATA</Link></li>
      <li className = "li"><Link to = '/big' className = "link">BIG DATA</Link></li>
    </ul>
  </header>
)


export default Header;
