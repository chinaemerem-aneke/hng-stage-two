import React from 'react';
import Navbar from './components/NavBar/Navbar';
import TicketSelection from './components/TicketSelection/TicketSelection';
import AttendeeDetails from './components/AttendeeDetails/AttendeeDetails';
import TicketBooked from './components/TicketBooked/TicketBooked';

const App = () => {
  const handleNext = (ticketData) => {
    console.log('Selected Ticket:', ticketData);
    // Navigate to the next step
  };

  const handleCancel = () => {
    console.log('Cancelled');
    // Handle cancel logic
  };

  return (
    <div>
      {/* <Navbar />
      <TicketSelection onNext={handleNext} onCancel={handleCancel} /> */}
      <AttendeeDetails />
      {/* <TicketBooked /> */}
    </div>
  );
};

export default App;