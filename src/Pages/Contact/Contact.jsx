import React from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { toast } from 'react-toastify';

const Contact = () => {
  const axiosPublic=useAxiosPublic()

  const handleSubmit= e=>{
          e.preventDefault();
          const form = e.target;
         const email=form.email.value;
         const message=form.message.value;
         const data={email,message}
         console.log(data);
         
          axiosPublic.post('/contact', data)
              .then(() => {
               
                toast.success('Data submitted successfully');
              })
              .catch(() => {
                  toast.error('Error submitting data');
              });
        }
    return (
        <div>
             <div className="bg-gray-50 min-h-screen py-12 mt-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mt-2"></div>
        <p className="text-gray-600 mt-4">
          We'd love to hear from you! Send us your thoughts, feedback, or questions.
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6 mb-10 flex flex-col  items-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Our Address</h2>
          <p className="text-gray-600">
            1234 Dummy Street, <br />
            DreamCity, DreamState, 123456 <br />
            Email: <span className="text-blue-500">support@dummycompany.com</span> <br />
            Phone: +1 (234) 567-890
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name='email'
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                name='message'
                placeholder="Write your message here"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Contact;