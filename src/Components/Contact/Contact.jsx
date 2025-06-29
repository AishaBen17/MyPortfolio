import React from "react";
import "./Contact.css";
import Title from "./../Title/Title";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "fcac63ac-74dc-427a-be51-38a0c83ea95f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted Successfully ✨");
      event.target.reset();
    } else {
      toast.error(`Error: ${data.message}`);
    }
  };

  return (
    <div id="contact" className="contact" data-aos="zoom-in-up">
      <Title title="Get in touch" />
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            Looking for a Front-End Developer to bring your designs to life? I'm
            available for remote work and exciting collaborations. Let’s talk!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <MdEmail className="contact-icon" />
              <p>aisha.ahmedben@gmail.com</p>
            </div>
            <div className="contact-detail">
              <MdLocationOn className="contact-icon" />
              <p>Alexandria - Egypt</p>
            </div>
            <div className="contact-detail">
              <MdPhone className="contact-icon" />
              <p>
                +20 12 0042 6267 <br /> +966 55 645 7724
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name :</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            required
          />

          <label>Your Email :</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            required
          />

          <label>Your Message :</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
            required
          ></textarea>

          <button className="contact-submit">Submit</button>
        </form>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
     
    </div>
  );
};

export default Contact;
