import axios from 'axios';
import { getSession } from 'next-auth/react';

// Create an Axios instance
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || '/api/backend',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to add the user's email
api.interceptors.request.use(
    async (config) => {
        const session = await getSession();
        if (session?.user?.email) {
            config.headers['x-user-email'] = session.user.email;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
