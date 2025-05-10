import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact__title">Contact Me</h1>
      <form className="contact__form">
        <div className="contact__name-container">
          <label className="contact__form-label">
            First Name *
            <input
              className="contact__form-input"
              type="text"
              placeholder="First Name"
              required
            ></input>
          </label>
          <label className="contact__form-label">
            Last Name *
            <input
              className="contact__form-input"
              type="text"
              placeholder="Last Name"
              required
            ></input>
          </label>
        </div>
        <label className="contact__form-label">
          Phone Number *
          <input
            className="contact__form-input"
            type="text"
            placeholder="(123) 456 - 7890"
            required
          ></input>
        </label>
        <label className="contact__form-label">
          Email *
          <input
            className="contact__form-input"
            type="text"
            placeholder="JohnDoe@gmail.com"
            required
          ></input>
        </label>
        <label className="contact__form-label">
          Message (optional)
          <input
            className="contact__form-input"
            type="text"
            placeholder="Type your message here"
          ></input>
        </label>
        <button className="contact__submit-button">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
