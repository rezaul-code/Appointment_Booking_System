import toast from 'react-hot-toast';

const API_URL = 'http://localhost:5000/api';

interface ApiResponse<T> {
  data?: T;
  error?: string;
}

async function handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
  const contentType = response.headers.get('content-type');
  const isJson = contentType && contentType.includes('application/json');
  const data = isJson ? await response.json() : null;

  if (!response.ok) {
    const error = (data && data.message) || response.statusText;
    toast.error(error);
    return { error };
  }

  return { data };
}

export async function login(email: string, password: string) {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const result = await handleResponse<{ token: string }>(response);
    if (result.data?.token) {
      localStorage.setItem('token', result.data.token);
      toast.success('Login successful!');
    }
    return result;
  } catch (error) {
    toast.error('Failed to connect to server');
    return { error: 'Network error' };
  }
}

export async function signup(userData: {
  name: string;
  email: string;
  password: string;
  role: 'doctor' | 'visitor';
  specialization?: string;
  licenseNumber?: string;
}) {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    const result = await handleResponse<{ token: string }>(response);
    if (result.data?.token) {
      localStorage.setItem('token', result.data.token);
      toast.success('Registration successful!');
    }
    return result;
  } catch (error) {
    toast.error('Failed to connect to server');
    return { error: 'Network error' };
  }
}

export async function getDoctors() {
  try {
    const response = await fetch(`${API_URL}/doctors`);
    return await handleResponse(response);
  } catch (error) {
    toast.error('Failed to fetch doctors');
    return { error: 'Network error' };
  }
}

export async function bookAppointment(appointmentData: {
  doctorId: number;
  date: string;
  time: string;
  reason: string;
}) {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/appointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token || '',
      },
      body: JSON.stringify(appointmentData),
    });

    const result = await handleResponse(response);
    if (result.data) {
      toast.success('Appointment booked successfully!');
    }
    return result;
  } catch (error) {
    toast.error('Failed to book appointment');
    return { error: 'Network error' };
  }
}

export async function getAppointments() {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/appointments`, {
      headers: {
        'x-auth-token': token || '',
      },
    });
    return await handleResponse(response);
  } catch (error) {
    toast.error('Failed to fetch appointments');
    return { error: 'Network error' };
  }
}

export async function updateAppointmentStatus(appointmentId: number, status: string) {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/appointments/${appointmentId}/status`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token || '',
      },
      body: JSON.stringify({ status }),
    });

    const result = await handleResponse(response);
    if (result.data) {
      toast.success('Appointment status updated!');
    }
    return result;
  } catch (error) {
    toast.error('Failed to update appointment status');
    return { error: 'Network error' };
  }
}