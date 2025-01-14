import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {
  const {signOutUser,user}=useContext(AuthContext)

  const handleSignOut = async () => {
    try {
      await signOutUser();
      toast.success('You have successfully signed out!');
    } catch (error) {
      toast.error('Failed to sign out. Please try again.');
      console.error('Sign-out error:', error);
    }
  };

  const links = < >
  <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to="/about">About</NavLink></li>
  <li><NavLink to="/contact">Contact</NavLink></li>
  <li><NavLink to="/login">Login</NavLink></li>
  <li><NavLink to="/signup">Signup</NavLink></li>
  
    
</>
    return (
        <div className="navbar bg-base-200">
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
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Final</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
         {user ?<>
          <button onClick={handleSignOut}  className='btn btn-error' >Log Out</button>
         </>
         :
        <Link to="/login">
        <button className='btn btn-error'>Login</button>
        </Link>
         }
        </div>
      </div>
    );
};

export default Navbar;