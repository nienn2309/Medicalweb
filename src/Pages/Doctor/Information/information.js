import React from 'react';
import "./information.scss";

function DoctorDetails() {
  return (
    <div className='doctor-profile'>
      <div className="grid-container">
        <div className="grid-column-left">
          <div className="segment">
            <img
              src="./image/cat1.png"
              className="profile-image"
              alt="Profile"
            />
            <div className="info-row">
              <b>Full Name:</b>
              <div>John Lennon</div>
            </div>
            <div className="info-row">
              <b>IC:</b>
              <div>12/4/1990</div>
            </div>
            <div className="info-row">
              <b>Gender:</b>
              <div>Male</div>
            </div>
          </div>
        </div>

        <div className="grid-column-right">
          <div className="segment">
            <h2 className="segment-header">Doctor's Full Details</h2>
            <div className="info-row">
              <div className="sub-segment">
                <h3 className="sub-header">PERSONAL DETAILS</h3>
                <div className="sub-info">
                  <b>Phone</b>
                  <div>0291232131</div>
                </div>
                <div className="sub-info">
                  <b>Birthdate</b>
                  <div>18/2/1989</div>
                </div>
              </div>
            </div>
            <div className="info-row">
              <div className="sub-segment">
                <h3 className="sub-header">EDUCATION DETAILS</h3>
                <div className="sub-info">
                  <b>Highest Qualification</b>
                  <div>phD</div>
                </div>
                <div className="sub-info">
                  <b>Major</b>
                  <div>Something</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;
