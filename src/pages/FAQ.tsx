
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          question: 'How do I get started with Cedur?',
          answer: 'Getting started is simple! Sign up for a free 14-day trial, and our onboarding team will guide you through the setup process. We provide comprehensive training and support to ensure a smooth transition.'
        },
        {
          question: 'Is there a free trial available?',
          answer: 'Yes! We offer a 14-day free trial for all plans. No credit card required. You can explore all features and see how Cedur fits your organization\'s needs.'
        },
        {
          question: 'How long does implementation take?',
          answer: 'Implementation typically takes 1-2 weeks for small to medium businesses. For enterprise clients, it can take 4-6 weeks depending on complexity and customization requirements.'
        }
      ]
    },
    {
      category: 'Features & Functionality',
      questions: [
        {
          question: 'Can Cedur handle multi-location payroll?',
          answer: 'Absolutely! Cedur supports multi-location payroll with different tax jurisdictions, currencies, and compliance requirements. You can manage all locations from a single dashboard.'
        },
        {
          question: 'Does Cedur integrate with other software?',
          answer: 'Yes, Cedur integrates with popular accounting software, time tracking tools, and other business applications. We offer API access for custom integrations as well.'
        },
        {
          question: 'Can I customize workflows and approval processes?',
          answer: 'Yes, our Professional and Enterprise plans include custom workflow capabilities. You can set up approval chains, automated notifications, and custom business rules.'
        }
      ]
    },
    {
      category: 'Security & Compliance',
      questions: [
        {
          question: 'How secure is my data with Cedur?',
          answer: 'Security is our top priority. We use enterprise-grade encryption, regular security audits, and comply with SOC 2 Type II standards. Your data is stored in secure, redundant data centers.'
        },
        {
          question: 'Is Cedur compliant with GDPR and other regulations?',
          answer: 'Yes, Cedur is fully GDPR compliant and adheres to various international data protection regulations. We also help you maintain compliance with local labor laws and tax regulations.'
        },
        {
          question: 'What happens to my data if I cancel?',
          answer: 'You retain full ownership of your data. We provide export tools and will help you migrate your data. After cancellation, we securely delete your data according to our retention policy.'
        }
      ]
    },
    {
      category: 'Pricing & Support',
      questions: [
        {
          question: 'How is pricing calculated?',
          answer: 'Pricing is based on the number of active employees per month. You only pay for active employees, and you can add or remove employees as needed without penalties.'
        },
        {
          question: 'What support is available?',
          answer: 'We offer email and chat support for all plans, with priority support for Professional customers and dedicated support managers for Enterprise clients. We also provide extensive documentation and training resources.'
        },
        {
          question: 'Can I change my plan at any time?',
          answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated accordingly.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const index = categoryIndex * 100 + questionIndex;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about Cedur's features, pricing, security, 
            and how we can help streamline your HR operations.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const index = categoryIndex * 100 + questionIndex;
                  const isOpen = openIndex === index;
                  
                  return (
                    <div
                      key={questionIndex}
                      className="bg-gray-50 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                      >
                        <span className="text-lg font-medium text-gray-900">
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our support team is here to help. Get in touch and we'll respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105">
              Contact Support
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-all duration-200">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your HR?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start your free trial today and see how Cedur can streamline your HR operations.
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-medium hover:shadow-xl transition-all duration-200 hover:scale-105">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
