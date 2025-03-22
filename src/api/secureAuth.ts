// API Base URL - replace with actual API URL in production
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

// MFA Configuration Endpoints
export const mfaApi = {
  getMfaConfig: async () => {
    const response = await fetch(`${API_BASE_URL}/mfa/config`);
    return response.json();
  },
  
  updateMfaConfig: async (config: {
    ussd: boolean;
    sms: boolean;
    voice: boolean;
    email: boolean;
    defaultMethod: string;
  }) => {
    const response = await fetch(`${API_BASE_URL}/mfa/config`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(config),
    });
    return response.json();
  },
};

// Authentication Logs Endpoints
export const logsApi = {
  getLogs: async (params: {
    startDate?: string;
    endDate?: string;
    type?: 'success' | 'failed' | 'mfa' | 'blocked';
    page?: number;
    limit?: number;
  }) => {
    const queryParams = new URLSearchParams(params as any).toString();
    const response = await fetch(`${API_BASE_URL}/auth/logs?${queryParams}`);
    return response.json();
  },
  
  downloadLogs: async (params: {
    startDate: string;
    endDate: string;
    format: 'csv' | 'json';
  }) => {
    const queryParams = new URLSearchParams(params as any).toString();
    const response = await fetch(`${API_BASE_URL}/auth/logs/download?${queryParams}`);
    return response.blob();
  },
};

// API Keys Management Endpoints
export const apiKeysApi = {
  getApiKeys: async () => {
    const response = await fetch(`${API_BASE_URL}/api-keys`);
    return response.json();
  },
  
  regenerateApiKey: async () => {
    const response = await fetch(`${API_BASE_URL}/api-keys/regenerate`, {
      method: 'POST',
    });
    return response.json();
  },
  
  updateIpWhitelist: async (ips: string[]) => {
    const response = await fetch(`${API_BASE_URL}/api-keys/whitelist`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ips }),
    });
    return response.json();
  },
};

// Analytics Endpoints
export const analyticsApi = {
  getAuthMetrics: async (params: {
    timeframe: '24h' | '7d' | '30d';
  }) => {
    const queryParams = new URLSearchParams(params as any).toString();
    const response = await fetch(`${API_BASE_URL}/analytics/auth?${queryParams}`);
    return response.json();
  },
  
  getRiskMetrics: async (params: {
    timeframe: '24h' | '7d' | '30d';
  }) => {
    const queryParams = new URLSearchParams(params as any).toString();
    const response = await fetch(`${API_BASE_URL}/analytics/risk?${queryParams}`);
    return response.json();
  },
  
  getMfaUsageStats: async () => {
    const response = await fetch(`${API_BASE_URL}/analytics/mfa-usage`);
    return response.json();
  },
};

// User Profile & Settings Endpoints
export const userApi = {
  getProfile: async () => {
    const response = await fetch(`${API_BASE_URL}/user/profile`);
    return response.json();
  },
  
  updateProfile: async (data: {
    email?: string;
    password?: string;
    notificationPreferences?: {
      emailAlerts: boolean;
      smsAlerts: boolean;
    };
  }) => {
    const response = await fetch(`${API_BASE_URL}/user/profile`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  
  enable2FA: async (method: string) => {
    const response = await fetch(`${API_BASE_URL}/user/2fa/enable`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ method }),
    });
    return response.json();
  },
};
