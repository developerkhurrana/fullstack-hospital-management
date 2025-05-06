import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add request interceptor to add auth token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add response interceptor to handle token expiration
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

interface LoginCredentials {
    email: string;
    password: string;
}

interface RegisterData {
    name: string;
    email: string;
    password: string;
    role: string;
}

export const login = (credentials: LoginCredentials) => {
    return api.post('/auth/login', credentials);
};

export const register = (data: RegisterData) => {
    return api.post('/auth/register', data);
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
};

// User API endpoints
export const userAPI = {
    getProfile: () => api.get('/users/profile'),
    updateProfile: (data: any) => api.put('/users/profile', data),
};

// Patient API endpoints
export const patientAPI = {
    getAll: () => api.get('/patients'),
    getById: (id: string) => api.get(`/patients/${id}`),
    create: (data: any) => api.post('/patients', data),
    update: (id: string, data: any) => api.put(`/patients/${id}`, data),
    delete: (id: string) => api.delete(`/patients/${id}`),
};

// Doctor API endpoints
export const doctorAPI = {
    getAll: () => api.get('/doctors'),
    getById: (id: string) => api.get(`/doctors/${id}`),
    create: (data: any) => api.post('/doctors', data),
    update: (id: string, data: any) => api.put(`/doctors/${id}`, data),
    delete: (id: string) => api.delete(`/doctors/${id}`),
};

// Appointment API endpoints
export const appointmentAPI = {
    getAll: () => api.get('/appointments'),
    getById: (id: string) => api.get(`/appointments/${id}`),
    create: (data: any) => api.post('/appointments', data),
    update: (id: string, data: any) => api.put(`/appointments/${id}`, data),
    delete: (id: string) => api.delete(`/appointments/${id}`),
};

// Department API endpoints
export const departmentAPI = {
    getAll: () => api.get('/departments'),
    getById: (id: string) => api.get(`/departments/${id}`),
    create: (data: any) => api.post('/departments', data),
    update: (id: string, data: any) => api.put(`/departments/${id}`, data),
    delete: (id: string) => api.delete(`/departments/${id}`),
};

export default api; 