import React from 'react';
import { CheckCircle, Users, Clock, DollarSign, Shield, BarChart3, Zap, FileText, Calendar, Settings } from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Advanced Payroll Management',
      description: 'Automated payroll processing with multi-currency support, tax calculations, and compliance management.',
      features: ['Automated tax calculations', 'Multi-currency support', 'Direct deposit integration', 'Payslip generation']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Employee Lifecycle Management',
      description: 'Comprehensive employee database with onboarding, performance tracking, and offboarding workflows.',
      features: ['Digital onboarding', 'Performance reviews', 'Career development', 'Exit interviews']
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Time & Attendance Tracking',
      description: 'Real-time attendance monitoring with flexible scheduling and overtime management.',
      features: ['Biometric integration', 'Flexible schedules', 'Overtime tracking', 'Leave management']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Analytics & Reporting',
      description: 'Comprehensive workforce analytics with customizable reports and real-time insights.',
      features: ['Custom dashboards', 'Predictive analytics', 'Compliance reports', 'Export capabilities']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Compliance & Security',
      description: 'Built-in compliance management with enterprise-grade security and data protection.',
      features: ['GDPR compliance', 'Data encryption', 'Audit trails', 'Role-based access']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Workflow Automation',
      description: 'Intelligent automation for repetitive HR tasks and approval workflows.',
      features: ['Approval workflows', 'Task automation', 'Email notifications', 'Integration APIs']
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for Modern HR Teams
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how Cedur's comprehensive feature set can transform your HR operations 
            and empower your workforce with intelligent automation.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-200">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Gallery Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">See Cedur in Action</h2>
            <p className="text-lg text-blue-700">Visual walkthrough of Cedur's core features and workflows</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
              <img src="/image2.png" alt="Salary Breakdown Modal" className="rounded-lg border mb-4 max-h-96 object-contain" />
              <h3 className="font-semibold text-blue-800 mb-2">Detailed Salary Breakdown</h3>
              <p className="text-gray-700 text-center">View comprehensive salary structures, allowances, deductions, and CTC for each employee in a clean, printable format.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
              <img src="/image3.png" alt="Add Employee Form" className="rounded-lg border mb-4 max-h-96 object-contain" />
              <h3 className="font-semibold text-blue-800 mb-2">Smart Employee Onboarding</h3>
              <p className="text-gray-700 text-center">Easily onboard new employees with a guided, multi-field form capturing all essential details and benefits.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
              <img src="/image4.png" alt="Attendance Marking" className="rounded-lg border mb-4 max-h-96 object-contain" />
              <h3 className="font-semibold text-blue-800 mb-2">Attendance Management</h3>
              <p className="text-gray-700 text-center">Mark and track employee attendance with category selection, batch actions, and real-time updates.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
              <img src="/image5.png" alt="Payroll Processing Table" className="rounded-lg border mb-4 max-h-96 object-contain" />
              <h3 className="font-semibold text-blue-800 mb-2">Payroll Processing</h3>
              <p className="text-gray-700 text-center">Process payroll for all employees with a detailed breakdown of pay, deductions, and net salary, exportable for compliance and reporting.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
