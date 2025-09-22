import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div
      id="Contact"
      className="min-h-screen flex items-center justify-center p-6 flex-col"
    >
      <h2 className="text-4xl font-bold text-white text-center mb-4 tracking-wide uppercase">
        Let’s Work <span className="text-[#00ADB5]">Together</span>
      </h2>
      <p className="text-gray-300 text-center max-w-2xl mb-8">
        Looking for a developer to bring your ideas to life? Whether it’s a
        website, app, or design — I’d love to collaborate with you and build
        something impactful. Get in touch today!
      </p>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Phone */}
        <a
          href="tel:+917055338548"
          className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 
          bg-[#00ADB5] p-4 rounded-lg shadow-lg hover:scale-105 
          transition-transform duration-300 text-center sm:text-left"
        >
          <FaPhone className="text-white text-2xl" />
          <div>
            <h4 className="text-lg font-semibold text-white">Call Me</h4>
            <p className="text-white opacity-80">+91 7055338548</p>
          </div>
        </a>

        {/* Email */}
        <a
          href="mailto:pankajjoshi3919@gmail.com"
          className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 
          bg-[#00ADB5] p-4 rounded-lg shadow-lg hover:scale-105 
          transition-transform duration-300 text-center sm:text-left"
        >
          <FaEnvelope className="text-white text-2xl" />
          <div>
            <h4 className="text-lg font-semibold text-white">Email Me</h4>
            <p className="text-white opacity-80">pankajjoshi3919@gmail.com</p>
          </div>
        </a>

        {/* Location */}
        <div
          className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 
          bg-[#00ADB5] p-4 rounded-lg md:col-span-2 shadow-lg hover:scale-105 
          transition-transform duration-300 text-center sm:text-left"
        >
          <FaMapMarkerAlt className="text-white text-2xl" />
          <div>
            <h4 className="text-lg font-semibold text-white">Location</h4>
            <p className="text-white opacity-80">Noida, Uttar Pradesh, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
