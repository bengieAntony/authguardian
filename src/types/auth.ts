export interface User {
  id: number;
  name: string;
  phone_number: string;
  created_at: string;
  last_login: string | null;
  login_attempts: number;
  is_locked: boolean;
  is_admin: boolean;
}

export interface OTPResponse {
  message: string;
}

export interface APIError {
  error: string;
}
