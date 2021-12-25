import { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
const Contact = () => {
  const [done, setDone] = useState(false);
  const formRef = useRef();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gwe3xnb",
        "template_0rezm9d",
        formRef.current,
        "user_Nfs8uJ5KOjRC3U4KKIlav"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Lets discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src="https://i.imgur.com/dZytM5f.png" alt="" className="c-icon" />
              +1 646-228-6854
            </div>
            <div className="c-info-item">
              <img src="https://i.imgur.com/PZAUvBe.jpg" alt="" className="c-icon" />
              soumor801@gmail.com
            </div>
            <div className="c-info-item">
              <img src="https://i.imgur.com/UEOehbY.png" alt="" className="c-icon" />
              New York City, New York, USA
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story</b> Get in touch. Always available for
            freelancing if the right project comes along
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              name=""
              id=""
              cols="30"
              rows="10"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you! Email has been sent."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
