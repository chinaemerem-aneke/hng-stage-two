import React from 'react';
import TicketSelection from '../components/TicketSelection/TicketSelection';
import Navbar from '../components/NavBar/Navbar';

export const HomePage = () => {
  return (
      <div>
            <Navbar />
            <TicketSelection />   
      </div>
  )
}


export default HomePage;