import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import Logo from '../../assets/offical_logo.png';

const ContactForm = () => {
  return (
    <div className="bg-[#fff0e3ff] min-h-screen flex items-center justify-center mt-1">
      <div className="bg-[#393d3cff] text-white py-8 px-6 sm:px-12 rounded-lg" style={{ marginTop: '13vh', borderRadius: '20px', width: '90vw', maxWidth: '600px', marginBottom: '13vh' }}>
        <div className="flex items-center justify-center mb-6">
          <div className="relative bg-[#393d3cff] rounded-full p-4 mb-3"
           style={{ top: '2vh', 
           boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            padding: '27px' }}>
            <img src={Logo} alt="Logo" width={"50px"} height={"50px"} />
          </div>
        </div>
        <h2 className="text-3xl font-semibold text-center mb-4 mt-10 text-white">Contact Us</h2>
        <p className="text-gray-400 text-center text-lg mb-8">Got something to say? Let us know!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <input
              className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
              type="text"
              placeholder="First Name *"
              required
            />
          </div>
          <div>
            <input
              className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
              type="text"
              placeholder="Last Name *"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <input
              className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
              type="email"
              placeholder="Email Address *"
              required
            />
          </div>
          <div>
            <input
              className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
              type="tel"
              placeholder="Contact Number *"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <textarea
            className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
            rows={4}
            placeholder="Tell us your thoughts..."
            required
          ></textarea>
        </div>

        <div className="flex flex-col items-center mb-3">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline mb-6 transition duration-300 w-full"
            type="submit"
          >
            Get In Touch
          </button>
          <hr className="w-full h-1 bg-white z-2 relative" />
          <p className="text-white text-sm mb-2 text-center px-10" 
          style={{ padding: '10px', border: '1px solid white', borderRadius: '20px',
           backgroundColor: '#1a1821ff', zIndex: '5', width: '15vw', minWidth: '100px',
            position: 'relative',top:'-20px' }}>or contact us via</p>
          <div className="flex flex-col items-center mb-1 mt-4">
            <div className="flex items-center mb-2">
              <FaEnvelope className="text-gray-400 mr-2" />
              <span className="text-gray-400 text-sm">customersupport@vigybag.in</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-gray-400 mr-2" />
              <span className="text-gray-400 text-sm">+91 9123456789</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
