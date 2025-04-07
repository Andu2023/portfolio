import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({ name: '', email: '', message: '' }); // Clear previous errors

    let formIsValid = true;
    const newErrors = { name: '', email: '', message: '' };

    // Validate Name
    if (!form.name) {
      newErrors.name = 'Name is required.';
      formIsValid = false;
    }

    // Validate Email
    if (!form.email) {
      newErrors.email = 'Email is required.';
      formIsValid = false;
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
      formIsValid = false;
    }

    // Validate Message
    if (!form.message) {
      newErrors.message = 'Message is required.';
      formIsValid = false;
    }

    if (!formIsValid) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    // Send the email using emailjs
    emailjs
      .send(
        'service_re9ll8a',
        'template_ohxzwqd',
        {
          from_name: form.name,
          to_name: 'andualem',
          from_email: form.email,
          to_email: 'andy2023user@gmail.com',
          message: form.message,
        },
        'TDcHEervFaq02RtIL'
      )
      .then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');
        setForm({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert('Feature not available. Please try again later.');
      });
  };

  return (
    <div className="bg-gray-950 xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <h3 className={styles.sectionHeadText}>Contact .</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          {/* Name Field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-gray-900 py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
            {errors.name && <div className="text-red-500 text-sm mt-2">{errors.name}</div>}
          </label>

          {/* Email Field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-gray-900 py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
            {errors.email && <div className="text-red-500 text-sm mt-2">{errors.email}</div>}
          </label>

          {/* Message Field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-gray-900 py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
            {errors.message && <div className="text-red-500 text-sm mt-2">{errors.message}</div>}
          </label>

          {/* Submit Button */}
          <button
  type="submit"
  className="bg-gray-900 cursor-pointer py-6  outline-none w-full  text-white font-bold  ">
  {loading ? 'Sending...' : 'Send'}
</button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
