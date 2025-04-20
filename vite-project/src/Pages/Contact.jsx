import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4qqmisg", // replace
        "template_0f0ayfx", // replace
        form.current,
        "22-19sqkuXqGLsRZO" // replace
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset();

        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong!");
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2 className="small-heading">Let's Talk</h2>
        <h1 className="big-heading">CONTACT US</h1>
        <h3 className="sub-heading">GET <span className="sp"> IN</span> TOUCH</h3>
        <p className="contact-caption">
          <strong>
            Have questions or need assistance? Click the 'Contact Us' icon to
            get in touch with our friendly and responsive customer support team.
          </strong>
        </p>
      </div>

      <div className="contact-right">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
