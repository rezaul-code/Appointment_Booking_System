import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import Input from '../components/shared/Input';
import Button from '../components/shared/Button';

const BookAppointment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    reason: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Implement booking logic here
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900">Book an Appointment</h2>
            <p className="mt-1 text-sm text-gray-500">
              Please fill in the details below to schedule your appointment.
            </p>
          </div>

          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Preferred Date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />

              <Input
                label="Preferred Time"
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Reason for Visit
                </label>
                <textarea
                  name="reason"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" isLoading={isLoading} fullWidth>
                Confirm Booking
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;