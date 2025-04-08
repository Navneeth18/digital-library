import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const AuthForm = () => {
  const navigate = useNavigate();
  const { login, login_token, user } = useUser();
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    userId: '',
    name: '',
    email: '',
    password: '',
    role: 'user',
  });

  // Handle form data change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission for login or registration
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password length for sign-up
    if (!isSignIn && formData.password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    try {
      // Define the URL based on whether it's sign-in or sign-up
      const url = isSignIn
        ? 'http://localhost:3000/api/user/login'
        : 'http://localhost:3000/api/user/register';

      // Prepare the payload for login or sign-up
      const payload = isSignIn
        ? { userId: formData.userId, password: formData.password }
        : formData;

      // Send request to the backend
      const { data } = await axios.post(url, payload);
      alert(`${isSignIn ? 'Login' : 'Signup'} Successful`);
      console.log(data);

      if (!isSignIn) {
        // Reset the form for sign-up after successful registration
        setIsSignIn(true);
        setFormData({
          userId: '',
          name: '',
          email: '',
          password: '',
          role: 'user',
        });
      } else {
        // Store the token and user data on successful login
        localStorage.setItem('token', data.token); // Store token in localStorage
        login(data.user); // Store user in context
        login_token(data.token); // Store token in context

        // Navigate to the home page after login
        navigate('/');
      }
    } catch (err) {
      alert(err.response?.data?.message || `${isSignIn ? 'Login' : 'Signup'} Failed`);
    }
  };

  return (
    <div className="flex justify-center pt-[80px]" style={{ width: '150vh',  }}> 

    
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/library-dark.jpg')" }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-black bg-opacity-60 p-10 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </h2>

        <input
          type="text"
          name="userId"
          placeholder="User ID"
          value={formData.userId}
          onChange={handleChange}
          className="w-full mb-4 p-2 rounded bg-gray-800 border border-gray-600"
          required
        />

        {!isSignIn && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-4 p-2 rounded bg-gray-800 border border-gray-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-4 p-2 rounded bg-gray-800 border border-gray-600"
              required
            />
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full mb-4 p-2 rounded bg-gray-800 border border-gray-600"
            >
              <option value="user">User</option>
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
            </select>
          </>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-6 p-2 rounded bg-gray-800 border border-gray-600"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold mb-2"
        >
          {isSignIn ? 'Login' : 'Register'}
        </button>

        <p className="text-center text-sm">
          {isSignIn ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            type="button"
            onClick={() => setIsSignIn(!isSignIn)}
            className="text-blue-400 underline"
          >
            {isSignIn ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </form>
    </div>
    </div>
  );
};

export default AuthForm;
