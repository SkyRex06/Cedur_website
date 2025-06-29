import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const [form, setForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (!token) navigate('/login');
  }, [navigate]);

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (form.newPassword !== form.confirmPassword) return;
    setLoading(true);
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    try {
      await fetch('http://localhost:5000/api/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(form)
      });
      navigate('/profile');
    } catch {
      // handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold mb-6">Change Password</h1>
      <form className="bg-white rounded-2xl shadow p-6 border border-gray-100 flex flex-col gap-4" onSubmit={handleSubmit}>
        <input name="currentPassword" type="password" className="border rounded-lg px-4 py-2" placeholder="Current Password" value={form.currentPassword} onChange={handleChange} required />
        <input name="newPassword" type="password" className="border rounded-lg px-4 py-2" placeholder="New Password" value={form.newPassword} onChange={handleChange} required />
        <input name="confirmPassword" type="password" className="border rounded-lg px-4 py-2" placeholder="Confirm New Password" value={form.confirmPassword} onChange={handleChange} required />
        <button type="submit" className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold hover:bg-blue-700 mt-2" disabled={loading}>{loading ? 'Saving...' : 'Change Password'}</button>
      </form>
    </div>
  );
};

export default ChangePassword;
