import React from "react";
import Navbar from "../NavBar/Navbar";
import Button from "../Button/Button";
import "./TicketBooked.css";
import "../../index.css";
import ticketImage from "../../assets/logo.png"; 

const TicketBooked = () => {
  const handleDownload = () => {
    alert("Your ticket is downloading...");
  };

  return (
    <div className="ticket-booked">
      <Navbar />

      <div className="content">
        <h1>Your Ticket is Booked!</h1>
        <p>
          Check your email for a copy or you can <span className="highlight">download</span>
        </p>

        <div className="ticket-card">
          <img src={ticketImage} alt="Ticket Preview" className="ticket-image" />
        </div>

        <div className="button-group">
          <Button className="btn1" variant="secondary">Book Another Ticket</Button>
          <Button className="btn2" variant="primary" onClick={handleDownload}>Download Ticket</Button>
        </div>
      </div>
    </div>
  );
};

export default TicketBooked;
