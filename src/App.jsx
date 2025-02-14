import React, { useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import TicketSelection from "./components/TicketSelection/TicketSelection";
import AttendeeDetails from "./components/AttendeeDetails/AttendeeDetails";
import TicketBooked from "./components/TicketBooked/TicketBooked";
import "./index.css"; 

const App = () => {
  const [currentStep, setCurrentStep] = useState(1); // 1: TicketSelection, 2: AttendeeDetails, 3: TicketBooked
  const [isLoading, setIsLoading] = useState(false); 

  const handleNext = (ticketData) => {
    console.log("Selected Ticket:", ticketData);
    setIsLoading(true);
    setTimeout(() => {
      setCurrentStep(2); // Move to AttendeeDetails
      setIsLoading(false); 
    }, 1000); 
  };

  const handleCancel = () => {
    console.log("Cancelled");
    setIsLoading(true);
    setTimeout(() => {
      setCurrentStep(1); // Go back to TicketSelection
      setIsLoading(false); 
    }, 1000); 
  };

  const handleAttendeeDetailsNext = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentStep(3); // Move to TicketBooked
      setIsLoading(false); 
    }, 1000); 
  };

  const handleAttendeeDetailsBack = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentStep(1); // Go back to TicketSelection
      setIsLoading(false); 
    }, 1000); 
  };

  const handleTicketBookedBack = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentStep(1); // Go back to TicketSelection
      setIsLoading(false); 
    }, 1000); 
  };

  return (
    <div>
      <Navbar />
      {isLoading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          {currentStep === 1 && (
            <TicketSelection onNext={handleNext} onCancel={handleCancel} />
          )}
          {currentStep === 2 && (
            <AttendeeDetails
              onNext={handleAttendeeDetailsNext}
              onBack={handleAttendeeDetailsBack}
            />
          )}
          {currentStep === 3 && <TicketBooked onBack={handleTicketBookedBack} />}
        </>
      )}
    </div>
  );
};

export default App;