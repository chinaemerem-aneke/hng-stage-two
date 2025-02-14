import React, { useState, useEffect } from "react";
import "./UploadPhoto.css";
import uploadIcon from "../../assets/upload-icon.png";

const UploadPhoto = ({ setFormData }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);

//   // Load saved image from localStorage on component mount
//   useEffect(() => {
//     const savedImage = localStorage.getItem("profilePhoto");
//     if (savedImage) {
//       setImagePreview(savedImage); // Set the image preview if a saved image exists
//     }
//   }, []); // Empty dependency array ensures this runs only once on mount

  const handlePhotoUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      setUploading(true);

      // // Save the image URL to localStorage
      // localStorage.setItem("profilePhoto", imageUrl);

      // const formData = new FormData();
      // formData.append("profilePhoto", file);

      try {
        const response = await fetch("https://your-backend.com/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          console.error("Upload failed");
        }
      } catch (error) {
        console.error("Network error", error);
      }

      setUploading(false);
    }
  };

  // Clear the saved image
  const clearPhoto = () => {
    localStorage.removeItem("profilePhoto");
    setImagePreview(null);
  };

  return (
    <div className="upload-container">
      <h3 className="upload-title">Upload Profile Photo</h3>
      <div className="upload-box">
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          hidden
          id="fileUpload"
        />

        <label htmlFor="fileUpload" className="upload-area">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Profile Preview"
              className="profile-preview"
            />
          ) : (
            <div className="upload-content">
              <img src={uploadIcon} alt="" className="upload-icon" />
              <p>
                Drag & drop or click to <br /> upload
              </p>
            </div>
          )}
        </label>
      </div>


      {uploading && <p>Uploading...</p>}
    </div>
  );
};

export default UploadPhoto;