import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from '../hoc';
import { FaLinkedinIn, FaPhone, FaStar } from 'react-icons/fa';
import { slideIn } from '../utils/motion';
import {  FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({ name: '', email: '', message: '' });

    let formIsValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!form.name) {
      newErrors.name = 'Name is required.';
      formIsValid = false;
    }

    if (!form.email) {
      newErrors.email = 'Email is required.';
      formIsValid = false;
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
      formIsValid = false;
    }

    if (!form.message) {
      newErrors.message = 'Message is required.';
      formIsValid = false;
    }

    if (!formIsValid) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    emailjs
      .send(
        'service_re9ll8a',
        'template_ohxzwqd',
        {
          from_name: form.name,
          to_name: 'Andualem',
          from_email: form.email,
          to_email: 'andy2023user@gmail.com',
          message: form.message,
        },
        'TDcHEervFaq02RtIL'
      )
      .then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert('Feature not available. Please try again later.');
      });
  };

  return (
    <div className="xl:mt-12 max-w-7xl mx-auto px-4 md:px-20 ">
       <motion.div
               
                className="text-center flex flex-col items-center justify-center"
              >
                <h2 className="text-4xl font-bold text-sky-950">CONTACT ME.</h2>
      
                {/* Decorative line with star */}
                <div className="flex items-center gap-4 mt-4">
                  <div className="h-[2px] w-20 bg-gray-400 rounded-full"></div>
                  <FaStar className="text-yellow-500 text-xl" />
                  <div className="h-[2px] w-20 bg-gray-400 rounded-full"></div>
                </div>
              </motion.div>

      <div className="mt-10 flex flex-col lg:flex-row gap-10">
        {/* Contact Form */}
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="bg-white shadow-lg rounded-2xl p-8 flex-1"
        >
        <h4 className="text-xl font-semibold text-gray-800 text-center mb-4">Message</h4>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
            <label className="flex flex-col">
              <span className="text-black font-medium mb-2">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-gray-100 py-3 px-4 rounded-lg border border-gray-300 outline-none"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </label>

            <label className="flex flex-col">
              <span className="text-black font-medium mb-2">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-gray-100 py-3 px-4 rounded-lg border border-gray-300 outline-none"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </label>

            <label className="flex flex-col">
              <span className="text-black font-medium mb-2">Your Message</span>
              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-gray-100 py-3 px-4 rounded-lg border border-gray-300 outline-none"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </label>

            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>

        {/* Info Card */}
        <motion.div
          variants={slideIn('right', 'tween', 0.3, 1)}
          className="bg-white shadow-lg rounded-2xl p-8 flex-1 flex flex-col gap-5"
        >
          <h4 className="text-xl font-semibold text-gray-800">Get in Touch</h4>
          <div className="flex items-center gap-3 text-gray-700">
            <FaLinkedinIn className="text-blue-500 text-xl" />
            <a href="www.linkedin.com/in/andualem-assefa" target="_blank" rel="noopener noreferrer">
              andualem-assefa
            </a>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FiMail className="text-red-500 text-xl" />
            <a href="mailto:andy2023user@gmail.com">andy2023user@gmail.com</a>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FaMapMarkerAlt className="text-green-600 text-xl" />
            <span>Addis Ababa, Ethiopia</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FaGithub className="text-black text-xl" />
            <a href="https://github.com/Andu2023" target="_blank" rel="noopener noreferrer">
              @Andu
            </a>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FaPhone className="text-black text-xl" />
            <a href="" target="_blank" rel="noopener noreferrer">
             +251938698149
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
