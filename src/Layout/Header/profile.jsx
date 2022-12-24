import React from "react";
import "./profile.scss";

const Profile = () => {
  return (
    <div>
      <form className="form-container">
        <h3 className="fa">Profile</h3>
        <div className="d-flex">
          <div>
            <label>Name</label> <br />
            <input type="text" placeholder="Type your Name" className="input-field"/>
          </div>
          <div className="email-container">
            <label>Email</label> <br />
            <input type="text" placeholder="Type your Email" className="input-field" />
          </div>
        </div>
        <div>
          <label>Address</label> <br />
          <input type="text" placeholder="Type your address" className="input-field"/>
        </div>
        <div className="d-flex">
          <div>
            <label>Phone</label> <br />
            <input type="number" placeholder="Type your number" className="input-field" />
          </div>

          {/* <div className="d-flex"> */}
            <div className="form-check form-switch">
              <label className="form-check-label" for="flexSwitchCheckChecked">
                Status
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                defaultChecked
              />
            </div>
          {/* </div> */}
        </div>
        <div className="update-button">
          <button className="btn btn-primary">Update Profile</button>
        </div>
      </form>
       
       {/*  */}
       <div className="password-container">
        <h4 className="fw-bold">Change Password</h4>
          <div className="d-flex align-items-center">
            <div>
                <label>Current Password <span className="text-danger">*</span></label>
                <input type="text" placeholder="type your current password" className="input-field" />
            </div>
            <div>
            <label>New Password <span className="text-danger">*</span></label>
                <input type="text" placeholder="type your new password" className="input-field"/>
            </div>
            <div>
            <label>Confirm Password <span className="text-danger">*</span></label>
                <input type="text" placeholder="Confirm your password" className="input-field"/>
            </div>
          </div>
       </div>
    </div>
  );
};

export default Profile;
