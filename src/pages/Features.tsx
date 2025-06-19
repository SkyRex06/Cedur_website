
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

  const additionalFeatures = [
    { icon: <FileText className="w-5 h-5" />, title: 'Document Management', description: 'Centralized document storage and management' },
    { icon: <Calendar className="w-5 h-5" />, title: 'Event Scheduling', description: 'Schedule meetings, interviews, and events' },
    { icon: <Settings className="w-5 h-5" />, title: 'System Integration', description: 'Connect with existing tools and systems' },
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

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Plus Many More Features</h2>
            <p className="text-xl text-gray-600">Comprehensive tools to cover all your HR needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience the Full Power of Cedur
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Ready to see how these features can transform your HR operations?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-medium hover:shadow-xl transition-all duration-200 hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/10 transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
