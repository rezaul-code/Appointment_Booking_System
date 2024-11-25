import React from 'react';
import { Calendar, Search } from 'lucide-react';
import Button from '../components/shared/Button';

const VisitorDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">My Appointments</h1>
        <Button>
          Book New Appointment
        </Button>
      </div>

      {/* Search Doctors */}
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Search for doctors..."
          />
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Upcoming Appointments</h2>
        <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {[1, 2].map((appointment) => (
              <li key={appointment}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-12 w-12 rounded-full"
                          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&h=100&q=80"
                          alt="Doctor"
                        />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Dr. Sarah Johnson</p>
                        <p className="text-sm text-gray-500">Cardiologist</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Confirmed
                      </span>
                      <span className="text-sm text-gray-500">Tomorrow at 10:00 AM</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Past Appointments */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Past Appointments</h2>
        <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {[1].map((appointment) => (
              <li key={appointment}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-12 w-12 rounded-full"
                          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&h=100&q=80"
                          alt="Doctor"
                        />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Dr. Michael Brown</p>
                        <p className="text-sm text-gray-500">General Physician</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                        Completed
                      </span>
                      <span className="text-sm text-gray-500">Last week</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VisitorDashboard;