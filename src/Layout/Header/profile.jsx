import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "./profile.scss";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [adminProfile, setAdminProfile] = useState(null);

  const initialValues = {
    name: "",
    email: "",
    address: "",
    number: "",
    number: "",
    image: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);

  useEffect(() => {
    const apiHandler = async () => {
      const data = await axios.get(
        "http://localhost:8081/admin/getAdminProfile"
      );
      setAdminProfile(data.data);
    };
    apiHandler();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("formValues ========>", formValues);
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("this is handle submit function");

    const {
      name,
      email,
      address,
      number,
      image,
      // password
    } = formValues;

    let payload = {
      name,
      email,
      address,
      number,
      image,
      // password
    };
    // console.log("Front Image", mediaFiles);
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("number", number);
    formData.append("image", image);
    // formData.append("password", password);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    //

    console.log("admin profile", adminProfile);
    const profileId = adminProfile._id;
    const updatedApi = await axios.put(
      `http://localhost:8081/admin/updateAdmin/${profileId}`,
      formData,
      config
    );
    toast.success("Profile updated Successfully !", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
    console.log("updated api ====>", updatedApi);
  };

  const handlePassword = async (e) => {
    e.preventDefault();
    console.log("formValues in handle password function ==>", formValues);

    // console.log("adminnn profiie in handle password ====>", adminProfile)

    const { currentPassword, newPassword, confirmPassword } = formValues;

    let payload = {
      currentPassword,
      newPassword,
      confirmPassword,
    };
 
    if (adminProfile.password == formValues.currentPassword && formValues.newPassword === formValues.confirmPassword) {
      const updatedPassword = await axios.put(
        "http://localhost:8081/admin/updatePassword",
        payload
      );
      toast.success('Password Updated Successfully!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000
    });
    } else if( adminProfile.password !== formValues.currentPassword || formValues.newPassword !== formValues.confirmPassword ){
      toast.error('Passwords does not match !', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000
    });
    }
  };

  return (
    <div>
      <div className="d-flex">
        <form className="form-container" onSubmit={handleSubmit} action="#">
          <h3 className="fa fw-bold border-bottom">Profile</h3>
          <div className="d-flex profile-conten-container">
            <div>
              <label>Name /</label> <br />
              <input
                type="text"
                placeholder="Type your Name"
                className="input-field"
                name="name"
                onChange={handleChange}
                value={formValues.name}
                required
              />
            </div>
            <div className="email-container">
              <label>Email</label> <br />
              <input
                type="text"
                placeholder="Type your Email"
                className="input-field"
                name="email"
                onChange={handleChange}
                value={formValues.email}
                required
              />
            </div>
          </div>
          <div className="input-continer">
            <label>Address</label> <br />
            <input
              type="text"
              placeholder="Type your address"
              className="address-input-field"
              name="address"
              onChange={handleChange}
              value={formValues.address}
              required
            />
          </div>
          <div className="d-flex">
            <div className="phone-container">
              <label>Phone</label> <br />
              <input
                type="number"
                placeholder="Type your number"
                className="input-field"
                name="number"
                onChange={handleChange}
                value={formValues.number}
                required
              />
            </div>

            {/* <div className="d-flex"> */}
            <div>
              <label>Select Image</label>
              <input type="file" name="image" onChange={handleChange} />
            </div>
            {/* </div> */}
          </div>
          <div className="update-button">
            <button className="btn btn-primary" type="submit">
              Update Profile
            </button>
          </div>
        </form>
        {/*  */}
        {/* <h3>{adminProfile?.data.name}</h3> */}
        {/* <h2>{adminProfile.name}</h2> */}
        <div className="main-content">
          <div className="p-3">
            <section className="section about-section gray-bg" id="about">
              <div className="about-text go-to">
                <h3 className="dark-color ">About Me</h3>
                <div className="row about-list">
                  <div className="col-md-6">
                    <div className="media">
                      <label>Name /</label>
                      {console.log("adminProfile ====>", adminProfile)}
                      <p>{adminProfile?.name}</p>
                      {/* <img src={"http://localhost:8081/"+adminProfile?.image} alt="my imge" height={50} width={50} /> */}
                    </div>
                    <div className="media">
                      <label>Residence/</label>
                      <p>{adminProfile?.address}</p>
                    </div>
                    <div className="media">
                      <label>Age /</label>
                      <p>20 years</p>
                    </div>
                    <div className="media">
                      <label>Address /</label>
                      <p>{adminProfile?.address}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media">
                      <label>E-mail /</label>
                      <p>{adminProfile?.email}</p>
                    </div>
                    <div className="media">
                      <label>Phone /</label>
                      <p>{adminProfile?.number}</p>
                    </div>
                    <div className="media">
                      <label>Skype /</label>
                      <p>skype.0404</p>
                    </div>
                    <div className="media">
                      <label>Freelance /</label>
                      <p>Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="password-container">
        <h4 className="fw-bold">Change Password</h4>
        <form onSubmit={handlePassword}>
          <div className="d-flex align-items-center">
            <div>
              <label>
                Current Password <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                placeholder="type your current password"
                className="input-field"
                name="currentPassword"
                onChange={handleChange}
                value={formValues.currentPassword}
              />
            </div>
            <div>
              <label>
                New Password <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                placeholder="type your new password"
                className="input-field"
                name="newPassword"
                onChange={handleChange}
                value={formValues.newPassword}
              />
            </div>
            <div>
              <label>
                Confirm Password <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                placeholder="Confirm your password"
                className="input-field"
                name="confirmPassword"
                onChange={handleChange}
                value={formValues.confirmPassword}
              />
            </div>
          </div>
          <div className="update-password">
            <button className="btn btn-primary" type="submit">
              Update Password
            </button>
          </div>
        </form>
      </div>
      {/* <Header adminProfile={adminProfile}/> */}
    </div>
  );
};

export default Profile;
