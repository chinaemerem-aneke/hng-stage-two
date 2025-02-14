import React, { useState } from 'react';
import Button from '../Button/Button';
import './TicketSelection.css';
import '../../index.css';

const TicketSelection = ({ onNext, onCancel }) => {
  const [selectedTicket, setSelectedTicket] = useState('free'); // Default selection
  const [quantity, setQuantity] = useState(1);

  const ticketOptions = [
    { type: 'Free', access: 'REGULAR ACCESS', price: 'Free', capacity: '20/52' },
    { type: 'VIP', access: 'VIP ACCESS', price: '$150', capacity: '20/52' },
    { type: 'Premium', access: 'VIP ACCESS', price: '$150', capacity: '20/52' },
  ];

  // Handle ticket selection
  const handleTicketSelect = (type) => {
    setSelectedTicket(type); 
  };

  // Handle quantity change
  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  // Handle next button click
  const handleNext = () => {
    if (selectedTicket) {
      const selectedTicketData = ticketOptions.find(
        (ticket) => ticket.type.toLowerCase() === selectedTicket
      );
      onNext({ ...selectedTicketData, quantity });
    } else {
      alert('Please select a ticket type!');
    }
  };

  return (
    <div className="ticket-selection">
      <div className="card">
        <div className="card-header">
          <h2>Ticket Selection</h2>
          <span className="step">Step 1/3</span>
        </div>

        <div className="progress-bar">
          <div className="progress1"></div>
        </div>

        <div className="main-card">
          <div className="event-details">
            <h1>Techember Fest '25</h1>
            <p>Join us for an unforgettable experience at TechyJaunt! <br /> Secure your spot now.</p>
            <p>📍 [Event Location] || March 15, 2025 | 7:00 PM</p>
          </div>

          <div className="line"></div>

          <div className="ticket-types">
            <h3>Select Ticket Type:</h3>
            <div className="ticket-grid">
              {ticketOptions.map((ticket, index) => (
                <div
                  key={index}
                  className={`ticket-option ${
                    selectedTicket === ticket.type.toLowerCase() ? 'selected' : ''
                  }`}
                  onClick={() => handleTicketSelect(ticket.type.toLowerCase())}
                >
                  <h3>{ticket.price}</h3>
                  <p className="access-type">{ticket.access}</p>
                  <p className="capacity">{ticket.capacity}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="ticket-quantity">
            <p>Number of Tickets</p>
            <select value={quantity} onChange={handleQuantityChange}>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="button-group">
            <Button className="btn1" variant="secondary" onClick={onCancel}>
              Cancel
            </Button>
            <Button className="btn2" variant="primary" onClick={handleNext}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;
