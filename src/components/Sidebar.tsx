import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Calendar, CreditCard, Gift, Settings, HelpCircle, Archive, ChevronDown, ChevronUp } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', icon: <Home />, path: '/dashboard' },
  { label: 'People', icon: <Users />, expandable: true, children: [
    { label: 'All Employees', path: '/people' },
    { label: 'Add Employee', path: '/people/add' },
  ] },
  { label: 'Attendance', icon: <Calendar />, expandable: true, children: [
    { label: 'Daily', path: '/attendance/daily' },
    { label: 'Monthly', path: '/attendance/monthly' },
  ] },
  { label: 'Payroll', icon: <CreditCard />, expandable: true, children: [
    { label: 'Payslips', path: '/payroll/payslips' },
    { label: 'Reports', path: '/payroll/reports' },
  ] },
  { label: 'Holidays', icon: <Gift />, expandable: true, children: [
    { label: 'Holiday List', path: '/holidays' },
  ] },
  { label: 'Settings', icon: <Settings />, path: '/settings' },
  { label: 'Tickets', icon: <HelpCircle />, path: '/tickets' },
  { label: 'Archives', icon: <Archive />, path: '/archives' },
];

const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState({});

  const handleExpand = (label) => {
    setOpen((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 shadow-sm flex flex-col z-40">
      <div className="flex items-center h-20 px-6 border-b border-gray-100">
        <img src="/cedur-logo.png" alt="Cedur Logo" className="h-10 w-auto mr-2" />
      </div>
      <nav className="flex-1 overflow-y-auto py-4 px-2">
        {navItems.map((item) => (
          <div key={item.label}>
            <Link
              to={item.path || '#'}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-base transition-colors mb-1 ${location.pathname.startsWith(item.path) ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={item.expandable ? (e) => { e.preventDefault(); handleExpand(item.label); } : undefined}
            >
              {item.icon}
              {item.label}
              {item.expandable && (open[item.label] ? <ChevronUp className="ml-auto w-4 h-4" /> : <ChevronDown className="ml-auto w-4 h-4" />)}
            </Link>
            {item.expandable && open[item.label] && (
              <div className="ml-10 mb-2">
                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    to={child.path}
                    className={`block px-2 py-1 rounded text-sm font-medium mb-1 ${location.pathname === child.path ? 'text-purple-700 font-semibold' : 'text-gray-600 hover:text-purple-700'}`}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
