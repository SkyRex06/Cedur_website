import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for token in localStorage/sessionStorage
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    // Fetch user data from backend
    fetch('http://localhost:5000/api/auth/me', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data && data.email) setUser(data);
        else navigate('/login');
      })
      .catch(() => navigate('/login'));
  }, [navigate]);

  if (!user) return <div className="py-20 text-center">Loading...</div>;

  return (
    <div className="max-w-xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="bg-white rounded-2xl shadow p-6 mb-8 border border-gray-100 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center text-3xl font-bold text-purple-700 mb-4 overflow-hidden">
          {user.avatar ? (
            <img src={user.avatar} alt="Profile" className="w-full h-full object-cover rounded-full" />
          ) : (
            user.firstName ? user.firstName[0] : 'U'
          )}
        </div>
        <div className="text-xl font-semibold mb-1">{user.firstName} {user.lastName}</div>
        <div className="text-gray-600 mb-1">{user.email}</div>
        <div className="text-gray-400 text-sm mb-4">Account Created: {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</div>
        <div className="flex gap-3 mt-2">
          <button className="px-4 py-2 rounded-lg bg-purple-700 text-white font-medium hover:bg-purple-800" onClick={() => navigate('/update-profile')}>Update Profile</button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700" onClick={() => navigate('/change-password')}>Change Password</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
