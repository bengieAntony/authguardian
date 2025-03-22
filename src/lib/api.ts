import axios from 'axios';
import type { User, OTPResponse } from '@/types/auth';

const api = axios.create({
  baseURL: 'http://localhost:8000', // Adjust based on your Django server
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = async (phoneNumber: string, name: string): Promise<OTPResponse> => {
  const response = await api.post<OTPResponse>('/api/register/', {
    phone_number: phoneNumber,
    name,
  });
  return response.data;
};

export const verifyOTP = async (phoneNumber: string, otp: string, name: string): Promise<User> => {
  const response = await api.post<User>('/api/verify-otp/', {
    phone_number: phoneNumber,
    otp,
    name,
  });
  return response.data;
};
