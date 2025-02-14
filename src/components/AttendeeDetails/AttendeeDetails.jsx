import React, { useState } from 'react';
import Button from '../Button/Button';
import UploadPhoto from '../UploadPhoto/UploadPhoto';
import './AttendeeDetails.css';
import '../../index.css'

const AttendeeDetails = ({ onBack, onNext }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    specialRequest: '',
    profilePhoto: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profilePhoto: file });
  };

  const handleNext = () => {
    if (!formData.name || !formData.email) {
      alert('Please fill in all required fields!');
      return;
    }
    onNext(formData);
  };

  return (
    <div className="attendee-details">
      <div className="card">
        <div className="card-header">
          <h2>Attendee Details</h2>
          <span className="step">Step 2/3</span>
        </div>

        <div className="progress-bar">
          <div className="progress2"></div>
        </div>

        <div className="main-card">
          <UploadPhoto />
          
          <div className="line"></div>

          <div className="input-group">
            <label>Enter your name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe"/>
          </div>

          <div className="input-group">
            <label>Enter your email*</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="hello@avioflagos.io" />
          </div>

          <div className="input-group">
            <label>Special Request?</label>
            <textarea name="specialRequest" value={formData.specialRequest} onChange={handleChange} placeholder="Textarea"></textarea>
          </div>

          <div className="button-group">
            <Button className='btn1' variant="secondary" onClick={onBack}>Back</Button>
            <Button className='btn2' variant="primary" onClick={handleNext}>Get My Free Ticket</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendeeDetails;