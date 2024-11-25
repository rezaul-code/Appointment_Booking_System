import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Book Medical Appointments</span>
            <span className="block text-blue-600">With Ease</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Connect with the best healthcare professionals in your area. Book appointments online, hassle-free.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                to="/signup"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                Get Started
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link
                to="/login"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to book appointments
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Search className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Find Doctors</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Search and filter through our extensive network of healthcare professionals.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Calendar className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Book Online</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Schedule appointments at your convenience, 24/7.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <CheckCircle className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Instant Confirmation</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Receive immediate confirmation and reminders for your appointments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Doctors Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Featured Doctors</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Meet some of our top-rated healthcare professionals
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((doctor) => (
              <div key={doctor} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-20 w-20">
                      <img
                        className="h-20 w-20 rounded-full"
                        src={`https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200`}
                        alt="Doctor"
                      />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Dr. Sarah Johnson</h3>
                      <p className="text-sm text-gray-500">Cardiologist</p>
                      <div className="mt-1 flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-5 w-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 15.585l-6.327 3.323 1.209-7.037L.172 7.332l7.046-1.024L10 0l2.782 6.308 7.046 1.024-4.71 4.539 1.209 7.037z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link
                      to="/book-appointment/1"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;