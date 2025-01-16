import './Contact.css';
import contactbook from '../../assets/contactbook.png';
import location from '../../assets/location.png';
import mail from '../../assets/mail.png';

function Contact() {
  return (
    <section className='contact' id='contact-us'>
      <div className="contact-container">
        <h1>Let's Connect</h1>
        <p className='p-center'>Have questions or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        <div className="contact-form">
          <div className="get-in-touch">
            <h2>Get in Touch</h2>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="tel" id="phoneNumber" placeholder="+1 (555) 000-0000" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" placeholder="Write your message here..."></textarea>
            </div>
            <button type="submit" className="send-message">Send Message</button>
          </div>
          <div className="contact-information">
            <h2>Contact Information</h2>
            <div className="email">
              <img src={contactbook} alt="Email" />
              <p>Contact@gmail.com</p>
            </div>
            <div className="phone">
              <img src={mail} alt="Phone" />
              <p>+1 (555) 000-0000</p>
            </div>
            <div className="location">
              <img src={location} alt="Location" />
              <p>Campus Market Road, 4116 Carmona City, Cavite</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 