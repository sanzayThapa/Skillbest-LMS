"use client";

import { useEffect, useState } from 'react';
import api from '@/lib/api';

export default function TestConnection() {
    const [message, setMessage] = useState('Loading...');

    useEffect(() => {
        api.get('/')
            .then((response) => {
                setMessage(response.data);
            })
            .catch((error) => {
                setMessage('Error connecting to backend: ' + error.message);
            });
    }, []);

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
            <h3>Backend Connection Test</h3>
            <p>Response: <strong>{message}</strong></p>
        </div>
    );
}
