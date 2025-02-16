import React from "react";
import Button from "../Button/Button";
import "./TicketBooked.css";
import "../../index.css";
import "../TicketSelection/TicketSelection.css";
import background from '../../assets/bg.png';
import BarCode from '../../assets/bar_code.png';

const TicketBooked = ({ attendeeData, ticketData }) => {
  const handleDownload = () => {
    alert("Your ticket is downloading...");
  };

  return (
    <div className="ticket-booked">
      <div className="card">
        <div className="card-header">
          <h2>Ready</h2>
          <span className="step">Step 3/3</span>
        </div>

        <div className="progress-bar">
          <div className="progress3"></div>
        </div>

        <div className="main-card">
          <div className="title">
            <h1>Your Ticket is Booked!</h1>
            <p>
              Check your email for a copy or you can <strong>download</strong>
            </p>
          </div>
          <div className="ticket">
            <img src={background} alt="Event Background" className="ticket-background" />
            <div className="ticket-overlay">
              <div className="event-details">
                <h1>Techember Fest '25</h1>
                <p>📍 04 Rumens Road, Ikoyi, Lagos</p>
                <p>📅 March 15, 2025 | 7:00 PM</p>
              </div>
              <div className="profile-photo">
                {attendeeData?.profilePhoto && (
                  <img
                    src={URL.createObjectURL(attendeeData.profilePhoto)}
                    alt="Profile"
                    className="profile-preview"
                  />
                )}
              </div>
              <div className="form-details">
                <div className="name">
                  <h3>Name:</h3>
                  <p>{attendeeData?.name}</p>
                </div>
                <div className="email">
                  <h3>Email:</h3>
                  <p>{attendeeData?.email}</p>
                </div>
                <div className="ticket-type">
                  <h3>Ticket Type:</h3>
                  <p>{ticketData?.access}</p>
                </div>
                <div className="ticket-for">
                  <h3>Ticket for:</h3>
                  <p>{ticketData?.quantity}</p>
                </div>
                <div className="special-request">
                  <h3>Special request: </h3>
                  <p>{ticketData?.quantity}</p>
                </div>


              </div>
              <img src={BarCode} alt="barcode" className="barcode" />
            </div>
          </div>

          <div className="button-group">
            <Button className="btn1" variant="secondary" onClick={handleDownload}>
              Book Another Ticket
            </Button>
            <Button className="btn2" variant="primary" onClick={handleDownload}>
              Download Ticket
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketBooked;