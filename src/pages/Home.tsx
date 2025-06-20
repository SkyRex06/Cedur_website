import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Clock, DollarSign, Shield, BarChart3, Zap } from 'lucide-react';

const Home = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for theme preference
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const features = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Payroll Management',
      description: 'Automated payroll processing with compliance and tax calculations built-in.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Employee Records',
      description: 'Centralized employee database with easy access to all HR information.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Attendance Tracking',
      description: 'Real-time attendance monitoring with automated reporting and analytics.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Compliance Management',
      description: 'Stay compliant with local labor laws and regulations automatically.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Analytics & Reports',
      description: 'Comprehensive insights into your workforce with detailed reporting.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Workflow Automation',
      description: 'Streamline HR processes with intelligent automation and workflows.'
    }
  ];

  // FAQ data for accordion
  const faqs = [
    {
      question: 'How do I get started with Cedur?',
      answer:
        'Simply create a free account, choose your plan, and add your company details. Our onboarding process will guide you step by step.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Yes, we use industry-standard security practices and encryption to keep your data safe and private at all times.',
    },
    {
      question: 'Can I upgrade or downgrade my plan later?',
      answer:
        'Absolutely! You can change your plan at any time from your account dashboard with no hassle.',
    },
    {
      question: 'Do you offer customer support?',
      answer:
        'Yes, our support team is available via chat, email, and phone to help you with any questions or issues.',
    },
  ];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Streamline Your HR Processes
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                with Intelligent Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Simplify payroll, manage employee records, track attendance, and automate HR workflows 
              in one comprehensive platform. Focus on what matters most - your people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/signup"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2"
              >
                Get Started
              </Link>
              <a
                href="https://www.youtube.com/watch?v=ef4H1tpr_78" // Replace with your actual demo video link
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
              >
                Demo Video
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Modern HR
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform handles all your HR needs, from recruitment to retirement, 
              giving your team more time to focus on strategic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 py-20 overflow-hidden">
        {/* Decorative blurred shapes */}
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-white/10 rounded-full blur-3xl z-0"></div>
        <div className="absolute -bottom-24 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl z-0"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Ready to Transform Your HR Operations?
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
            You're three steps away from easy, automated payroll.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center shadow-lg border border-white/20 hover:scale-105 transition-transform">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-16 h-16 flex items-center justify-center rounded-full mb-4 shadow-md">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="font-bold text-lg text-white mb-2">Create an account</div>
              <div className="text-purple-100 text-sm">It's free to sign up. You'll pick your plan and add your company details.</div>
            </div>
            {/* Step 2 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center shadow-lg border border-white/20 hover:scale-105 transition-transform">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-16 h-16 flex items-center justify-center rounded-full mb-4 shadow-md">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="font-bold text-lg text-white mb-2">Add your people</div>
              <div className="text-purple-100 text-sm">Add your employee details. They can even self-onboard to save you time.</div>
            </div>
            {/* Step 3 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center shadow-lg border border-white/20 hover:scale-105 transition-transform">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-16 h-16 flex items-center justify-center rounded-full mb-4 shadow-md">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div className="font-bold text-lg text-white mb-2">Run your first Payroll</div>
              <div className="text-purple-100 text-sm">Once we have your employee and tax info, you can run payroll in just a few clicks.</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
            <button
              className="bg-gradient-to-r from-purple-700 to-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow hover:opacity-90 transition-colors text-lg border border-white/30"
              onClick={() => window.open('tel:+918595921201', '_self')}
            >
              Call us 
            </button>
            <Link
              to="/signup"
              className="border border-white text-white py-3 px-8 rounded-lg text-lg font-medium hover:bg-white/10 transition-all duration-200"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>

      {/* Compact FAQ Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-lg border border-gray-200 bg-gray-50">
                <button
                  className="w-full flex justify-between items-center p-5 focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-semibold text-lg text-purple-700 text-left">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-purple-500 transform transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === idx && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-5 pb-5 text-gray-700 animate-fade-in"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
