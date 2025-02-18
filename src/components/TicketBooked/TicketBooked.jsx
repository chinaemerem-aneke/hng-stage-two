import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./TicketBooked.css";
import "../../index.css";
import "../TicketSelection/TicketSelection.css";
import background from '../../assets/bg.png';
import BarCode from '../../assets/bar_code.png';

const TicketBooked = ({ setStep }) => {
  const [attendeeData, setAttendeeData] = useState(null);
  const [ticketData, setTicketData] = useState(null);

  useEffect(() => {
    const savedAttendeeData = JSON.parse(localStorage.getItem("attendeeDetails"));
    const savedTicketData = JSON.parse(localStorage.getItem("ticketDetails"));

    if (savedAttendeeData) setAttendeeData(savedAttendeeData);
    if (savedTicketData) setTicketData(savedTicketData);
  }, []);

  const handleDownload = () => {
    alert("Your ticket is downloading...");
  }
  
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
              <div className="upload-box">
                {attendeeData?.imageURL && (
                  <img
                    src={attendeeData.imageURL}
                    alt="Profile"
                    className="profile-preview"
                  />
                )}
              </div>
              <div className="form-details">
                <div className="name">
                  <h3>Enter your name:</h3>
                  <p>{attendeeData?.name || "N/A"}</p>
                </div>
                <div className="email">
                  <h3>Enter your email*:</h3>
                  <p>{attendeeData?.email || "N/A"}</p>
                </div>
                <div className="ticket-type">
                  <h3>Ticket Type:</h3>
                  <p>{ticketData?.ticketType || "N/A"}</p>
                </div>
                <div className="ticket-for">
                  <h3>Ticket for:</h3>
                  <p>{ticketData?.ticketNumber || "N/A"}</p>
                </div>
                <div className="special-request">
                  <h3>Special request: </h3>
                  <p>{ticketData?.quantity}</p>
                  <h3>Special request:</h3>
                  <p>{attendeeData?.about || "N/A"}</p>
                </div>
              </div>
              <img src={BarCode} alt="barcode" className="barcode" />
            </div>
          </div>

          <div className="button-group">
            <Button className="btn1" variant="secondary" onClick={() => { setStep(1); localStorage.clear(); }}>
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

