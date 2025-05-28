import React from 'react';
import ErrorImage from '../assets/E.png';

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 text-center">
            {/* Gambar 404 dari folder assets */}
            
            <img 
                src={ErrorImage} 
                alt="401 Not Found" 
            />
            <h1 className="text-9xl font-bold text-red-500 mb-4">401</h1>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Sorry, Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-6">The page you requested could not be found</p>
            
            <a 
                href="/" 
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
                
                Go back to Home
            </a>
        </div>
    );
}

