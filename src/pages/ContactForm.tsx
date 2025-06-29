import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.firstName + ' ' + form.lastName,
          email: form.email,
          message: form.message
        })
      });
      if (!res.ok) throw new Error('Failed to send message.');
      setSubmitted(true);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    }
  };

  if (submitted) {
    return (
      <div className="text-green-600 font-semibold text-center py-8">
        Thank you for reaching out! We have received your message and will get back to you soon.
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent bg-white text-gray-900 placeholder-gray-400"
            placeholder="John"
            required
            autoComplete="off"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent bg-white text-gray-900 placeholder-gray-400"
            placeholder="Doe"
            required
            autoComplete="off"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent bg-white text-gray-900 placeholder-gray-400"
          placeholder="john@example.com"
          required
          autoComplete="off"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent bg-white text-gray-900 placeholder-gray-400"
          placeholder="Your Company"
          autoComplete="off"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
        <textarea
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent bg-white text-gray-900 placeholder-gray-400"
          placeholder="Tell us how we can help you..."
          required
          autoComplete="off"
        ></textarea>
      </div>
      {error && <div className="text-red-600 text-sm">{error}</div>}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
