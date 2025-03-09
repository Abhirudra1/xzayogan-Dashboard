import React from 'react';
import GoogleLoginButton from './GoogleLoginButton';
import axios from 'axios';

export default function LoginPage({ onLoginSuccess }) {
    const handleGoogleSuccess = async (response) => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/google', {
                token: response.credential,
            });
            
            const { token, user } = res.data;
            onLoginSuccess(token, user); // Pass token and user to the parent component
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const handleGoogleError = () => {
        console.log('Login Failed');
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96 ">
                <h2 className="text-2xl font-bold mb-4">Welcome</h2>
                <input className="w-full p-2 border rounded-lg mb-4" type="text" placeholder="Email address or phone number*" />
                <button className="w-full bg-blue-500 text-white p-2 rounded-lg mb-4">Continue</button>
                <div className="flex justify-between items-center mb-4">
                    <span>Don't have an account?</span>
                    <a className="text-blue-500" href="#">Sign Up</a>
                </div>
                <div className="flex items-center mb-4">
                    <hr className="flex-1" />
                    <span className="px-2">OR</span>
                    <hr className="flex-1" />
                </div>
                <GoogleLoginButton onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
            </div>
        </div>
    );
}