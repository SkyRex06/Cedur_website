import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

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
    setOpenIndex(openIndex === index.toString() ? null : index.toString());
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-700 via-blue-700 to-blue-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about Cedur's platform, features, and support.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((cat, catIdx) => (
            <div key={catIdx} className="mb-10">
              <h2 className="text-2xl font-bold text-teal-700 mb-6">{cat.category}</h2>
              <div className="space-y-4">
                {cat.questions.map((q, qIdx) => {
                  const idx = `${catIdx}-${qIdx}`;
                  const isOpen = openIndex === idx;
                  return (
                    <div key={idx} className="rounded-2xl border border-blue-100 bg-white shadow-md">
                      <button
                        className="w-full flex justify-between items-center p-6 focus:outline-none group"
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${idx}`}
                      >
                        <span className="font-semibold text-lg text-blue-700 text-left">{q.question}</span>
                        <span className="ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-teal-700 group-hover:bg-yellow-200 transition">
                          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </span>
                      </button>
                      {isOpen && (
                        <div
                          id={`faq-answer-${idx}`}
                          className="px-6 pb-6 text-gray-700 animate-fade-in"
                        >
                          {q.answer}
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
    </div>
  );
};

export default FAQ;
