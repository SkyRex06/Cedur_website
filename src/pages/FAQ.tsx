import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        question: 'What is Cedur?',
        answer:
          'Cedur is a comprehensive cloud-based payroll and people management platform that automates payroll processing, employee data, attendance, leave tracking, tax compliance, and payslip generation for businesses of all sizes.'  
      },
      {
        question: 'How do I get started with Cedur?',
        answer:
          'Simply sign up for an account, add your company and employee details, and you’re ready to start. Onboarding is fast and intuitive—some customers are up and running in just minutes.'  
      },
      {
        question: 'Is there a free trial?',
        answer:
          'Yes! You can start with a free plan (up to 10 employees) to explore Cedur’s full capabilities—no credit card required.'  
      }
    ]
  },
  {
    category: 'Features & Functionality',
    questions: [
      {
        question: 'What key features does Cedur offer?',
        answer:
          'Cedur includes intuitive onboarding, attendance management, robust payroll with tax and statutory compliance, automated payslip generation, employee self-service, and detailed analytics/reporting.'  
      },
      {
        question: 'Does Cedur calculate payroll automatically?',
        answer:
          'Yes. Cedur syncs attendance, paid leaves, holidays, and statutory deductions to calculate payroll and tax withholding in one click.'  
      },
      {
        question: 'Can I manage different pay structures?',
        answer:
          'Absolutely. You can mix hourly, salaried employees, as well as overtime, bonuses, and commissions—all supported by Cedur’s flexible system.'  
      },
      {
        question: 'Is attendance tracking included?',
        answer:
          'Yes. Cedur supports manual marking and bulk uploads for attendance, along with leave management and holiday tracking.'  
      }
    ]
  },
  {
    category: 'Integrations & Reporting',
    questions: [
      {
        question: 'Does Cedur integrate with other systems?',
        answer:
          'Cedur integrates seamlessly with accounting, time‑tracking, and benefits systems. API access is available for custom integrations.'  
      },
      {
        question: 'Can I generate custom reports?',
        answer:
          'Yes. You can create tailored payroll, attendance, tax compliance, and employee analytics reports using filters, sorting, and grouping.'  
      }
    ]
  },
  {
    category: 'Compliance & Security',
    questions: [
      {
        question: 'Is Cedur compliant with statutory regulations?',
        answer:
          'Yes. Cedur stays updated with Indian labor, tax, PF, ESI, professional tax and other regulations to ensure full compliance.'  
      },
      {
        question: 'How secure is my data?',
        answer:
          'Security is a top priority: enterprise-level encryption, access controls, regular backups, and GDPR-compliant storage protect your data.'  
      }
    ]
  },
  {
    category: 'Plans & Support',
    questions: [
      {
        question: 'How is pricing structured?',
        answer:
          'Cedur offers a free plan for up to 10 employees and paid plans (Basic, Growth, Veteran) based on employee count, features, and support levels.'  
      },
      {
        question: 'What support options are available?',
        answer:
          'Support includes email and chat for all plans; Growth and above include phone support, and Enterprise customers get a dedicated account manager.'  
      },
      {
        question: 'Can I upgrade or downgrade anytime?',
        answer:
          'Yes. You can change plans at any time—billing is prorated accordingly to fit your organization’s needs.'  
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
            <button
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Support
            </button>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default FAQ;
