import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
    // You can integrate your form submission logic here
  };
  const reviews = [
    {
      img: "images/review-pic1.jpeg",
      name: "John Deo",
      occupation: "Happy Client",
      phone:+123123123,
      email: "sitharam@gmail.com"
    }];

  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        <span>contact</span> us
      </h1>
      <div className="contact-container">
        <div className="placement-officer">
          {reviews.map((review, index) => (
                <div className="user">
                  <img src={review.img} alt={review.name} />
                  <div className="user-info">
                    <h3>{review.name}</h3>
                    <span>{review.occupation}</span>
                    <a href="#">
                      <i className="fas fa-phone"></i>{review.phone}
                    </a>
                    <a href="#">
                      <i className="fas fa-envelope"></i>{review.email}
                    </a>
                  </div>
                </div>
            ))}
        </div>
        <div className="office-address">
          <h3>Placement Office</h3>
          <a href="#">
            <i className="fas fa-map-marker-alt"></i> Tirupati, India - 400401
          </a>
          <a href="#">
            <i className="fas fa-phone"></i> +123-456-7890
          </a>
          <a href="#">
            <i className="fas fa-phone"></i> +111-222-3443
          </a>
          <a href="#">
            <i className="fas fa-envelope"></i> chenna@gmail.com
          </a>
          <a href="#">
            <i className="fas fa-envelope"></i> prem@gmail.com
          </a>
          <a href="#">
            <i className="fas fa-envelope"></i> sitharam@gmail.com
          </a>
        </div>
        <div className="contacting">
          <form onSubmit={handleSubmit}>
            <div className="inputBox">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="inputBox">
              <input
                type="number"
                name="number"
                placeholder="Number"
                value={formData.number}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>
            <textarea
              name="message"
              placeholder="Your message"
              cols="30"
              rows="10"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <input type="submit" value="Send Message" className="btn" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
