import React, { useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import TicketSelection from "./components/TicketSelection/TicketSelection";
import AttendeeDetails from "./components/AttendeeDetails/AttendeeDetails";
import TicketBooked from "./components/TicketBooked/TicketBooked";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1); // 1: TicketSelection, 2: AttendeeDetails, 3: TicketBooked

  const handleNext = (ticketData) => {
    console.log("Selected Ticket:", ticketData);
    setCurrentStep(2); // Move to AttendeeDetails
  };

  const handleCancel = () => {
    console.log("Cancelled");
    setCurrentStep(1); // Go back to TicketSelection
  };

  const handleAttendeeDetailsNext = () => {
    setCurrentStep(3); // Move to TicketBooked
  };

  const handleAttendeeDetailsBack = () => {
    setCurrentStep(1); // Go back to TicketSelection
  };

  const handleTicketBookedBack = () => {
    setCurrentStep(1); // Go back to TicketSelection
  };

  return (
    <div>
      <Navbar />
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
    </div>
  );
};

export default App;