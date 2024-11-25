import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import DoctorDashboard from './pages/DoctorDashboard';
import VisitorDashboard from './pages/VisitorDashboard';
import AdminDashboard from './pages/AdminDashboard';
import DoctorProfile from './pages/DoctorProfile';
import BookAppointment from './pages/BookAppointment';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/doctor/dashboard"
              element={
                <PrivateRoute role="doctor">
                  <DoctorDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/visitor/dashboard"
              element={
                <PrivateRoute role="visitor">
                  <VisitorDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <PrivateRoute role="admin">
                  <AdminDashboard />
                </PrivateRoute>
              }
            />
            <Route path="/doctor/:id" element={<DoctorProfile />} />
            <Route
              path="/book-appointment/:doctorId"
              element={
                <PrivateRoute role="visitor">
                  <BookAppointment />
                </PrivateRoute>
              }
            />
          </Routes>
          <Toaster position="top-right" />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;