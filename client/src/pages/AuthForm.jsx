import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/userContext';

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

  // useEffect(() => {
  //   const fetchPublicResources = async () => {
  //     try {
  //       const { data } = await axios.get('http://localhost:3000/api/resource/public');
  //       console.log('Resources for public:', data.payload);
  //     } catch (err) {
  //       console.error('Error loading public resources:', err);
  //     }
  //   };

  //   // Only run if not signed in (initial screen)
  //   if (!user) fetchPublicResources();
  // }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isSignIn && formData.password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    try {
      const url = isSignIn
        ? 'http://localhost:3000/api/user/login'
        : 'http://localhost:3000/api/user/register';

      const payload = isSignIn
        ? { userId: formData.userId, password: formData.password }
        : formData;

      const { data } = await axios.post(url, payload);
      alert(`${isSignIn ? 'Login' : 'Signup'} Successful`);

      if (!isSignIn) {
        setIsSignIn(true);
        setFormData({
          userId: '',
          name: '',
          email: '',
          password: '',
          role: 'user',
        });
      } else {
        login(data.user);
        login_token(data.token);

        // try {
        //   const role = data.user.role;
        //   const resourceUrl = `http://localhost:3000/api/resource/${role.toLowerCase()}`;

        //   const res = await axios.get(resourceUrl, {
        //     headers: {
        //       Authorization: `Bearer ${data.token}`,
        //     },
        //   });

        //   console.log(`Resources for ${role}:`, res.data.payload);
        // } catch (resourceError) {
        //   console.error('Error fetching role-based resources:', resourceError);
        // }

        navigate('/');
      }
    } catch (err) {
      alert(err.response?.data?.message || `${isSignIn ? 'Login' : 'Signup'} Failed`);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center text-white"
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
  );
};

export default AuthForm;
