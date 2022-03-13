import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { useAlert } from "react-alert";
function Contact() {
  const alert = useAlert();
  function sendEmail(e) {
    alert.success("Thank You for contacting us");
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4buczgh",
        "template_9ljaras",
        e.target,
        "user_eUQ9AAvFBWJv825QPdR2r"
      )
      .then((res) => console.log(res))
      .then((err) => console.log(err));
    e.target.reset();
  }

  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Contact Me.</h1>
              <p className="hire__text white">
                I am available for freelance work. Connect with me via phone
                ,Email or leave a message below:
              </p>
              <p className="hire__text white">
                <strong>+92 349 6582 448</strong> or email{" "}
                <strong>saifaslam155@gmail.com</strong>
              </p>
            </div>
            <form onSubmit={sendEmail}>
              <div className="input__box">
                <input
                  type="text"
                  className="contact name"
                  placeholder="Your name *"
                  name="name"
                />
                <input
                  type="text"
                  className="contact email"
                  placeholder="Your Email *"
                  name="email"
                />
                <input
                  type="text"
                  className="contact subject"
                  placeholder="Write a Subject"
                  name="subject"
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write Your message"
                ></textarea>
                <button
                  className="btn contact pointer"
                  type="submit"
                  //   value="send"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col__2">
          {/* <img src="" alt="" className="contact__img" /> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
