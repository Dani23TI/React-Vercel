import React from "react";
import ErrorImage from '../assets/E.png';

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 text-center">
            
            <img 
                src={ErrorImage} 
                alt="403 Not Found" 
            />
            <h1 className="text-9xl font-bold text-red-500 mb-4">404</h1>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Sorry, Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-6">The page you requested could not be found</p>
            <p className="text-lg text-gray-600 mb-6">Check URL or go back home</p>
            <a 
                href="/" 
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
                
                Go back to Home
            </a>
        </div>
  );
}

export default ErrorPage;
