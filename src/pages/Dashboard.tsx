import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, IndianRupee, Wallet, FileText, Leaf, Hospital } from 'lucide-react';
import { toast } from '../components/ui/sonner';

const cardData = [
	{ title: 'Total Number Of Employees', value: 3, icon: <User className="w-8 h-8 mb-2" /> },
	{ title: 'Total Payroll Amount (May)', value: '₹ 0.00', icon: <IndianRupee className="w-8 h-8 mb-2" /> },
	{ title: 'Net Payroll Amount (May)', value: '₹ 0.00', icon: <Wallet className="w-8 h-8 mb-2" /> },
	{ title: 'TDS Deducted (May)', value: '₹ 0.00', icon: <FileText className="w-8 h-8 mb-2" /> },
	{ title: 'PF Contribution (May)', value: '₹ 0.00', icon: <Leaf className="w-8 h-8 mb-2" /> },
	{ title: 'ESI Contribution (May)', value: '₹ 0.00', icon: <Hospital className="w-8 h-8 mb-2" /> },
];

const Dashboard = () => {
	const [user, setUser] = useState(() => {
		const stored = localStorage.getItem('user') || sessionStorage.getItem('user');
		return stored ? JSON.parse(stored) : null;
	});
	const [showProfileModal, setShowProfileModal] = useState(false);
	const [showPasswordModal, setShowPasswordModal] = useState(false);
	const [profileForm, setProfileForm] = useState({
		firstName: user?.firstName || '',
		lastName: user?.lastName || '',
		email: user?.email || '',
	});
	const [passwordForm, setPasswordForm] = useState({
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
	});
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('token') || sessionStorage.getItem('token');
		if (!token) {
			navigate('/login');
			return;
		}
		// Fetch user data if needed
		setUser({ firstName: 'Shivam', lastName: 'Prasad', role: 'Company Admin' });
	}, [navigate]);

	if (!user) {
		return (
			<div className="max-w-2xl mx-auto py-20 px-4 text-center">
				<h1 className="text-2xl font-bold mb-4">You are not logged in.</h1>
				<p className="text-gray-600">Please sign in to view your dashboard.</p>
			</div>
		);
	}

	// Update Profile Handler
	const handleProfileUpdate = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			// Simulate API call
			await new Promise((res) => setTimeout(res, 1000));
			const updatedUser = { ...user, ...profileForm };
			localStorage.setItem('user', JSON.stringify(updatedUser));
			sessionStorage.setItem('user', JSON.stringify(updatedUser));
			setUser(updatedUser);
			setShowProfileModal(false);
			toast.success('Profile updated successfully!');
		} catch {
			toast.error('Failed to update profile.');
		} finally {
			setLoading(false);
		}
	};

	// Change Password Handler
	const handlePasswordChange = async (e) => {
		e.preventDefault();
		if (passwordForm.newPassword !== passwordForm.confirmPassword) {
			toast.error('New passwords do not match.');
			return;
		}
		setLoading(true);
		try {
			// Simulate API call
			await new Promise((res) => setTimeout(res, 1000));
			setShowPasswordModal(false);
			toast.success('Password changed successfully!');
		} catch {
			toast.error('Failed to change password.');
		} finally {
			setLoading(false);
			setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
		}
	};

	return (
		<div className="bg-gray-50 min-h-screen">
			{/* Top Bar */}
			<div className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200 shadow-sm sticky top-0 z-30">
				<div className="flex items-center gap-4">
					<span className="text-2xl font-bold text-gray-900">Dashboard</span>
					<button className="ml-4 px-3 py-1 rounded bg-green-600 text-white font-semibold text-xs shadow hover:bg-green-700">
						CLOCK IN
					</button>
				</div>
				<div className="flex items-center gap-3">
					<div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
						<User className="w-8 h-8 text-gray-500" />
					</div>
					<div className="text-right">
						<div className="font-semibold text-gray-900">
							{user?.firstName} {user?.lastName}
						</div>
						<div className="text-xs text-gray-500">({user?.role})</div>
					</div>
				</div>
			</div>
			{/* Cards Grid */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
				{cardData.map((card, i) => (
					<div
						key={i}
						className={`bg-white rounded-xl shadow border p-6 flex flex-col items-center justify-center ${
							i === 5 ? 'border-2 border-green-300' : ''
						}`}
					>
						{card.icon}
						<div className="text-base font-semibold text-gray-700 mb-1 text-center">{card.title}</div>
						<div className="text-2xl font-bold text-gray-900 text-center">{card.value}</div>
					</div>
				))}
			</div>
			{/* Graphs Section */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-10 mb-10">
				<div className="bg-white rounded-xl shadow border p-6">
					<div className="font-semibold text-gray-700 mb-2">Daily Attendance</div>
					<div className="h-48 flex items-center justify-center text-gray-400">[Attendance Chart]</div>
				</div>
				<div className="bg-white rounded-xl shadow border p-6">
					<div className="font-semibold text-gray-700 mb-2">Salary-in Hand Paid</div>
					<div className="h-48 flex items-center justify-center text-gray-400">[Salary Chart]</div>
				</div>
			</div>
			{/* Update Profile Modal */}
			{showProfileModal && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
					<div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full relative">
						<button
							className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
							onClick={() => setShowProfileModal(false)}
							aria-label="Close"
						>
							&times;
						</button>
						<h3 className="text-2xl font-bold text-center mb-6 text-gray-900">Update Profile</h3>
						<form className="flex flex-col gap-4" onSubmit={handleProfileUpdate}>
							<input
								type="text"
								className="border rounded-lg px-4 py-2"
								placeholder="First Name"
								value={profileForm.firstName}
								onChange={(e) =>
									setProfileForm((f) => ({ ...f, firstName: e.target.value }))
								}
								required
							/>
							<input
								type="text"
								className="border rounded-lg px-4 py-2"
								placeholder="Last Name"
								value={profileForm.lastName}
								onChange={(e) =>
									setProfileForm((f) => ({ ...f, lastName: e.target.value }))
								}
								required
							/>
							<input
								type="email"
								className="border rounded-lg px-4 py-2"
								placeholder="Email"
								value={profileForm.email}
								onChange={(e) => setProfileForm((f) => ({ ...f, email: e.target.value }))}
								required
							/>
							<button
								type="submit"
								className="bg-purple-700 text-white rounded-lg px-4 py-2 font-semibold hover:bg-purple-800 mt-2"
								disabled={loading}
							>
								{loading ? 'Saving...' : 'Save Changes'}
							</button>
						</form>
					</div>
				</div>
			)}

			{/* Change Password Modal */}
			{showPasswordModal && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
					<div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full relative">
						<button
							className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
							onClick={() => setShowPasswordModal(false)}
							aria-label="Close"
						>
							&times;
						</button>
						<h3 className="text-2xl font-bold text-center mb-6 text-gray-900">Change Password</h3>
						<form className="flex flex-col gap-4" onSubmit={handlePasswordChange}>
							<input
								type="password"
								className="border rounded-lg px-4 py-2"
								placeholder="Current Password"
								value={passwordForm.currentPassword}
								onChange={(e) =>
									setPasswordForm((f) => ({ ...f, currentPassword: e.target.value }))
								}
								required
							/>
							<input
								type="password"
								className="border rounded-lg px-4 py-2"
								placeholder="New Password"
								value={passwordForm.newPassword}
								onChange={(e) => setPasswordForm((f) => ({ ...f, newPassword: e.target.value }))}
								required
							/>
							<input
								type="password"
								className="border rounded-lg px-4 py-2"
								placeholder="Confirm New Password"
								value={passwordForm.confirmPassword}
								onChange={(e) =>
									setPasswordForm((f) => ({ ...f, confirmPassword: e.target.value }))
								}
								required
							/>
							<button
								type="submit"
								className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold hover:bg-blue-700 mt-2"
								disabled={loading}
							>
								{loading ? 'Saving...' : 'Change Password'}
							</button>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default Dashboard;
