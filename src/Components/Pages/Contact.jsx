import React from "react";
import contactimg from "../../assets/contact.avif";
import { FaRegEnvelope } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { IoMdCall } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact-formBox">
          <div className="contactForm-top">
            <h1 className="login-box-heading">Get in touch today</h1>
            <p className="mb-5">
              Have question or feedback? We’re have to help. Send us a message,
              and we’ll respond 24X7.
            </p>
          </div>
          <div className="form-bottom">
            <div className="form-items">
              <form className="needs-validation" action="https://formspree.io/f/xleqoelz" method="POST">
                <div className="row g-3">
                  <div className="form-item">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="form-item">
                    <label htmlFor="email" className="form-label">
                     Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="form-item">
                    <label htmlFor="textarea" className="form-label d-block">
                      Description
                    </label>
                    <textarea className="form-control" name="message"  rows={3} id="textarea"placeholder="Write your message here in details..."></textarea>
                  </div>
                </div>
                <button className="contactForm-btn" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="contact-details">
          <div className="contact-img">
            <img src={contactimg} alt="" />
          </div>
          <div className="contact-infoBox">
            <h2>For Quick response contact here</h2>
            <div className="cotactBox-address">
              <div className="contactBox-info">
                <div className="contactBox-logo">
                  <FaRegEnvelope />
                </div>
                  <a href="mailto:kumarimuskann635@gmail.com"   className="contactBox-text">kumarimuskann635@gmail.com</a>
              </div>
              <div className="contactBox-info">
                <div className="contactBox-logo">
                  <IoMdCall />
                </div>
                <div className="contactBox-text">+91 9153933162</div>
              </div>
              <div className="contactBox-info">
                <div className="contactBox-logo">
                  <GrLocation />
                </div>
                <div className="contactBox-text">
                 Matwari, Hazaribag, Jharkhand
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
