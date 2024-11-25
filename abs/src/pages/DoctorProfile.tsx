import React from 'react';
import { Calendar, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from '../components/shared/Button';

const DoctorProfile = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        {/* Header */}
        <div className="px-4 py-5 sm:px-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-24 w-24 rounded-full"
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&h=200&q=80"
                alt="Doctor"
              />
            </div>
            <div className="ml-6">
              <h1 className="text-2xl font-bold text-gray-900">Dr. Sarah Johnson</h1>
              <p className="text-sm text-gray-500">Cardiologist</p>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <MapPin className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                New York, NY
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium text-gray-900">About</h3>
              <p className="mt-2 text-sm text-gray-500">
                Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in treating heart conditions. She specializes in preventive cardiology and heart disease management.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span className="ml-3 text-sm text-gray-500">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span className="ml-3 text-sm text-gray-500">dr.sarah@example.com</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span className="ml-3 text-sm text-gray-500">Mon-Fri, 9:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Available Time Slots</h3>
              <div className="mt-2 grid grid-cols-3 gap-3">
                {['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'].map((time) => (
                  <button
                    key={time}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {time}
                  </button>
                ))}
              </div>

              <div className="mt-6">
                <Button fullWidth>
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;