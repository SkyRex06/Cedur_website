import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    fetch('http://localhost:5000/api/auth/me', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data && data.email) {
          setUser(data);
          setForm({ firstName: data.firstName, lastName: data.lastName, email: data.email });
        } else navigate('/login');
      })
      .catch(() => navigate('/login'));
  }, [navigate]);

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    try {
      await fetch('http://localhost:5000/api/auth/update-profile', {
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

  if (!user) return <div className="py-20 text-center">Loading...</div>;

  return (
    <div className="max-w-xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold mb-6">Update Profile</h1>
      <form className="bg-white rounded-2xl shadow p-6 border border-gray-100 flex flex-col gap-4" onSubmit={handleSubmit}>
        <input name="firstName" type="text" className="border rounded-lg px-4 py-2" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
        <input name="lastName" type="text" className="border rounded-lg px-4 py-2" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
        <input name="email" type="email" className="border rounded-lg px-4 py-2" placeholder="Email" value={form.email} onChange={handleChange} required />
        <button type="submit" className="bg-purple-700 text-white rounded-lg px-4 py-2 font-semibold hover:bg-purple-800 mt-2" disabled={loading}>{loading ? 'Saving...' : 'Save Changes'}</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
