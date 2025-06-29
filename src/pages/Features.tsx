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
      <section className="bg-gradient-to-br from-teal-700 via-blue-700 to-blue-400 py-20">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {mainFeatures.map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white via-teal-50 to-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 border border-gray-100 group flex flex-col h-full">
                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-teal-600 via-blue-500 to-yellow-400 shadow-lg group-hover:scale-105 transition-transform">
                  {React.cloneElement(feature.icon, { className: 'w-8 h-8 text-white drop-shadow' })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-teal-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base mb-4">
                  {feature.description}
                </p>
                <ul className="list-none space-y-2 mb-4">
                  {feature.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-yellow-100 text-teal-700"><CheckCircle className="w-4 h-4" /></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Gallery Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">See Cedur in Action</h2>
            <p className="text-lg text-purple-700">Visual walkthrough of Cedur's core features and workflows</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
              <img src="/image2.png" alt="Salary Breakdown Modal" className="rounded-lg border mb-4 max-h-96 object-contain" />
              <h3 className="font-semibold text-purple-800 mb-2">Detailed Salary Breakdown</h3>
              <p className="text-gray-700 text-center">View comprehensive salary structures, allowances, deductions, and CTC for each employee in a clean, printable format.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
              <img src="/image3.png" alt="Add Employee Form" className="rounded-lg border mb-4 max-h-96 object-contain" />
              <h3 className="font-semibold text-purple-800 mb-2">Smart Employee Onboarding</h3>
              <p className="text-gray-700 text-center">Easily onboard new employees with a guided, multi-field form capturing all essential details and benefits.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
              <img src="/image4.png" alt="Attendance Marking" className="rounded-lg border mb-4 max-h-96 object-contain" />
              <h3 className="font-semibold text-purple-800 mb-2">Attendance Management</h3>
              <p className="text-gray-700 text-center">Mark and track employee attendance with category selection, batch actions, and real-time updates.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
              <img src="/image5.png" alt="Payroll Processing Table" className="rounded-lg border mb-4 max-h-96 object-contain" />
              <h3 className="font-semibold text-purple-800 mb-2">Payroll Processing</h3>
              <p className="text-gray-700 text-center">Process payroll for all employees with a detailed breakdown of pay, deductions, and net salary, exportable for compliance and reporting.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
