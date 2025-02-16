import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import ticz from '../../assets/ticz.png';
import arrow from '../../assets/arrow.png';

const Navbar = () => {
  const handleMyTicketsClick = () => {
    alert('My Tickets button clicked!');
  };

  return (
    <nav>
      <div className="flex">
        <img src={logo} alt="Logo" />
        <img src={ticz} alt="Ticz" />
      </div>
      <ul>
        <li><a href="#">Event</a></li>
        <li><a href="#">My Tickets</a></li>
        <li><a href="#">About Project</a></li>
      </ul>
      <button className="myTicketBtn" onClick={handleMyTicketsClick}>
        My Tickets <img src={arrow} alt="Arrow" />
      </button>
    </nav>
  );
};

export default Navbar;