import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto glass-effect p-8 rounded-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-700 bg-white bg-opacity-50 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-700 bg-white bg-opacity-50 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              placeholder="your@email.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 text-gray-700 bg-white bg-opacity-50 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center"
          >
            Send Message <Send size={18} className="ml-2" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;