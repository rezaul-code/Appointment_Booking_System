import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import Input from '../components/shared/Input';
import Button from '../components/shared/Button';

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setUserType] = useState<'doctor' | 'visitor'>('visitor');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    specialization: '',
    license: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Implement signup logic here
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: '',
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Calendar className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="mb-6">
            <div className="flex rounded-md shadow-sm">
              <button
                type="button"
                onClick={() => setUserType('visitor')}
                className={`relative w-1/2 py-2 text-sm font-medium rounded-l-md focus:outline-none ${
                  userType === 'visitor'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:text-gray-500 border border-gray-300'
                }`}
              >
                Visitor
              </button>
              <button
                type="button"
                onClick={() => setUserType('doctor')}
                className={`relative w-1/2 py-2 text-sm font-medium rounded-r-md focus:outline-none ${
                  userType === 'doctor'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:text-gray-500 border border-gray-300'
                }`}
              >
                Doctor
              </button>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              label="Full name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              required
            />

            <Input
              label="Email address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />

            {userType === 'doctor' && (
              <>
                <Input
                  label="Specialization"
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  error={errors.specialization}
                  required
                />

                <Input
                  label="License Number"
                  type="text"
                  name="license"
                  value={formData.license}
                  onChange={handleChange}
                  error={errors.license}
                  required
                />
              </>
            )}

            <Input
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required
            />

            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              required
            />

            <Button type="submit" isLoading={isLoading} fullWidth>
              Create Account
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;