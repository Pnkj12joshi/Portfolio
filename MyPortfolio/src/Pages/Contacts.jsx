import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";

const ContactUs = ({id}) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/send-email", {
        name,
        email,
        message,
      });
      console.log(response.data);
      setname("");
      setemail("");
      setmessage("");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div id="ContactUs" className="min-h-screen flex items-center justify-center p-6 flex-col">
      <h2 className="text-4xl font-bold text-white text-center mb-6 tracking-wide uppercase">
        Contact
      </h2>
      <div className="max-w-4xl w-full bg-white/20 backdrop-blur-md shadow-lg rounded-xl p-8">
        <p className="text-white text-center opacity-80 mb-6">
          Have questions? We'd love to hear from you. Get in touch with us!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 bg-[#00ADB5] p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 text-center sm:text-left">
            <FaPhone className="text-white text-2xl" />
            <div>
              <h4 className="text-lg font-semibold text-white">Phone</h4>
              <p className="text-white opacity-80">+91 7055338548</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 bg-[#00ADB5] p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 text-center sm:text-left">
            <FaEnvelope className="text-white text-2xl" />
            <div>
              <h4 className="text-lg font-semibold text-white">Email</h4>
              <p className="text-white opacity-80">pankajjoshi3919@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 bg-[#00ADB5] p-4 rounded-lg md:col-span-2 shadow-lg hover:scale-105 transition-transform duration-300 text-center sm:text-left">
            <FaMapMarkerAlt className="text-white text-2xl" />
            <div>
              <h4 className="text-lg font-semibold text-white">Address</h4>
              <p className="text-white opacity-80">Noida, UP</p>
            </div>
          </div>
        </div>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              value={name}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-[#00ADB5] bg-white/10 text-white placeholder-white/80"
              onChange={(e) => setname(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-[#00ADB5] bg-white/10 text-white placeholder-white/80"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <textarea
            rows="5"
            value={message}
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-lg mt-4 focus:ring focus:ring-[#00ADB5] bg-white/10 text-white placeholder-white/80"
            onChange={(e) => setmessage(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#00ADB5] text-white py-3 rounded-lg mt-4 hover:bg-[#007b83] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
