import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserCircle, Menu, X, Calendar, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  // This would normally come from your auth context
  const isLoggedIn = false;

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Calendar className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">MedBook</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {isLoggedIn ? (
              <>
                <Link to="/appointments" className="text-gray-700 hover:text-blue-600">
                  My Appointments
                </Link>
                <button
                  onClick={() => {/* Implement logout */}}
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {isLoggedIn ? (
              <>
                <Link
                  to="/appointments"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  My Appointments
                </Link>
                <button
                  onClick={() => {/* Implement logout */}}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;