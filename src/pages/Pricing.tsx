import React, { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const plans = [
	{
		name: 'Free',
		price: '₹ 0',
		period: 'Yearly',
		seats: 10,
		features: [
			'Payroll Management',
			'Leave Management',
			'Attendance Management',
			'Employee Onboarding',
			'Access & User Management',
			'Payslip Generation',
			'Support via Email',
			'Advanced Analytics & Reporting',
			'Bulk Excel Import & Export',
			'Direct Deposit via Cedur',
			'Cost Per Additional Employee',
		],
		extra: [],
		support: ['Support via Email'],
		recommended: false,
	},
	{
		name: 'Basic',
		price: '₹ 23,999',
		period: 'Yearly',
		seats: 25,
		features: [
			'Payroll Management',
			'Leave Management',
			'Attendance Management',
			'Employee Onboarding',
			'Access & User Management',
			'Payslip Generation',
			'Support via Email',
			'Advanced Analytics & Reporting',
			'Bulk Excel Import & Export',
			'Direct Deposit via Cedur',
			'Cost Per Additional Employee',
		],
		extra: [],
		support: ['Support via Email'],
		recommended: true,
	},
	{
		name: 'Growth',
		price: '₹ 39,999',
		period: 'Yearly',
		seats: 50,
		features: [
			'Payroll Management',
			'Leave Management',
			'Attendance Management',
			'Employee Onboarding',
			'Access & User Management',
			'Payslip Generation',
			'Advanced Analytics & Reporting',
			'Bulk Excel Import & Export',
			'Direct Deposit via Cedur',
			'Support via Call',
		],
		extra: [],
		support: ['Support via Call'],
		recommended: false,
	},
	{
		name: 'Veteran',
		price: '₹ 69,999',
		period: 'Yearly',
		seats: 100,
		features: [
			'Payroll Management',
			'Leave Management',
			'Attendance Management',
			'Employee Onboarding',
			'Access & User Management',
			'Payslip Generation',
			'Support via Email',
			'Advanced Analytics & Reporting',
			'Bulk Excel Import & Export',
			'Direct Deposit via Cedur',
			'Cost Per Additional Employee',
			'Support via Call',
		],
		extra: [],
		support: ['Support via Email', 'Support via Call'],
		recommended: false,
	},
];

const Pricing = () => {
	const navigate = useNavigate();
	const [expanded, setExpanded] = useState(Array(plans.length).fill(true));

	return (
      <div className="min-h-screen pt-12 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 pb-24">
    <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Transparent Plans for Every Business
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          All the payroll and HR essentials you need—no surprises, no extra charges. Choose the plan that fits your team and scale with confidence.
        </p>
      </div>
    </section>
    <div className="h-8 md:h-12"></div>
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-6 px-2 md:px-0 mb-16 mt-4 md:mt-8">
      {plans.map((plan, idx) => (
        <div
          key={plan.name}
          className={`relative flex-1 max-w-xs bg-white border border-gray-200 rounded-2xl shadow-sm p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-md`}
          style={{ minHeight: '540px', background: '#fff' }}
        >
          {plan.recommended && (
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 text-center z-20">
              <div className="bg-blue-100 text-blue-700 font-semibold rounded-full py-1 px-4 shadow text-xs tracking-wide uppercase border border-blue-200">
                Recommended
              </div>
            </div>
          )}
          <h3 className="text-2xl font-bold mb-2 mt-8 text-center text-blue-900 tracking-wide">
            {plan.name}
          </h3>
          <div className="text-2xl font-semibold mb-2 text-center text-blue-800 flex items-end gap-2">
            {plan.price}
            <span className="text-base font-normal text-gray-500 mb-1">
              / {plan.period}
            </span>
          </div>
          <div className="mb-6 text-gray-700 font-medium text-base">
            Up to {plan.seats} Employees
          </div>
          <button
            className="border border-blue-600 text-blue-700 font-semibold rounded-lg px-6 py-2 mb-6 bg-white hover:bg-blue-50 transition-colors text-base"
            onClick={() => navigate('/signup')}
          >
            Create an Account
          </button>
          <ul className="w-full text-left text-gray-800 text-base mb-4 space-y-2">
            {plan.features.map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          {plan.support && plan.support.length > 0 && (
            <div className="w-full mt-auto pt-4 border-t border-gray-200 text-gray-600 text-sm text-center">
              <span className="font-semibold">Support:</span> {plan.support.join(', ')}
            </div>
          )}
        </div>
      ))}
    </div>
		</div>
	);
};

export default Pricing;
