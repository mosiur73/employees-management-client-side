import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { toast } from 'react-toastify';
import img from '../../../assets/logo/images.png';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const { signOutUser, user, theme, toggleTheme } = useContext(AuthContext);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOutUser();
      toast.success('You have successfully signed out');
      setDropdownVisible(false);
    } catch (error) {
      toast.error('Failed  sign out. Please try again.');
      console.error('Sign-out error:', error);
    }
  };
  
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  return (
    <div className="navbar fixed top-0 z-10 left-0 right-0 pr-6 bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><NavLink className="text-xl font-bold" to="/">Home</NavLink></li>
            <li><NavLink className="text-xl font-bold" to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink className="text-xl font-bold" to="/contact">Contact</NavLink></li>

            {/* Show only when user is logged in */}
            {user && (
              <>
                <li><NavLink className="text-xl font-bold" to="/features">Feature</NavLink></li>
                <li><NavLink className="text-xl font-bold" to="/faq">Faq</NavLink></li>
              </>
            )}
          </ul>
        </div>
        <a className="pl-3 text-xl">
          <img className='w-14' src={img} alt="Logo" />
        </a>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink className="text-xl font-bold" to="/">Home</NavLink></li>
          <li><NavLink className="text-xl font-bold" to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink className="text-xl font-bold" to="/contact">Contact</NavLink></li>

          {/* Show only when user is logged in */}
          {user && (
            <>
              <li><NavLink className="text-xl font-bold" to="/features">Feature</NavLink></li>
              <li><NavLink className="text-xl font-bold" to="/faq">Faq</NavLink></li>
            </>
          )}
        </ul>
      </div>

      <div className="navbar-end">
        <button onClick={toggleTheme} className="theme-toggle-btn bg-gray-500 mr-4">
          {theme === 'light' ? '🌙 ' : '☀️ '}
        </button>

        {user ? (
          <div className="relative">
            {/* User Profile */}
            <img
              title={user.displayName}
              src={user.photoURL || <FaUserCircle />}
              alt="User"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={toggleDropdown}
            />
            {/* Dropdown */}
            {dropdownVisible && (
              <div className="absolute right-0 mt-6 w-40 h-40 bg-white shadow-lg rounded-lg p-2 z-10">
                <button className="btn btn-ghost mb-4">Update Profile</button>
                <button onClick={handleSignOut} className="btn btn-info w-full text-center">
                  Log Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/signup">
              <button className='btn btn-accent'>Signup</button>
            </Link>
            <Link to="/login">
              <button className='btn btn-info ml-3'>Login</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
