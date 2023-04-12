import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-form" id ="Contact">
      {/* left */}
      <div className="w-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact Me</span>
          <div
            className="blur s-blur"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right */}
      <div className="c-right">
        <form>
            <input type="text" name="user_name" className="user" placeholder="Name" />
            <input type="email" name="user_email" className="user" placeholder="Email" />
            <textarea name="message" className="user" placeholder="Message"/>
            <input type="submit" value="Send" className="button"  />
              
            <div className="blur c-blur" style={{background: "var(--purple)"}}>

            </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
