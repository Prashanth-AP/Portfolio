import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const container = `bg-gradient-to-b from-slate-950 to-slate-900 text-gray-200 p-2`;
const wrapper = `flex flex-col gap-3 justify-center items-center my-3`;
const title = `text-center text-amber-600 lg:text-4xl text-3xl font-bold`;
const titleDesc = `text-center text-xl`;
const contactForm = `flex flex-col gap-3 bg-gray-950 p-5 rounded-lg lg:w-1/2 w-full `;
const contactTitle = "text-amber-600 font-semibold ml-2 text-xl";
const inputStyle = `bg-gray-700 h-12 p-3 rounded-lg`;
const inputStyleTextArea = "bg-gray-700 p-3 rounded-lg";
const sendButton = `text-gray-950 font-semibold h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 shadow hover:shadow-cyan-400`;

function Contact() {
  const form = useRef();

  const [data, setData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setData({ from_name: "", from_email: "", message: "" });
  //   alert("Message sent Succesfully");
  // };

  const handleChange = (event) => {
    setData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const service_id = import.meta.env.VITE_MY_SERVICE_ID;
  const template_id = import.meta.env.VITE_MY_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_MY_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(service_id, template_id, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          alert("Message sent Succesfully");
          setData({ from_name: "", from_email: "", message: "" });
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <>
      {/* <h1>{sucMessage}</h1> */}
      <div name="contact" className={container}>
        <div className={wrapper}>
          <div className={title}>Contact Me</div>
          <div className={titleDesc}>
            Feel free to reach out to me for any queries
          </div>
          <form ref={form} className={contactForm} onSubmit={sendEmail}>
            <div className={contactTitle}>Email Me</div>
            <input
              className={inputStyle}
              type="text"
              name="from_name"
              placeholder="Your Name"
              value={data.from_name}
              onChange={handleChange}
            />
            <input
              className={inputStyle}
              type="email"
              name="from_email"
              placeholder="Your Email"
              value={data.from_email}
              required
              onChange={handleChange}
            />
            <textarea
              className={inputStyleTextArea}
              name="message"
              rows={4}
              placeholder="Message"
              value={data.message}
              onChange={handleChange}
            ></textarea>
            <button className={sendButton} type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
