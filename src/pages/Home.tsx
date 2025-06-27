import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Clock, DollarSign, Shield, BarChart3, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import '../styles/theme-bg.css';

const Home = () => {
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
  const [showDemoModal, setShowDemoModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="relative pt-32 pb-20 bg-white flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-black text-center leading-tight mb-6 font-sans tracking-tight" style={{ fontFamily: 'Poppins, Inter, Montserrat, Arial, sans-serif', letterSpacing: '-0.03em' }}>
            Welcome to <span className="text-purple-700 ">Cedur</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 text-center mb-10 max-w-2xl">
            Automate Payroll & HR , Empowering SMBs, Simplify Growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/signup"
              className="bg-purple-700 hover:bg-purple-800 text-white px-10 py-4 rounded-lg text-lg font-semibold shadow transition-all duration-200"
            >
              Create Account
            </Link>
            <button
              className="border border-black text-black px-10 py-4 rounded-lg text-lg font-semibold bg-white hover:bg-gray-100 transition-all duration-200"
              onClick={() => setShowDemoModal(true)}
            >
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Dashboard Showcase Section */}
      <section className="py-12 flex justify-center items-center bg-gradient-to-br from-white via-purple-50 to-white">
        <div className="flex justify-center items-center w-full">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex items-center justify-center w-full max-w-6xl">
            <img src="/image.png" alt="Cedur Dashboard Preview" className="rounded-xl w-full max-w-6xl h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Payroll Smart Technology Section (Purple Theme) */}
      <section className="py-16 flex flex-col md:flex-row items-center justify-center bg-white">
        {/* Left Side */}
        <div className="flex-[2] max-w-4xl px-24 md:px-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">HR & payroll made effortless for growing businesses.</h2>
          <div className="divide-y divide-gray-200 border-t border-b border-gray-200 mb-6">
            {/* Accordion Item 1 */}
            <details className="py-4 group" open>
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-black group-open:text-purple-700">
                Payroll in just a few clicks
                <span className="ml-2 text-purple-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-2 text-black text-base">Create, approve, and send payroll with auto-calculated deductions.</div>
            </details>
            {/* Accordion Item 2 */}
            <details className="py-4 group">
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-black group-open:text-purple-700">
                Sync attendance & leaves
                <span className="ml-2 text-purple-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-2 text-black text-base">Auto-sync leave balances and punch-in data with monthly salary runs.</div>
            </details>
            {/* Accordion Item 3 */}
            <details className="py-4 group">
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-black group-open:text-purple-700">
                Tax-ready & compliant
                <span className="ml-2 text-purple-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-2 text-black text-base">ESI,PF,PT,TDS — handled for every employee, every time.</div>
            </details>
            <details className="py-4 group">
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-black group-open:text-purple-700">
                Employee self-service portal
                <span className="ml-2 text-purple-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-2 text-black text-base">Payslips, leave status, earnings — everything your team needs, anytime..</div>
            </details>
          </div>
          <p className="text-black mb-4">Managing payroll compliance shouldn’t be a headache. Cedur automates PF, ESI, TDS, and more — so you don’t miss a thing.y compliant.</p>
          <Link to="/about" className="text-purple-700 font-medium underline hover:text-purple-900 mb-6 inline-block">Learn more about Cedur</Link><br />
          
        </div>
        {/* Right Side */}
        <div className="flex-[0.6] flex justify-center w-full mt-12 md:mt-0">
          <div className="relative bg-neutral-900 rounded-[2.2rem] shadow-2xl flex items-center justify-center border-4 border-neutral-800 overflow-hidden p-0"
            style={{ width: '300px', height: '620px' }}>
            {/* Camera Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-2 bg-neutral-700 rounded-b-xl z-10"></div>
            <img 
              src="/phone image.jpg" 
              alt="Payroll Mobile Preview" 
              className="block w-[272px] h-[592px] object-contain m-0 rounded-[2rem] bg-black"
              style={{ boxShadow: '0 2px 16px 0 rgba(0,0,0,0.08)', margin: '12px' }}
            />
          </div>
        </div>
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
                className="bg-gradient-to-br from-white via-purple-50 to-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 border border-gray-100 group"
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 shadow-lg group-hover:scale-105 transition-transform">
                  {React.cloneElement(feature.icon as React.ReactElement, { className: 'w-8 h-8 text-white drop-shadow' })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-purple-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section (Modern, 4 Cards, Purple Price & Button, Description as is) */}
      <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            All the payroll and HR essentials you need—no surprises, no extra charges. Choose the plan that fits your team and scale with confidence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Free Plan */}
            <div className="relative bg-white/90 rounded-3xl flex flex-col items-stretch shadow-2xl border border-purple-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-200 group overflow-hidden">
              <div className="flex flex-col flex-1 px-8 py-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block bg-purple-100 text-purple-700 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">Free</span>
                </div>
                <div className="text-4xl font-extrabold text-purple-700 mb-2">₹0 <span className="text-base font-medium text-purple-400">/yr</span></div>
                <div className="text-sm text-gray-500 mb-4">Up to 10 Employees</div>
                <div className="text-base text-gray-700 mb-8 font-medium">Get started with payroll, onboarding, and basic HR tools at zero cost.</div>
                <div className="mt-auto flex justify-center">
                  <Link to="/pricing" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-2.5 px-7 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all text-base focus:outline-none focus:ring-2 focus:ring-purple-400">
                    Details
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Basic Plan */}
            <div className="relative bg-white/90 rounded-3xl flex flex-col items-stretch shadow-2xl border-2 border-purple-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-200 group overflow-visible">
              <div className="absolute left-1/2 -translate-x-1/2 -top-4 z-10 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-bold rounded-full py-1 px-4 shadow text-xs tracking-wide uppercase border-2 border-white ring-2 ring-purple-300">Recommended</div>
              <div className="flex flex-col flex-1 px-8 py-10 mt-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block bg-purple-100 text-purple-700 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">Basic</span>
                </div>
                <div className="text-4xl font-extrabold text-purple-700 mb-2">₹23,999 <span className="text-base font-medium text-purple-400">/yr</span></div>
                <div className="text-sm text-gray-500 mb-4">Up to 25 Employees</div>
                <div className="text-base text-gray-700 mb-8 font-medium">All essentials for growing teams, with advanced analytics and reporting.</div>
                <div className="mt-auto flex justify-center">
                  <Link to="/pricing" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-2.5 px-7 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all text-base focus:outline-none focus:ring-2 focus:ring-purple-400">
                    Details
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Growth Plan */}
            <div className="relative bg-white/90 rounded-3xl flex flex-col items-stretch shadow-2xl border border-blue-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-200 group overflow-hidden">
              <div className="flex flex-col flex-1 px-8 py-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block bg-purple-100 text-purple-700 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">Growth</span>
                </div>
                <div className="text-4xl font-extrabold text-purple-700 mb-2">₹39,999 <span className="text-base font-medium text-purple-400">/yr</span></div>
                <div className="text-sm text-gray-500 mb-4">Up to 50 Employees</div>
                <div className="text-base text-gray-700 mb-8 font-medium">Built-in time tracking, call support, and bulk import/export for scaling teams.</div>
                <div className="mt-auto flex justify-center">
                  <Link to="/pricing" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-2.5 px-7 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all text-base focus:outline-none focus:ring-2 focus:ring-purple-400">
                    Details
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Veteran Plan */}
            <div className="relative bg-white/90 rounded-3xl flex flex-col items-stretch shadow-2xl border border-purple-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-200 group overflow-hidden">
              <div className="flex flex-col flex-1 px-8 py-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block bg-purple-100 text-purple-700 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">Veteran</span>
                </div>
                <div className="text-4xl font-extrabold text-purple-700 mb-2">₹69,999 <span className="text-base font-medium text-purple-400">/yr</span></div>
                <div className="text-sm text-gray-500 mb-4">Up to 100 Employees</div>
                <div className="text-base text-gray-700 mb-8 font-medium">All features plus priority support and dedicated onboarding for large teams.</div>
                <div className="mt-auto flex justify-center">
                  <Link to="/pricing" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-2.5 px-7 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all text-base focus:outline-none focus:ring-2 focus:ring-purple-400">
                    Details
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
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

      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              onClick={() => setShowDemoModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">Request a Demo</h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.youtube.com/watch?v=ef4H1tpr_78" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-lg bg-purple-700 text-white font-semibold text-lg hover:bg-purple-800 transition"
              >
                Watch Video Now
              </a>
              <Link
                to="/contact"
                className="w-full text-center py-3 rounded-lg border border-purple-700 text-purple-700 font-semibold text-lg hover:bg-purple-50 transition"
                onClick={() => setShowDemoModal(false)}
              >
                Contact Us for Application Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
