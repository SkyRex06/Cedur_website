import React from 'react';
import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Mission-Driven',
      description: 'We exist to simplify HR operations and empower businesses to focus on growth and people.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'People-First',
      description: 'Every feature we build is designed with the end user in mind, ensuring intuitive experiences.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for the highest standards in product quality, security, and customer service.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'Building solutions that work for businesses worldwide, regardless of size or industry.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Cedur
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're on a mission to revolutionize HR management by making it simple, 
            intelligent, and accessible for businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded with the vision of simplifying complex HR processes, Cedur emerged from the 
              recognition that businesses spend too much time on administrative tasks instead of 
              focusing on their people and growth. Our team of experienced developers and HR 
              professionals came together to create a platform that automates the mundane while 
              empowering the meaningful.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section - Updated with Motto and Illustrated Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Our Motto: Outthink, Outwork, Outlast</h2>
            <div className="text-2xl font-semibold text-gray-800 mb-6">We are driven by our values<span className="font-normal">–</span></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <span className="text-6xl mb-4">🏪</span>
              <span className="font-semibold text-lg mb-1">Championing Small Businesses</span>
              <span className="text-gray-700 text-lg">Small businesses are the heartbeat of India's economy, and we exist to empower them.</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-6xl mb-4">🤝</span>
              <span className="font-semibold text-lg mb-1">Service Above Self</span>
              <span className="text-gray-700 text-lg">We put our customers first, always striving to deliver with a service mindset.</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-6xl mb-4">📈</span>
              <span className="font-semibold text-lg mb-1">Relentless Ambition</span>
              <span className="text-gray-700 text-lg">We dream big, set bold goals, and work tirelessly to turn them into reality.</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-6xl mb-4">❤️</span>
              <span className="font-semibold text-lg mb-1">Humble Growth</span>
              <span className="text-gray-700 text-lg">We celebrate collective wins and value humility over individual accolades.</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-6xl mb-4">💸</span>
              <span className="font-semibold text-lg mb-1">Mastery in Action</span>
              <span className="text-gray-700 text-lg">We take pride in our expertise and are committed to continuous learning.</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-6xl mb-4">🧑‍🤝‍🧑</span>
              <span className="font-semibold text-lg mb-1">Forging Greatness Together</span>
              <span className="text-gray-700 text-lg">We trust the process, support each other, and scale new heights as a team.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Be part of the HR revolution and help us build the future of workforce management.
          </p>
          <button
            className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-medium hover:shadow-xl transition-all duration-200 hover:scale-105"
            onClick={() => window.location.href = '/signup'}
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
